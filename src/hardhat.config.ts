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
        enabled: false, //set to 'false' when API KEY env var is not set
        url: ``,
      },
    },
  },
};

export default config;
