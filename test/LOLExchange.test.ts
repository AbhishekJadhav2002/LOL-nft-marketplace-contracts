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
        const [owner, lolOwner, lolTokenOwner, otherAccount, ...accounts] = await ethers.getSigners();

        const LOL = await ethers.getContractFactory("LOL") as unknown as LOL__factory;
        const lol = await LOL.connect(lolOwner).deploy(lolOwner.address) as LOL;

        const LOLToken = await ethers.getContractFactory("LOLToken") as unknown as LOLToken__factory;
        const lolToken = await LOLToken.connect(lolTokenOwner).deploy(lolTokenOwner.address, taxRate) as LOLToken;

        const LOLExchange = await ethers.getContractFactory("LOLExchange") as unknown as LOLExchange__factory;
        const lolExchange = await LOLExchange.deploy(owner.address) as LOLExchange;

        return { lol, lolToken, lolExchange, owner, lolOwner, lolTokenOwner, otherAccount, accounts };
    }

    describe("Deployment Tests", function () {
    });

    describe("Create Listing Test", function () {
        it("Should create a new listing", async function () {
            const { lol, lolExchange, lolToken, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolAddress = await lol.getAddress();
            const lolTokenAddress = await lolToken.getAddress();

            await lol.laugh(otherAccount.address, tokenURL);
            await lol.connect(otherAccount).approve(await lolExchange.getAddress(), tokenId);

            await expect(lolExchange.connect(otherAccount).createListing(lolTokenAddress, lolAddress, tokenId, price)).to.emit(lolExchange, "ListingCreated").withArgs(1, lolTokenAddress, lolAddress, tokenId, otherAccount.address, price);
            const listing = await lolExchange.listings(1);

            expect(listing.id).to.equal(1);
            expect(listing.tokenContract).to.equal(lolTokenAddress);
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
            const lolTokenAddress = await lolExchange.getAddress();

            await lol.laugh(otherAccount.address, tokenURL);
            await lol.connect(otherAccount).approve(await lolExchange.getAddress(), tokenId);

            await expect(lolExchange.connect(owner).createListing(lolTokenAddress, lolAddress, tokenId, price)).to.be.revertedWith("LOLExchange: NFT Token owner can only create listing");
        }).timeout(160000);
    });

    describe("Buying NFT Test", function () {
        it("Should buy a listed NFT", async function () {
            const { lol, lolToken, lolExchange, owner, lolTokenOwner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolAddress = await lol.getAddress();
            const lolTokenAddress = await lolToken.getAddress();
            const lolExchangeAddress = await lolExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.connect(owner).approve(lolExchangeAddress, tokenId);
            await lolExchange.createListing(lolTokenAddress, lolAddress, tokenId, price);
            await lolToken.approve(lolTokenOwner.address, price);
            await lolToken.transferFrom(lolTokenOwner.address, otherAccount.address, price);
            await lolToken.connect(otherAccount).approve(lolExchangeAddress, price);

            await expect(lolExchange.connect(otherAccount).buyNFT(1)).to.emit(lolExchange, "ListingSold").withArgs(1, otherAccount.address);
        }).timeout(120000);

        it("Should not allow buying an already sold NFT", async function () {
            const { lol, lolToken, lolExchange, owner, lolTokenOwner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolAddress = await lol.getAddress();
            const lolTokenAddress = await lolToken.getAddress();
            const lolExchangeAddress = await lolExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.connect(owner).approve(lolExchangeAddress, tokenId);
            await lolExchange.createListing(lolTokenAddress, lolAddress, tokenId, price);
            await lolToken.approve(lolTokenOwner.address, price);
            await lolToken.transferFrom(lolTokenOwner.address, otherAccount.address, price);
            await lolToken.connect(otherAccount).approve(lolExchangeAddress, price);
            await lolExchange.connect(otherAccount).buyNFT(1);

            await expect(lolExchange.connect(otherAccount).buyNFT(1)).to.be.revertedWith("LOLExchange: NFT is already sold");
        }).timeout(120000);

        it("Should not allow buying an NFT with insufficient funds", async function () {
            const { lol, lolToken, lolExchange, owner, lolTokenOwner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lowerPrice = ethers.parseEther("0.5");
            const lolAddress = await lol.getAddress();
            const lolTokenAddress = await lolToken.getAddress();
            const lolExchangeAddress = await lolExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.connect(owner).approve(lolExchangeAddress, tokenId);
            await lolExchange.createListing(lolTokenAddress, lolAddress, tokenId, price);
            await lolToken.approve(lolTokenOwner.address, price);
            await lolToken.transferFrom(lolTokenOwner.address, otherAccount.address, lowerPrice);
            await lolToken.connect(otherAccount).approve(lolExchangeAddress, price);

            await expect(lolExchange.connect(otherAccount).buyNFT(1)).to.be.revertedWith("LOLExchange: Insufficient token balance");
        }).timeout(120000);

        it("Should not allow buying an NFT with insufficient allowance", async function () {
            const { lol, lolToken, lolExchange, owner, lolTokenOwner, otherAccount } = await loadFixture(deployLOLExchangeFixture);
            const tokenId = 0;
            const price = ethers.parseEther("1");
            const lolAddress = await lol.getAddress();
            const lolTokenAddress = await lolToken.getAddress();
            const lolExchangeAddress = await lolExchange.getAddress();

            await lol.laugh(owner.address, tokenURL);
            await lol.connect(owner).approve(lolExchangeAddress, tokenId);
            await lolExchange.createListing(lolTokenAddress, lolAddress, tokenId, price);
            await lolToken.approve(lolTokenOwner.address, price);
            await lolToken.transferFrom(lolTokenOwner.address, otherAccount.address, price);

            await expect(lolExchange.connect(otherAccount).buyNFT(1)).to.be.revertedWith("LOLExchange: Insufficient token allowance");
        }).timeout(120000);
    });
});
