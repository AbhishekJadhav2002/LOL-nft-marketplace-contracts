// contracts/LOL.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LOLNFTExchange is Ownable {
    IERC721 public lol;
    IERC20 public lolToken;

    uint256 private _listingIds;

    struct Listing {
        uint256 id;
        uint256 tokenId;
        uint256 price;
        bool isSold;
        address seller;
    }

    mapping(uint256 => Listing) public listings;

    event ListingCreated(
        uint256 indexed id,
        uint256 indexed tokenId,
        address indexed seller,
        uint256 price
    );
    event ListingSold(uint256 indexed id, address indexed buyer);

    constructor(
        address initialOwner,
        address _lol,
        address _lolToken
    ) Ownable(initialOwner) {
        lol = IERC721(_lol);
        lolToken = IERC20(_lolToken);
    }

    function createListing(uint256 tokenId, uint256 price) public {
        lol.transferFrom(msg.sender, address(this), tokenId);

        _listingIds++;
        uint256 listingId = _listingIds;

        listings[listingId] = Listing({
            id: listingId,
            tokenId: tokenId,
            seller: msg.sender,
            price: price,
            isSold: false
        });

        emit ListingCreated(listingId, tokenId, msg.sender, price);
    }

    function buyNFT(uint256 listingId) public payable {
        Listing storage listing = listings[listingId];
        require(!listing.isSold, "LOLNFTExchange: NFT is already sold");

        lolToken.transferFrom(msg.sender, listing.seller, listing.price);
        lol.transferFrom(address(this), msg.sender, listing.tokenId);

        listing.isSold = true;

        emit ListingSold(listingId, msg.sender);
    }
}
