import { loadFixture, time } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { LOLToken, LOLToken__factory, LOLVesting, LOLVesting__factory } from "../types/contracts";

describe("LOLVesting", function () {
    let taxRate = ethers.parseUnits("1.5", 1);

    async function deployLOLVestingFixture() {
        const [owner, lolTokenOwner, otherAccount, ...accounts] = await ethers.getSigners();

        const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
        const lolToken = await LOLToken.connect(lolTokenOwner).deploy(lolTokenOwner.address, taxRate) as LOLToken;
        const lolTokenAddress = await lolToken.getAddress();

        const allocations = accounts.map((_account, index) => ethers.parseUnits(`${1000 * (index + 1)}`, 18).toString());
        const startTime = (await time.latest()) + 60;
        const duration = 60 * 1;
        const LOLVesting = await ethers.getContractFactory("LOLVesting") as unknown as LOLVesting__factory;
        const lolVesting = await LOLVesting.deploy(owner.address, lolTokenAddress, accounts.map(account => account.address), allocations, `${startTime}`, `${duration}`) as LOLVesting;

        return { lolTokenAddress, lolToken, lolVesting, owner, lolTokenOwner, otherAccount, accounts, startTime, duration };
    };

    describe("Deployment Tests", function () {
        it("Should deploy the contract with the correct initial state", async function () {
            const [owner, ...accounts] = await ethers.getSigners();
            const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
            const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;
            const allocations: string[] = accounts.map((_account, index) => ethers.parseEther(`${1000 * (index + 1)}`).toString());
            const startTime = Math.floor(Date.now() / 1000) + 60;
            const duration = 60 * 1;
            const LOLVesting = await ethers.getContractFactory("LOLVesting") as unknown as LOLVesting__factory;

            const lolVesting = await LOLVesting.deploy(owner.address, await lolToken.getAddress(), accounts.map(account => account.address), allocations, `${startTime}`, `${duration}`)

            expect(await lolVesting.owner()).to.equal(owner.address);
            expect(await lolVesting.token()).to.equal(await lolToken.getAddress());
            expect(await lolVesting.startTime()).to.equal(startTime);
            expect(await lolVesting.duration()).to.equal(60 * 1);

            for (let i = 0; i < accounts.length; i++) {
                expect(await lolVesting.outstanding(accounts[i].address)).to.equal(ethers.parseEther(`${1000 * (i + 1)}`));
                expect(await lolVesting.allocation(accounts[i].address)).to.eq(ethers.parseEther(`${1000 * (i + 1)}`));
                expect(await lolVesting.released(accounts[i].address)).to.equal(0);
                expect(await lolVesting.available(accounts[i].address)).to.equal(0);
            }
        }).timeout(120000);

        it("Should not allow deployment with no recipients", async function () {
            const [owner] = await ethers.getSigners();
            const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
            const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;
            const allocations: string[] = [];
            const startTime = Math.floor(Date.now() / 1000) + 60;
            const duration = 60 * 1;
            const LOLVesting = await ethers.getContractFactory("LOLVesting") as unknown as LOLVesting__factory;

            await expect(LOLVesting.deploy(owner.address, await lolToken.getAddress(), [], allocations, `${startTime}`, `${duration}`)).to.be.revertedWith("LOLVesting: no recipients");
        }).timeout(60000);

        it("Should not allow deployment with recipients and allocations length mismatch", async function () {
            const [owner] = await ethers.getSigners();
            const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
            const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;
            const allocations = [ethers.parseEther("1000")];
            const startTime = Math.floor(Date.now() / 1000) + 60;
            const duration = 60 * 1;
            const LOLVesting = await ethers.getContractFactory("LOLVesting") as unknown as LOLVesting__factory;

            await expect(LOLVesting.deploy(owner.address, await lolToken.getAddress(), [owner.address, owner.address], allocations, `${startTime}`, `${duration}`)).to.be.revertedWith("LOLVesting: recipients and allocations length mismatch");
        }).timeout(60000);

        it("Should not allow deployment with duplicate recipients", async function () {
            const [owner] = await ethers.getSigners();
            const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
            const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;
            const allocations = [ethers.parseEther("1000"), ethers.parseEther("2000"), ethers.parseEther("3000")];
            const recipients = [owner.address, owner.address, owner.address];
            const startTime = Math.floor(Date.now() / 1000) + 60;
            const duration = 60 * 1;
            const LOLVesting = await ethers.getContractFactory("LOLVesting") as unknown as LOLVesting__factory;

            await expect(LOLVesting.deploy(owner.address, await lolToken.getAddress(), recipients, allocations, `${startTime}`, `${duration}`)).to.be.revertedWith("LOLVesting: duplicate recipients");
        }).timeout(60000);

        it("Should not allow deployment with start time in the past", async function () {
            const [owner] = await ethers.getSigners();
            const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
            const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;
            const LOLVesting = await ethers.getContractFactory("LOLVesting") as unknown as LOLVesting__factory;
            const allocations = [ethers.parseEther("1000")];
            const recipients = [owner.address];
            const startTime = Math.floor(Date.now() / 1000) - 120;
            const duration = 60 * 1;

            await expect(LOLVesting.deploy(owner.address, await lolToken.getAddress(), recipients, allocations, `${startTime}`, `${duration}`)).to.be.revertedWith("LOLVesting: start time must be in the future");
        }).timeout(60000);

        it("Should not allow deployment with duration equal to zero", async function () {
            const [owner] = await ethers.getSigners();
            const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
            const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;
            const allocations = [ethers.parseEther("1000"), ethers.parseEther("2000"), ethers.parseEther("3000")];
            const recipients = [owner.address, owner.address, owner.address];
            const startTime = Math.floor(Date.now() / 1000) + 60;
            const duration = 0;
            const LOLVesting = await ethers.getContractFactory("LOLVesting") as unknown as LOLVesting__factory;

            await expect(LOLVesting.deploy(owner.address, await lolToken.getAddress(), recipients, allocations, `${startTime}`, `${duration}`)).to.be.revertedWith("LOLVesting: duration must be > 0");
        }).timeout(60000);
    });

    describe("Claim Tests", function () {
        it("Should be able to claim", async function () {
            const { lolVesting, owner, lolToken, lolTokenOwner, accounts, startTime, duration } = await loadFixture(deployLOLVestingFixture);

            await time.increaseTo(startTime);
            await time.increase(duration);
            const available = await lolVesting.available(accounts[0].address);
            await lolToken.approve(lolTokenOwner.address, available.toString());
            await lolToken.transferFrom(lolTokenOwner.address, owner.address, available.toString());
            await lolToken.connect(owner).approve(await lolVesting.getAddress(), available.toString());

            const balanceBefore = await lolToken.balanceOf(accounts[0].address);
            await expect(lolVesting.connect(accounts[0]).claimLOL()).to.emit(lolVesting, "Claimed").withArgs(accounts[0].address, available);
            expect(await lolVesting.claimed(accounts[0].address)).to.equal(available);
            const balanceAfter = await lolToken.balanceOf(accounts[0].address);
            expect(balanceAfter - balanceBefore).to.equal(ethers.parseEther("1000"));
        }).timeout(60000);

        it("Should not transfer tokens before start time", async function () {
            const { lolVesting, lolTokenOwner } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.connect(lolTokenOwner).claimLOL()).to.be.revertedWith("LOLVesting: claim has not started");
        }).timeout(60000);
    });

    describe("Allocations Tests", function () {
        it("Should be able to update allocation", async function () {
            const { lolVesting, otherAccount } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.addNewAllocation(otherAccount.address, ethers.parseEther("1000"))).to.emit(lolVesting, "AllocationAdded").withArgs(otherAccount.address, ethers.parseEther("1000"));
            expect(await lolVesting.allocation(otherAccount.address)).to.equal(ethers.parseEther("1000"));
            expect(await lolVesting.claimed(otherAccount.address)).to.equal(0);
        }).timeout(60000);

        it("Should not be able to update allocation after vesting has started", async function () {
            const { lolVesting, otherAccount, startTime, duration } = await loadFixture(deployLOLVestingFixture);

            await time.increaseTo(startTime);
            await time.increase(duration);

            await expect(lolVesting.addNewAllocation(otherAccount.address, ethers.parseEther("1000"))).to.be.revertedWith("LOLVesting: vesting has already started");
        }).timeout(120000);

        it("Should not be able to update allocation with zero amount", async function () {
            const { lolVesting, otherAccount } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.addNewAllocation(otherAccount.address, 0)).to.be.revertedWith("LOLVesting: allocation must be > 0");
        }).timeout(60000);

        it("Should only owner be able to update allocation", async function () {
            const { lolVesting, otherAccount, accounts } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.connect(otherAccount).addNewAllocation(accounts[0].address, ethers.parseEther("1000"))).to.be.revertedWithCustomError(lolVesting, "OwnableUnauthorizedAccount").withArgs(otherAccount.address);
        }).timeout(60000);

        it("Should not be able to update allocation for zero address", async function () {
            const { lolVesting } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.addNewAllocation("0x0000000000000000000000000000000000000000", ethers.parseEther("1000"))).to.be.revertedWith("LOLVesting: recipient must not be 0x0");
        }).timeout(60000);

        it("Should be able remove allocation", async function () {
            const { lolVesting, otherAccount } = await loadFixture(deployLOLVestingFixture);

            const recipient = otherAccount.address;
            await lolVesting.addNewAllocation(recipient, ethers.parseEther("1000"));
            await expect(lolVesting.removeAllocation(recipient)).to.emit(lolVesting, "AllocationRemoved").withArgs(recipient);
            expect(await lolVesting.allocation(recipient)).to.equal(0);
            expect(await lolVesting.claimed(recipient)).to.equal(0);
        }).timeout(60000);

        it("Should not be able to remove allocation after vesting has started", async function () {
            const { lolVesting, otherAccount, startTime, duration } = await loadFixture(deployLOLVestingFixture);

            await lolVesting.addNewAllocation(otherAccount.address, ethers.parseEther("1000"));
            await time.increaseTo(startTime);
            await time.increase(duration);

            await expect(lolVesting.removeAllocation(otherAccount.address)).to.be.revertedWith("LOLVesting: vesting has already started");
        }).timeout(60000);

        it("Should not be able to remove allocation for zero address", async function () {
            const { lolVesting } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.removeAllocation("0x0000000000000000000000000000000000000000")).to.be.revertedWith("LOLVesting: recipient must not be 0x0");
        }).timeout(60000);

        it("Should only owner be able to remove allocation", async function () {
            const { lolVesting, otherAccount, owner } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.connect(otherAccount).removeAllocation(owner.address)).to.be.revertedWithCustomError(lolVesting, "OwnableUnauthorizedAccount").withArgs(otherAccount.address);
        }).timeout(60000);
    });

    describe("Helpers Tests", function () {
        it("Should return the correct released amount", async () => {
            const { lolVesting, accounts } = await loadFixture(deployLOLVestingFixture);

            const released = await lolVesting.released(accounts[0].address);
            expect(released).to.equal(0);
        }).timeout(60000);

        it("Should return the correct released amount at a given time", async () => {
            const { lolVesting, accounts, startTime, duration } = await loadFixture(deployLOLVestingFixture);

            await time.increaseTo(startTime);
            await time.increase(duration / 2);

            const released = await lolVesting.released(accounts[0].address);
            expect(released).to.equal(ethers.parseEther("500"));
        }).timeout(60000);

        it("Should return the correct available amount", async () => {
            const { lolVesting, accounts } = await loadFixture(deployLOLVestingFixture);

            const available = await lolVesting.available(accounts[0].address);
            expect(available).to.equal(0);
        }).timeout(60000);

        it("Should return the correct outstanding amount", async () => {
            const { lolVesting, accounts } = await loadFixture(deployLOLVestingFixture);

            const outstanding = await lolVesting.outstanding(accounts[0].address);
            expect(outstanding).to.equal(ethers.parseEther("1000"));
        }).timeout(60000);

        it("Should set correct start time", async () => {
            const { lolVesting } = await loadFixture(deployLOLVestingFixture);

            const startTime = Math.floor(Date.now() / 1000) + 60;
            await lolVesting.setStartTime(`${startTime}`);

            expect(await lolVesting.startTime()).to.equal(startTime);
        }).timeout(120000);

        it("Should not set start time in the past", async () => {
            const { lolVesting } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.setStartTime("0")).to.be.revertedWith("LOLVesting: start time must be in the future");
        }).timeout(60000);

        it("Should set correct duration", async () => {
            const { lolVesting } = await loadFixture(deployLOLVestingFixture);

            const duration = 60 * 1;
            await lolVesting.setDuration(`${duration}`);

            expect(await lolVesting.duration()).to.equal(duration);
        }).timeout(60000);

        it("Should not set duration equal to zero", async () => {
            const { lolVesting } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.setDuration("0")).to.be.revertedWith("LOLVesting: duration must be > 0");
        }).timeout(60000);

        it("Should not set duration after vesting has started", async () => {
            const { lolVesting, startTime, duration } = await loadFixture(deployLOLVestingFixture);

            await time.increaseTo(startTime);
            await time.increase(duration);

            await expect(lolVesting.setDuration("0")).to.be.revertedWith("LOLVesting: vesting has already started");
        }).timeout(60000);

        it("Should only owner be able to set start time", async () => {
            const { lolVesting, otherAccount } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.connect(otherAccount).setStartTime("0")).to.be.revertedWithCustomError(lolVesting, "OwnableUnauthorizedAccount").withArgs(otherAccount.address);
        }).timeout(60000);

        it("Should only owner be able to set duration", async () => {
            const { lolVesting, otherAccount } = await loadFixture(deployLOLVestingFixture);

            await expect(lolVesting.connect(otherAccount).setDuration("0")).to.be.revertedWithCustomError(lolVesting, "OwnableUnauthorizedAccount").withArgs(otherAccount.address);
        }).timeout(60000);
    });
});