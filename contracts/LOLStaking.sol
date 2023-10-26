// contracts/LOLStaking.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract LOLStaking is Ownable {
    using SafeERC20 for IERC20;

    IERC20 public immutable token;
    uint public immutable rewardsPerHour;
    uint public totalStaked = 0;
    mapping(address => uint) public claimed;
    mapping(address => uint) public balanceOf;
    mapping(address => uint) public lastUpdated;

    event Compound(address address_, uint amount_);
    event Claim(address address_, uint amount_);
    event Deposit(address address_, uint amount_);
    event Withdraw(address address_, uint amount_);

    constructor(
        address initialOwner,
        IERC20 token_,
        uint256 rewardPerHour_
    ) Ownable(initialOwner) {
        token = IERC20(token_);
        rewardsPerHour = rewardPerHour_;
    }

    function totalRewards() external view returns (uint) {
        return _totalRewards();
    }

    function _totalRewards() internal view returns (uint) {
        return token.balanceOf(address(this)) - totalStaked;
    }

    function rewards(address address_) external view returns (uint) {
        return _rewards(address_);
    }

    function _rewards(address address_) internal view returns (uint) {
        return
            ((block.timestamp - lastUpdated[address_]) * balanceOf[address_]) /
            (rewardsPerHour * 1 hours);
    }

    function compound() external {
        _compound();
    }

    function _compound() internal {
        uint amount = _rewards(msg.sender);
        claimed[msg.sender] += amount;
        balanceOf[msg.sender] += amount;
        totalStaked += amount;
        lastUpdated[msg.sender] = block.timestamp;
        emit Compound(msg.sender, amount);
    }

    function withdraw(uint amount_) external {
        require(balanceOf[msg.sender] >= amount_, "Insufficient funds");
        _compound();
        token.safeTransfer(msg.sender, amount_);
        balanceOf[msg.sender] -= amount_;
        totalStaked -= amount_;
        emit Withdraw(msg.sender, amount_);
    }

    function claim() external {
        uint amount = _rewards(msg.sender);
        token.safeTransfer(msg.sender, amount);
        claimed[msg.sender] += amount;
        lastUpdated[msg.sender] = block.timestamp;
        emit Claim(msg.sender, amount);
    }

    function deposit(uint amount_) external {
        _compound();
        token.safeTransferFrom(msg.sender, address(this), amount_);
        balanceOf[msg.sender] += amount_;
        lastUpdated[msg.sender] = block.timestamp;
        totalStaked += amount_;
        emit Deposit(msg.sender, amount_);
    }
}
