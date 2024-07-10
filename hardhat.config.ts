import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

// https://www.npmjs.com/package/hardhat-gas-reporter
require("hardhat-gas-reporter");

const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY || "";
const SEPOLIA_ALCHEMY_RPC_URL = process.env.SEPOLIA_ALCHEMY_RPC_URL || "";
const AMOY_ALCHEMY_RPC_URL = process.env.AMOY_ALCHEMY_RPC_URL || "";
const MORPH_TESTNET_RPC_URL = process.env.MORPH_TESTNET_RPC_URL || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",

  solidity: "0.8.24",

  networks: {
    sepolia: {
      url: SEPOLIA_ALCHEMY_RPC_URL,
      accounts: [METAMASK_PRIVATE_KEY],
      chainId: 11155111,
    },

    amoy: {
      url: AMOY_ALCHEMY_RPC_URL,
      accounts: [METAMASK_PRIVATE_KEY],
      chainId: 80002,
    },

    // https://docs.morphl2.io/docs/build-on-morph/build-on-morph/development-setup --->
    morph: {
      url: process.env.MORPH_TESTNET_RPC_URL,
      accounts: [METAMASK_PRIVATE_KEY],
      chainId: 2710,
    },

    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },

  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      morph: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        // https://docs.morphl2.io/docs/build-on-morph/build-on-morph/verify-your-smart-contracts
        network: "morph",
        chainId: 2710,
        urls: {
          apiURL: "https://explorer-api-testnet.morphl2.io/api",
          browserURL: "https://explorer-testnet.morphl2.io",
        },
      },
    ],
  },

  // https://www.npmjs.com/package/hardhat-gas-reporter
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,

    noColors: true,
    currency: "INR",
    token: "ETH",
    coinmarketcap: COINMARKETCAP_API_KEY,
    // outputFile: "gas-report.txt",
  },
};

export default config;
