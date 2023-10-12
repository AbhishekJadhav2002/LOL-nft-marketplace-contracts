// contracts/LOL.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LOLExchange is Ownable {
    IERC20 public lolToken;

    uint256 private _listingIds;

    struct Listing {
        uint256 id;
        address nftContract;
        uint256 tokenId;
        uint256 price;
        bool isSold;
        address seller;
    }

    mapping(uint256 => Listing) public listings;

    event ListingCreated(
        uint256 indexed id,
        address indexed nftContract,
        uint256 tokenId,
        address indexed seller,
        uint256 price
    );
    event ListingSold(uint256 indexed id, address indexed buyer);

    constructor(address initialOwner, address _lolToken) Ownable(initialOwner) {
        lolToken = IERC20(_lolToken);
    }

    function createListing(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public {
        IERC721 _nftContract = IERC721(nftContract);
        require(
            _nftContract.ownerOf(tokenId) == msg.sender,
            "LOLExchange: Token owner can only create listing"
        );
        _nftContract.transferFrom(msg.sender, address(this), tokenId);

        _listingIds++;
        uint256 listingId = _listingIds;

        listings[listingId] = Listing({
            id: listingId,
            nftContract: nftContract,
            tokenId: tokenId,
            seller: msg.sender,
            price: price,
            isSold: false
        });

        emit ListingCreated(listingId, nftContract, tokenId, msg.sender, price);
    }

    function buyNFT(uint256 listingId) public payable {
        Listing storage listing = listings[listingId];
        require(!listing.isSold, "LOLExchange: NFT is already sold");

        lolToken.transferFrom(msg.sender, listing.seller, listing.price);
        IERC721(listing.nftContract).transferFrom(
            address(this),
            msg.sender,
            listing.tokenId
        );

        listing.isSold = true;

        emit ListingSold(listingId, msg.sender);
    }
}
