import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {expect} from "chai";
import hre from "hardhat";

// whenExpectingAnyValueOut?
// import {anyValue} from "@nomicfoundation/hardhat-chai-matchers/withArgs";

describe("Counter", function () {
  async function deployContractWithCounter() {
    const initialCounter = 10;

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(initialCounter);

    return {counter, initialCounter, owner, otherAccount};
  }

  describe("Initialization", function () {
    it("Should set the initial counter value <>", async function () {
      const {initialCounter, counter} = await loadFixture(
        deployContractWithCounter
      );

      expect(await counter.getCounter()).to.equal(initialCounter);
    });
  });

  describe("Increment", function () {
    it("Should increment the counter value by <>", async function () {
      const {counter, initialCounter} = await loadFixture(
        deployContractWithCounter
      );

      await counter.increment();
      expect(await counter.getCounter()).to.equal(initialCounter + 1);
    });

    it("Should emit CounterChanged event on increment <>", async function () {
      const {counter, initialCounter} = await loadFixture(
        deployContractWithCounter
      );

      await expect(counter.increment())
        .to.emit(counter, "CounterChanged")
        .withArgs(initialCounter + 1);
    });
  });

  describe("Decrement", function () {
    it("Should decrement the counter value by 1 <>", async function () {
      const {counter, initialCounter} = await loadFixture(
        deployContractWithCounter
      );

      await counter.decrement();
      expect(await counter.getCounter()).to.equal(initialCounter - 1);
    });

    it("Should emit CounterChanged event on decrement <>", async function () {
      const {counter, initialCounter} = await loadFixture(
        deployContractWithCounter
      );

      await expect(counter.decrement())
        .to.emit(counter, "CounterChanged")
        .withArgs(initialCounter - 1);
    });
  });
});

// https://hardhat.org/hardhat-runner/docs/guides/test-contracts#testing-contracts --->
// npx hardhat test
