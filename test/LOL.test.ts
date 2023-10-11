import {
    loadFixture
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { LOL, LOL__factory } from "../types/contracts";

describe("LOL", function () {
    let tokenURL = "https://github.com/AbhishekJadhav2002";

    async function deployLOLFixture() {
        const [owner, otherAccount, ...accounts] = await ethers.getSigners();

        const LOL = await ethers.getContractFactory("LOL") as LOL__factory;
        const lol = await LOL.deploy(owner.address) as LOL;

        return { lol, owner, otherAccount, accounts };
    }

    describe("Deployment Tests", function () {
        it("Should set the right owner", async function () {
            const { lol, owner } = await loadFixture(deployLOLFixture);
            const _owner = await lol.owner();
            expect(_owner).to.equal(owner.address);
        }).timeout(120000);
    });

    describe("Minting Tests", function () {
        it("Should mint one token correctly", async function () {
            const { lol, owner } = await loadFixture(deployLOLFixture);

            await lol.laugh(owner.address, tokenURL);

            const receiptBalance = await lol.balanceOf(owner.address);
            const tokenURI = await lol.tokenURI(0);

            expect(receiptBalance).to.equal(1);
            expect(tokenURI).to.equal(tokenURL);
        });

        it("Should mint multiple tokens correctly", async function () {
            const { lol, owner } = await loadFixture(deployLOLFixture);

            await lol.laugh(owner.address, tokenURL);
            await lol.laugh(owner.address, tokenURL);

            const receiptBalance = await lol.balanceOf(owner.address);
            const tokenURI = await lol.tokenURI(1);

            expect(receiptBalance).to.equal(2);
            expect(tokenURI).to.equal(tokenURL);
        });
    });

    describe("Transfer Tests", function () {
        it("Should correctly approves account", async function () {
            const { lol, owner, otherAccount, accounts } = await loadFixture(deployLOLFixture);

            await lol.connect(owner).laugh(otherAccount.address, tokenURL);
            expect(await lol.connect(otherAccount).approve(accounts[0].address, 0)).to.emit(lol, "Approval");
            expect(await lol.getApproved(0)).to.equal(accounts[0].address);
        }).timeout(120000);

        it('correctly transfers NFT from approved address', async function () {
            const { lol, owner, otherAccount } = await loadFixture(deployLOLFixture);
            const tokenId = 0;

            await lol.laugh(otherAccount.address, tokenURL);
            await lol.connect(otherAccount).approve(owner.address, tokenId);
            await lol.connect(owner).transferFrom(otherAccount.address, owner.address, tokenId);
            const receiptBalance = await lol.balanceOf(owner.address);
            const tokenURI = await lol.tokenURI(tokenId);

            expect(receiptBalance).to.equal(1);
            expect(tokenURI).to.equal(tokenURL);
        }).timeout(120000);

        it("Should transfer token correctly", async () => {
            const { lol, owner, otherAccount } = await loadFixture(deployLOLFixture);

            await lol.laugh(owner.address, tokenURL);
            await lol.transferFrom(owner.address, otherAccount.address, 0);

            const receiptBalance = await lol.balanceOf(otherAccount.address);
            const tokenURI = await lol.tokenURI(0);

            expect(receiptBalance).to.equal(1);
            expect(tokenURI).to.equal(tokenURL);
        }).timeout(120000);
    });

    describe("Interface Tests", function () {
        it("Should implement ERC721 interface", async () => {
            const { lol } = await loadFixture(deployLOLFixture);

            const supportsInterface = await lol.supportsInterface("0x80ac58cd");
            expect(supportsInterface).to.equal(true);
        }).timeout(60000);

        it("Should implement ERC721 Metadata interface", async () => {
            const { lol } = await loadFixture(deployLOLFixture);

            const supportsInterface = await lol.supportsInterface("0x5b5e139f");
            expect(supportsInterface).to.equal(true);
        }).timeout(60000);
    });

    describe("Ownership Tests", function () {
        it("Should transfer ownership correctly", async () => {
            const { lol, otherAccount } = await loadFixture(deployLOLFixture);

            await lol.transferOwnership(otherAccount.address);
            const newOwner = await lol.owner();

            expect(newOwner).to.equal(otherAccount.address);
        });

        it("Should return the correct owner of tokenId", async () => {
            const { lol, owner } = await loadFixture(deployLOLFixture);

            await lol.laugh(owner.address, tokenURL);
            const ownerOfToken = await lol.ownerOf(0);

            expect(ownerOfToken).to.equal(owner.address);
        });
    });
});
