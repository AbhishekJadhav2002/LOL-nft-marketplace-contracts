import {
    loadFixture
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { LOLToken, LOLToken__factory } from "../types/contracts";

describe("LOLToken", function () {
    let taxRate = ethers.parseUnits("1.5", 1);

    async function deployLOLFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const LOL = await ethers.getContractFactory("LOLToken") as LOLToken__factory;
        const lol = await LOL.deploy(owner.address, taxRate) as LOLToken;

        return { lol, owner, otherAccount };
    }

    describe("Deployment Tests", function () {
        it("Should set the right owner", async function () {
            const { lol, owner } = await loadFixture(deployLOLFixture);
            const _owner = await lol.owner();
            expect(_owner).to.equal(owner.address);
        }).timeout(60000);;

        it("Should have correct Tax rate", async function () {
            const { lol } = await loadFixture(deployLOLFixture);

            expect(await lol.taxRate()).to.equal(taxRate);
        });
    });

    describe("Transfer Tests", function () {
        it("Should revert if recipient is zero address", async function () {
            const { lol } = await loadFixture(deployLOLFixture);

            await expect(lol.transfer("0x0000000000000000000000000000000000000000", 100)).to.be.revertedWith("LOLToken: transfer to the zero address");
        });

        it("Should revert if amount is zero", async function () {
            const { lol, otherAccount } = await loadFixture(deployLOLFixture);
            await expect(lol.transfer(otherAccount.address, 0)).to.be.revertedWith("LOLToken: amount must be greater than zero");
        });

        it("Should transfer tokens correctly", async function () {
            const { lol, otherAccount } = await loadFixture(deployLOLFixture);
            const amount = ethers.parseEther("1000");

            await lol.transfer(otherAccount.address, amount);
            const receiptBalance = await lol.balanceOf(otherAccount.address);

            expect(receiptBalance).to.equal(BigInt(Number(amount.toString()) - ((Number(taxRate.toString())) / 1000) * Number(amount.toString())));
        }).timeout(120000);

        it("Should fail if sender doesn't have enough tokens", async function () {
            const { lol, owner, otherAccount } = await loadFixture(deployLOLFixture);
            const amount = ethers.parseEther("1000");

            await expect(lol.connect(otherAccount).transfer(owner.address, amount)).to.be.revertedWithCustomError(lol, "ERC20InsufficientBalance").withArgs(otherAccount.address, 0, BigInt(amount.toString()) - BigInt(((Number(taxRate.toString())) / 1000) * Number(amount.toString())));
        }).timeout(60000);

        it("Should update balances after transfers", async function () {
            const { lol, owner, otherAccount } = await loadFixture(deployLOLFixture);
            const initialSupply = await lol.totalSupply();
            const amount = ethers.parseEther("1000");

            await lol.transfer(otherAccount.address, amount);

            expect(await lol.balanceOf(otherAccount.address)).to.equal(BigInt(amount.toString()) - BigInt(((Number(taxRate.toString())) / 1000) * Number(amount.toString())));
            expect(await lol.balanceOf(owner.address)).to.equal(initialSupply - BigInt(amount.toString()) + BigInt(((Number(taxRate.toString())) / 1000) * Number(amount.toString())));
        }).timeout(60000);

        it("Holder should be able to approve", async () => {
            const { lol, owner, otherAccount } = await loadFixture(deployLOLFixture);
            const amount = ethers.parseEther("1000");

            await lol.approve(otherAccount.address, amount);
            const recipientAllowance = await lol.allowance(owner.address, otherAccount.address);
            expect(recipientAllowance).to.be.equal(amount);
        }).timeout(60000);

        it("Approved should be able to transfer", async () => {
            const { lol, owner, otherAccount } = await loadFixture(deployLOLFixture);
            const amount = ethers.parseEther("1000");

            await lol.approve(otherAccount.address, amount)
            await expect(lol.connect(otherAccount).transferFrom(owner.address, otherAccount.address, amount))
                .to.emit(lol, 'Transfer')
                .withArgs(owner.address, otherAccount.address, amount);
        }).timeout(60000);

        it("Should not be able to transfer without approval", async () => {
            const { lol, owner, otherAccount } = await loadFixture(deployLOLFixture);
            const amount = ethers.parseEther("1000");

            await expect(lol.connect(otherAccount).transferFrom(owner.address, otherAccount.address, amount)).to.be.revertedWithCustomError(lol, "ERC20InsufficientAllowance").withArgs(otherAccount.address, 0, amount);
        }).timeout(60000);
    });


    describe("Tax Tests", function () {
        it("Should set the tax rate correctly", async function () {
            const { lol, owner } = await loadFixture(deployLOLFixture);
            const newTaxRate = ethers.parseUnits("2", 1);

            await lol.connect(owner).setTax(newTaxRate);
            expect(await lol.taxRate()).to.equal(newTaxRate);
        }).timeout(120000);

        it("Should revert if non-owner tries to set the tax rate", async function () {
            const { lol, otherAccount } = await loadFixture(deployLOLFixture);
            const newTaxRate = ethers.parseUnits("2", 1);

            await expect(lol.connect(otherAccount).setTax(newTaxRate)).to.be.revertedWithCustomError(lol, "OwnableUnauthorizedAccount").withArgs(otherAccount.address);
        }).timeout(60000);

        it("Should revert if tax rate is too high", async function () {
            const { lol, owner } = await loadFixture(deployLOLFixture);
            const newTaxRate = ethers.parseUnits("201", 1);

            await expect(lol.connect(owner).setTax(newTaxRate)).to.be.revertedWith("LOLToken: Tax too high");
        }).timeout(60000);
    });
});
