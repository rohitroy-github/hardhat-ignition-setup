import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("CounterDeploymentModule", (m) => {
  const counter = m.contract("Counter", [10]);

  return {counter};
});

// # npx hardhat ignition deploy ignition/modules/CounterDeploymentModule.ts

// https://hardhat.org/ignition/docs/getting-started#deploying-it --->
// # npx hardhat ignition deploy ignition/modules/CounterDeploymentModule.ts --network localhost

// https://hardhat.org/ignition/docs/guides/modifications#clearing-an-existing-deployment-with-reset --->
// npx hardhat ignition deploy ignition/modules/CounterDeploymentModule.ts --network localhost --reset

// https://hardhat.org/hardhat-runner/docs/guides/verifying#deploying-and-verifying-a-contract-in-the-sepolia-testnet --->
// npx hardhat ignition deploy ignition/modules/CounterDeploymentModule.ts --network sepolia --verify
