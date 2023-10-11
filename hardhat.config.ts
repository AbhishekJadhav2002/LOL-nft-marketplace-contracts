import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  paths: {
    sources: "contracts",
    tests: "test",
  },
  typechain: {
    outDir: 'types/contracts',
    target: 'ethers-v6'
  },
};

export default config;
