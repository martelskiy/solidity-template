import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.21" }],
  },
  networks: {
    hardhat: {
      forking: {
        enabled: false,
        url: ``,
      },
    },
  },
};

export default config;
