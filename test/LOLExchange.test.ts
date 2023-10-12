import {
    loadFixture
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { LOL, LOLExchange, LOLExchange__factory, LOLToken, LOLToken__factory, LOL__factory } from "../types/contracts";

describe("LOLExchange", function () {
    let taxRate = ethers.parseUnits("1.5", 1);
    let tokenURL = "https://github.com/AbhishekJadhav2002";

    async function deployLOLExchangeFixture() {
        const [owner, lolOwner, otherAccount, ...accounts] = await ethers.getSigners();

        const LOL = await ethers.getContractFactory("LOL") as unknown as LOL__factory;
        const lol = await LOL.connect(lolOwner).deploy(lolOwner.address) as LOL;

        const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
        const lolToken = await LOLToken.deploy(owner.address, taxRate) as LOLToken;

        const LOLExchange = await ethers.getContractFactory("LOLExchange") as unknown as LOLExchange__factory;
        const lolExchange = await LOLExchange.deploy(owner.address, await lolToken.getAddress()) as LOLExchange;

        return { lol, lolToken, lolExchange, owner, lolOwner, otherAccount, accounts };
    }

    describe("Deployment Tests", function () {
        it("Should set the right LOLToken address", async function () {
            const { lolToken, lolExchange } = await loadFixture(deployLOLExchangeFixture);
            const _lolToken = await lolExchange.lolToken();
            expect(_lolToken).to.equal(await lolToken.getAddress());
        }).timeout(120000);
    });

    describe("Create Listing Test", function () {
        it("Should create a new listing", async function () {
            const { lol, lolExchange, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolAddress = await lol.getAddress();

            await lol.laugh(otherAccount.address, tokenURL);
            await lol.connect(otherAccount).approve(await lolExchange.getAddress(), tokenId);

            await expect(lolExchange.connect(otherAccount).createListing(lolAddress, tokenId, price)).to.emit(lolExchange, "ListingCreated").withArgs(1, lolAddress, tokenId, otherAccount.address, price);
            const listing = await lolExchange.listings(1);

            expect(listing.id).to.equal(1);
            expect(listing.nftContract).to.equal(lolAddress);
            expect(listing.tokenId).to.equal(tokenId);
            expect(listing.price).to.equal(price);
            expect(listing.isSold).to.equal(false);
            expect(listing.seller).to.equal(otherAccount.address);
        }).timeout(160000);

        it("Should revert if non-owner tries to create listing", async function () {
            const { lol, lolExchange, owner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolAddress = await lol.getAddress();

            await lol.laugh(otherAccount.address, tokenURL);
            await lol.connect(otherAccount).approve(await lolExchange.getAddress(), tokenId);

            await expect(lolExchange.connect(owner).createListing(lolAddress, tokenId, price)).to.be.revertedWith("LOLExchange: Token owner can only create listing");
        }).timeout(160000);
    });

    describe("Buying NFT Test", function () {
        it("Should buy a listed NFT", async function () {
            const { lol, lolToken, lolExchange, owner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolExchangeAddress = await lolExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.connect(owner).approve(lolExchangeAddress, tokenId);
            await lolExchange.createListing(await lol.getAddress(), tokenId, price);
            await lolToken.approve(owner.address, price);
            await lolToken.transferFrom(owner.address, otherAccount.address, price);
            await lolToken.connect(otherAccount).approve(lolExchangeAddress, price);

            await expect(lolExchange.connect(otherAccount).buyNFT(1)).to.emit(lolExchange, "ListingSold").withArgs(1, otherAccount.address);
        }).timeout(60000);

        it("Should not allow buying an already sold NFT", async function () {
            const { lol, lolToken, lolExchange, owner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolExchangeAddress = await lolExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.connect(owner).approve(lolExchangeAddress, tokenId);
            await lolExchange.createListing(await lol.getAddress(), tokenId, price);
            await lolToken.approve(owner.address, price);
            await lolToken.transferFrom(owner.address, otherAccount.address, price);
            await lolToken.connect(otherAccount).approve(lolExchangeAddress, price);
            await lolExchange.connect(otherAccount).buyNFT(1);

            await expect(lolExchange.connect(otherAccount).buyNFT(1)).to.be.revertedWith("LOLExchange: NFT is already sold");
        }).timeout(120000);

        it("Should not allow buying an NFT with insufficient funds", async function () {
            const { lol, lolToken, lolExchange, owner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lowerPrice = ethers.parseEther("0.5");
            const lolExchangeAddress = await lolExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.connect(owner).approve(lolExchangeAddress, tokenId);
            await lolExchange.createListing(await lol.getAddress(), tokenId, price);
            await lolToken.approve(owner.address, price);
            await lolToken.transferFrom(owner.address, otherAccount.address, lowerPrice);
            await lolToken.connect(otherAccount).approve(lolExchangeAddress, price);

            await expect(lolExchange.connect(otherAccount).buyNFT(1)).to.be.revertedWithCustomError(lolToken, "ERC20InsufficientBalance").withArgs(otherAccount.address, lowerPrice, price);
        }).timeout(120000);
    });
});
