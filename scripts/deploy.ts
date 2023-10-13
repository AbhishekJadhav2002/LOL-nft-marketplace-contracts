import fs from "fs";
import hre, { ethers } from "hardhat";
import config from "../config/data.json";
import { Config, Networks } from "../types";
import { LOL, LOLExchange, LOLExchange__factory, LOLNFTExchange, LOLNFTExchange__factory, LOLToken, LOLToken__factory, LOL__factory } from "../types/contracts";

async function main() {
    const [owner] = await ethers.getSigners();
    console.log(`Deploying contract from: ${owner.address}`);

    console.log('Deploying LOL...');
    const LOL = await ethers.getContractFactory("LOL") as LOL__factory;
    const lol = await LOL.deploy(owner.address) as LOL;
    await lol.waitForDeployment();
    const lolAddress = await lol.getAddress();
    const _config: Config = config;
    _config.LOL[hre.network.name as Networks] = lolAddress;
    console.log(`LOL deployed to: ${lolAddress}`);

    console.log('Deploying LOLToken...');
    const LOLToken = await ethers.getContractFactory("LOLToken") as LOLToken__factory;
    const lolToken = await LOLToken.deploy(owner.address, ethers.parseUnits("1.5", 1)) as LOLToken;
    await lolToken.waitForDeployment();
    const lolTokenAddress = await lolToken.getAddress();
    _config.LOLToken[hre.network.name as Networks] = lolTokenAddress;
    console.log(`LOLToken deployed to: ${lolTokenAddress}`);

    console.log('Deploying LOLExchange...');
    const LOLExchange = await ethers.getContractFactory("LOLExchange") as LOLExchange__factory;
    const lolExchange = await LOLExchange.deploy(owner.address) as LOLExchange;
    await lolExchange.waitForDeployment();
    _config.LOLExchange[hre.network.name as Networks] = await lolExchange.getAddress();
    console.log(`LOLExchange deployed to: ${await lolExchange.getAddress()}`);

    console.log('Deploying LOLNFTExchange...');
    const LOLNFTExchange = await ethers.getContractFactory("LOLNFTExchange") as LOLNFTExchange__factory;
    const lolNFTExchange = await LOLNFTExchange.deploy(owner.address, lolAddress, lolTokenAddress) as LOLNFTExchange;
    await lolNFTExchange.waitForDeployment();
    _config.LOLNFTExchange[hre.network.name as Networks] = await lolNFTExchange.getAddress();
    console.log(`LOLNFTExchange deployed to: ${await lolNFTExchange.getAddress()}`);

    fs.writeFileSync('./config/data.json', JSON.stringify(_config, null, 2));
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
