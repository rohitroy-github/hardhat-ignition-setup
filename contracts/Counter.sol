// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// forConsolingDuringTests
// import "hardhat/console.sol";

// Author: @rohitroy-github
contract Counter {
    uint256 private counter;

    // Event to log the counter value changes
    event CounterChanged(uint256 newValue);

    // Constructor to initialize the counter value
    constructor(uint256 initialValue) {
        counter = initialValue;

        // console.log("Counter initialized to %d", initialValue);

        emit CounterChanged(counter);
    }

    // Function to increment the counter
    function increment() public {
        counter += 1;
        emit CounterChanged(counter);
    }

    // Function to decrement the counter
    function decrement() public {
        counter -= 1;
        emit CounterChanged(counter);
    }

    // Function to get the current counter value
    function getCounter() public view returns (uint256) {
        return counter;
    }
}
