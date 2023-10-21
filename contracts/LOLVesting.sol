// contracts/LOLVesting.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract LOLVesting is Ownable {
    using SafeERC20 for IERC20;

    IERC20 public token;
    mapping(address => uint) public allocation;
    uint public startTime;
    uint public duration;

    mapping(address => uint) public claimed;

    event Claimed(address indexed account, uint amount);
    event AllocationAdded(address indexed account, uint amount);
    event AllocationRemoved(address indexed account);

    constructor(
        address initialOwner,
        IERC20 token_,
        address[] memory recipients_,
        uint[] memory allocations_,
        uint startTime_,
        uint duration_
    ) Ownable(initialOwner) {
        require(
            recipients_.length == allocations_.length,
            "LOLVesting: recipients and allocations length mismatch"
        );
        require(recipients_.length > 0, "LOLVesting: no recipients");
        require(
            startTime_ > block.timestamp,
            "LOLVesting: start time must be in the future"
        );
        require(duration_ > 0, "LOLVesting: duration must be > 0");
        for (uint i = 0; i < recipients_.length; i++) {
            for (uint j = i + 1; j < recipients_.length; j++) {
                require(
                    recipients_[i] != recipients_[j],
                    "LOLVesting: duplicate recipients"
                );
            }
        }

        token = IERC20(token_);
        startTime = startTime_;
        duration = duration_;
        for (uint i = 0; i < recipients_.length; i++) {
            allocation[recipients_[i]] = allocations_[i];
        }
    }

    function _released(address address_) internal view returns (uint) {
        if (block.timestamp < startTime) {
            return 0;
        } else {
            if (block.timestamp > startTime + duration) {
                return allocation[address_];
            } else {
                return
                    (allocation[address_] * (block.timestamp - startTime)) /
                    duration;
            }
        }
    }

    function _available(address address_) internal view returns (uint) {
        return _released(address_) - claimed[address_];
    }

    function setStartTime(uint startTime_) external onlyOwner {
        require(
            startTime_ > block.timestamp,
            "LOLVesting: start time must be in the future"
        );
        startTime = startTime_;
    }

    function setDuration(uint duration_) external onlyOwner {
        require(
            block.timestamp < startTime,
            "LOLVesting: vesting has already started"
        );
        require(duration_ > 0, "LOLVesting: duration must be > 0");
        duration = duration_;
    }

    function released(address address_) external view returns (uint) {
        return _released(address_);
    }

    function available(address address_) external view returns (uint) {
        return _available(address_);
    }

    function outstanding(address address_) external view returns (uint) {
        return allocation[address_] - _released(address_);
    }

    function addNewAllocation(
        address recipient,
        uint allocation_
    ) external onlyOwner {
        require(
            block.timestamp < startTime,
            "LOLVesting: vesting has already started"
        );
        require(allocation_ > 0, "LOLVesting: allocation must be > 0");
        require(
            recipient != address(0),
            "LOLVesting: recipient must not be 0x0"
        );
        allocation[recipient] = allocation_;

        emit AllocationAdded(recipient, allocation_);
    }

    function removeAllocation(address recipient) external onlyOwner {
        require(
            block.timestamp < startTime,
            "LOLVesting: vesting has already started"
        );
        require(
            recipient != address(0),
            "LOLVesting: recipient must not be 0x0"
        );
        allocation[recipient] = 0;

        emit AllocationRemoved(recipient);
    }

    function claimLOL() external {
        require(
            block.timestamp >= startTime,
            "LOLVesting: claim has not started"
        );
        uint amount = _available(msg.sender);
        token.safeTransferFrom(owner(), msg.sender, amount);
        claimed[msg.sender] += amount;

        emit Claimed(msg.sender, amount);
    }
}
