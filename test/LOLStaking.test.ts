import { loadFixture, time } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { LOLStaking, LOLStaking__factory, LOLToken, LOLToken__factory } from "../types/contracts";

describe("LOLStaking", function () {
    let taxRate = ethers.parseUnits("1.5", 1);

    async function deployLOLStakingFixture() {
        const [owner, lolTokenOwner, otherAccount, ...accounts] = await ethers.getSigners();

        const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
        const lolToken = await LOLToken.connect(lolTokenOwner).deploy(lolTokenOwner.address, taxRate) as LOLToken;
        const lolTokenAddress = await lolToken.getAddress();

        const rewardsPerHour = "1000";
        const LOLStaking = await ethers.getContractFactory("LOLStaking") as unknown as LOLStaking__factory;
        const lolStaking = await LOLStaking.deploy(owner.address, lolTokenAddress, rewardsPerHour) as LOLStaking;

        return { lolTokenAddress, lolToken, lolStaking, owner, lolTokenOwner, otherAccount, accounts, rewardsPerHour };
    };

    describe("Deployment Tests", function () {
        it("Should deploy the contract with the correct initial state", async function () {
            const [owner] = await ethers.getSigners();
            const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
            const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;

            const rewardsPerHour = "1000";
            const LOLStaking = await ethers.getContractFactory("LOLStaking") as unknown as LOLStaking__factory;
            const lolStaking = await LOLStaking.deploy(owner.address, await lolToken.getAddress(), rewardsPerHour) as LOLStaking;

            expect(await lolStaking.owner()).to.equal(owner.address);
            expect(await lolStaking.token()).to.equal(await lolToken.getAddress());
            expect(await lolStaking.rewardsPerHour()).to.equal(rewardsPerHour);
            expect(await lolStaking.totalStaked()).to.equal(0);
            expect(await lolStaking.totalRewards()).to.equal(0);
        }).timeout(120000);
    });
});