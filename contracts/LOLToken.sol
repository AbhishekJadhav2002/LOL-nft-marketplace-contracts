// contracts/LOLToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract LOLToken is ERC20, Ownable {
    // Initial the supply of LOLToken: 1,000,000
    uint256 constant initialSupply = 1000000 * (10 ** 18);

    // Tax rate
    uint256 public taxRate;

    // Constructor will be called on contract creation
    constructor(address initialOwner, uint256 _taxRate) ERC20("LOLToken", "LOL") Ownable(initialOwner) onlyLimitedTax(_taxRate) {
        taxRate = _taxRate;
        _mint(msg.sender, initialSupply);
    }

    function setTax(uint256 _taxRate) external onlyOwner onlyLimitedTax(_taxRate) {
        taxRate = _taxRate;
    }

    function transfer(
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        require(recipient != address(0), "LOLToken: transfer to the zero address");
        require(amount > 0, "LOLToken: amount must be greater than zero");

        uint256 tax = amount * taxRate / 1000;
        uint256 transferAmount = amount - tax;
        super._transfer(msg.sender, recipient, transferAmount);
        super._transfer(msg.sender, owner(), tax);
        return true;
    }

     modifier onlyLimitedTax(uint256 tax) {
        require(tax <= 200, "LOLToken: Tax too high");
        _;
    }
}
