import {
    loadFixture
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { LOL, LOLNFTExchange, LOLNFTExchange__factory, LOLToken, LOLToken__factory, LOL__factory } from "../types/contracts";

describe("LOLNFTExchange", function () {
    let taxRate = ethers.parseUnits("1.5", 1);
    let tokenURL = "https://github.com/AbhishekJadhav2002";

    async function deployLOLNFTExchangeFixture() {
        const [owner, otherAccount, ...accounts] = await ethers.getSigners();

        const LOL = await ethers.getContractFactory("LOL") as unknown as LOL__factory;
        const lol = await LOL.deploy(owner.address) as LOL;

        const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
        const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;

        const LOLNFTExchange = await ethers.getContractFactory("LOLNFTExchange") as unknown as LOLNFTExchange__factory;
        const lolNFTExchange = await LOLNFTExchange.deploy(owner.address, await lol.getAddress(), await lolToken.getAddress()) as LOLNFTExchange;

        return { lol, lolToken, lolNFTExchange, owner, otherAccount, accounts };
    }

    describe("Deployment Tests", function () {
        it("Should set the right owner", async function () {
            const { lol, owner } = await loadFixture(deployLOLNFTExchangeFixture);
            const _owner = await lol.owner();
            expect(_owner).to.equal(owner.address);
        }).timeout(120000);

        it("Should set the right LOL address", async function () {
            const { lol, lolNFTExchange } = await loadFixture(deployLOLNFTExchangeFixture);
            const _lol = await lolNFTExchange.lol();
            expect(_lol).to.equal(await lol.getAddress());
        }).timeout(120000);

        it("Should set the right LOLToken address", async function () {
            const { lolToken, lolNFTExchange } = await loadFixture(deployLOLNFTExchangeFixture);
            const _lolToken = await lolNFTExchange.lolToken();
            expect(_lolToken).to.equal(await lolToken.getAddress());
        }).timeout(120000);
    });

    describe("Create Listing Test", function () {
        it("Should create a new listing", async function () {
            const { lol, lolNFTExchange, owner } = await loadFixture(deployLOLNFTExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");

            await lol.laugh(owner.address, tokenURL);
            await lol.approve(await lolNFTExchange.getAddress(), tokenId);

            await expect(lolNFTExchange.createListing(tokenId, price)).to.emit(lolNFTExchange, "ListingCreated").withArgs(1, tokenId, owner.address, price);
            const listing = await lolNFTExchange.listings(1);

            expect(listing.id).to.equal(1);
            expect(listing.tokenId).to.equal(tokenId);
            expect(listing.price).to.equal(price);
            expect(listing.isSold).to.equal(false);
            expect(listing.seller).to.equal(owner.address);
        }).timeout(160000);
    });

    describe("Buying NFT Test", function () {
        it("Should buy a listed NFT", async function () {
            const { lol, lolToken, lolNFTExchange, owner, otherAccount } = await loadFixture(deployLOLNFTExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolNftExchangeAddress = await lolNFTExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.approve(lolNftExchangeAddress, tokenId);
            await lolNFTExchange.createListing(tokenId, price);
            await lolToken.approve(owner.address, price);
            await lolToken.transferFrom(owner.address, otherAccount.address, price);
            await lolToken.connect(otherAccount).approve(lolNftExchangeAddress, price);

            await expect(lolNFTExchange.connect(otherAccount).buyNFT(1)).to.emit(lolNFTExchange, "ListingSold").withArgs(1, otherAccount.address);
        }).timeout(120000);

        it("Should not allow buying an already sold NFT", async function () {
            const { lol, lolToken, lolNFTExchange, owner, otherAccount } = await loadFixture(deployLOLNFTExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolNftExchangeAddress = await lolNFTExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.approve(lolNftExchangeAddress, tokenId);
            await lolNFTExchange.createListing(tokenId, price);
            await lolToken.approve(owner.address, price);
            await lolToken.transferFrom(owner.address, otherAccount.address, price);
            await lolToken.connect(otherAccount).approve(lolNftExchangeAddress, price);
            await lolNFTExchange.connect(otherAccount).buyNFT(1);

            await expect(lolNFTExchange.connect(otherAccount).buyNFT(1)).to.be.revertedWith("LOLNFTExchange: NFT is already sold");
        }).timeout(120000);

        it("Should not allow buying an NFT with insufficient funds", async function () {
            const { lol, lolToken, lolNFTExchange, owner, otherAccount } = await loadFixture(deployLOLNFTExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lowerPrice = ethers.parseEther("0.5");
            const lolNftExchangeAddress = await lolNFTExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.approve(lolNftExchangeAddress, tokenId);
            await lolNFTExchange.createListing(tokenId, price);
            await lolToken.approve(owner.address, price);
            await lolToken.transferFrom(owner.address, otherAccount.address, lowerPrice);
            await lolToken.connect(otherAccount).approve(lolNftExchangeAddress, price);

            await expect(lolNFTExchange.connect(otherAccount).buyNFT(1)).to.be.revertedWithCustomError(lolToken, "ERC20InsufficientBalance").withArgs(otherAccount.address, lowerPrice, price);
        }).timeout(120000);
    });
});
