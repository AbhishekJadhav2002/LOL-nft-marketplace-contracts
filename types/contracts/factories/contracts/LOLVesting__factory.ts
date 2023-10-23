/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  LOLVesting,
  LOLVestingInterface,
} from "../../contracts/LOLVesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "recipients_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "allocations_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "startTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AllocationAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AllocationRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocation_",
        type: "uint256",
      },
    ],
    name: "addNewAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allocation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimLOL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "outstanding",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "released",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "removeAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "duration_",
        type: "uint256",
      },
    ],
    name: "setDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime_",
        type: "uint256",
      },
    ],
    name: "setStartTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002388380380620023888339818101604052810190620000379190620007e1565b85600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a49190620008cc565b60405180910390fd5b620000be81620003d960201b60201c565b50825184511462000106576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000fd9062000970565b60405180910390fd5b60008451116200014d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200014490620009e2565b60405180910390fd5b42821162000192576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001899062000a7a565b60405180910390fd5b60008111620001d8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001cf9062000aec565b60405180910390fd5b60005b8451811015620002db576000600182620001f6919062000b3d565b90505b8551811015620002c45785818151811062000219576200021862000b78565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168683815181106200024d576200024c62000b78565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603620002ae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002a59062000bf7565b60405180910390fd5b8080620002bb9062000c19565b915050620001f9565b508080620002d29062000c19565b915050620001db565b5084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816003819055508060048190555060005b8451811015620003cc578381815181106200034e576200034d62000b78565b5b60200260200101516002600087848151811062000370576200036f62000b78565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080620003c39062000c19565b9150506200032e565b5050505050505062000c66565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004de82620004b1565b9050919050565b620004f081620004d1565b8114620004fc57600080fd5b50565b6000815190506200051081620004e5565b92915050565b60006200052382620004d1565b9050919050565b620005358162000516565b81146200054157600080fd5b50565b60008151905062000555816200052a565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620005ab8262000560565b810181811067ffffffffffffffff82111715620005cd57620005cc62000571565b5b80604052505050565b6000620005e26200049d565b9050620005f08282620005a0565b919050565b600067ffffffffffffffff82111562000613576200061262000571565b5b602082029050602081019050919050565b600080fd5b6000620006406200063a84620005f5565b620005d6565b9050808382526020820190506020840283018581111562000666576200066562000624565b5b835b818110156200069357806200067e8882620004ff565b84526020840193505060208101905062000668565b5050509392505050565b600082601f830112620006b557620006b46200055b565b5b8151620006c784826020860162000629565b91505092915050565b600067ffffffffffffffff821115620006ee57620006ed62000571565b5b602082029050602081019050919050565b6000819050919050565b6200071481620006ff565b81146200072057600080fd5b50565b600081519050620007348162000709565b92915050565b6000620007516200074b84620006d0565b620005d6565b9050808382526020820190506020840283018581111562000777576200077662000624565b5b835b81811015620007a457806200078f888262000723565b84526020840193505060208101905062000779565b5050509392505050565b600082601f830112620007c657620007c56200055b565b5b8151620007d88482602086016200073a565b91505092915050565b60008060008060008060c08789031215620008015762000800620004a7565b5b60006200081189828a01620004ff565b96505060206200082489828a0162000544565b955050604087015167ffffffffffffffff811115620008485762000847620004ac565b5b6200085689828a016200069d565b945050606087015167ffffffffffffffff8111156200087a5762000879620004ac565b5b6200088889828a01620007ae565b93505060806200089b89828a0162000723565b92505060a0620008ae89828a0162000723565b9150509295509295509295565b620008c681620004d1565b82525050565b6000602082019050620008e36000830184620008bb565b92915050565b600082825260208201905092915050565b7f4c4f4c56657374696e673a20726563697069656e747320616e6420616c6c6f6360008201527f6174696f6e73206c656e677468206d69736d6174636800000000000000000000602082015250565b600062000958603683620008e9565b91506200096582620008fa565b604082019050919050565b600060208201905081810360008301526200098b8162000949565b9050919050565b7f4c4f4c56657374696e673a206e6f20726563697069656e747300000000000000600082015250565b6000620009ca601983620008e9565b9150620009d78262000992565b602082019050919050565b60006020820190508181036000830152620009fd81620009bb565b9050919050565b7f4c4f4c56657374696e673a2073746172742074696d65206d757374206265206960008201527f6e20746865206675747572650000000000000000000000000000000000000000602082015250565b600062000a62602c83620008e9565b915062000a6f8262000a04565b604082019050919050565b6000602082019050818103600083015262000a958162000a53565b9050919050565b7f4c4f4c56657374696e673a206475726174696f6e206d757374206265203e2030600082015250565b600062000ad4602083620008e9565b915062000ae18262000a9c565b602082019050919050565b6000602082019050818103600083015262000b078162000ac5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000b4a82620006ff565b915062000b5783620006ff565b925082820190508082111562000b725762000b7162000b0e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4c4f4c56657374696e673a206475706c696361746520726563697069656e7473600082015250565b600062000bdf602083620008e9565b915062000bec8262000ba7565b602082019050919050565b6000602082019050818103600083015262000c128162000bd0565b9050919050565b600062000c2682620006ff565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000c5b5762000c5a62000b0e565b5b600182019050919050565b6117128062000c766000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b81b863011610097578063f2fde38b11610066578063f2fde38b146102ad578063f6be71d1146102c9578063faca3894146102e5578063fc0c546a146102ef57610100565b8063b81b863014610201578063c58156e014610231578063c884ef831461024d578063de58bafa1461027d57610100565b806378e97925116100d357806378e97925146101795780638da5cb5b146101975780639852595c146101b5578063a75d1d12146101e557610100565b80630fb5a6b41461010557806310098ad5146101235780633e0a322d14610153578063715018a61461016f575b600080fd5b61010d61030d565b60405161011a9190610f40565b60405180910390f35b61013d60048036038101906101389190610fbe565b610313565b60405161014a9190610f40565b60405180910390f35b61016d60048036038101906101689190611017565b610325565b005b610177610379565b005b61018161038d565b60405161018e9190610f40565b60405180910390f35b61019f610393565b6040516101ac9190611053565b60405180910390f35b6101cf60048036038101906101ca9190610fbe565b6103bc565b6040516101dc9190610f40565b60405180910390f35b6101ff60048036038101906101fa919061106e565b6103ce565b005b61021b60048036038101906102169190610fbe565b610562565b6040516102289190610f40565b60405180910390f35b61024b60048036038101906102469190610fbe565b61057a565b005b61026760048036038101906102629190610fbe565b6106c0565b6040516102749190610f40565b60405180910390f35b61029760048036038101906102929190610fbe565b6106d8565b6040516102a49190610f40565b60405180910390f35b6102c760048036038101906102c29190610fbe565b610734565b005b6102e360048036038101906102de9190611017565b6107ba565b005b6102ed610853565b005b6102f76109a2565b604051610304919061110d565b60405180910390f35b60045481565b600061031e826109c8565b9050919050565b61032d610a24565b42811161036f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610366906111ab565b60405180910390fd5b8060038190555050565b610381610a24565b61038b6000610aab565b565b60035481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006103c782610b6f565b9050919050565b6103d6610a24565b600354421061041a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104119061123d565b60405180910390fd5b6000811161045d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610454906112cf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c390611361565b60405180910390fd5b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f89ae0301b5d5ac75c6f115698621696c58117a28edfbe1738e1c955e6f1e9090826040516105569190610f40565b60405180910390a25050565b60026020528060005260406000206000915090505481565b610582610a24565b60035442106105c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bd9061123d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062c90611361565b60405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff167f85f179d4205edd87e18c80df3160316df70c87a3c515d0650c32dae6ead80afd60405160405180910390a250565b60056020528060005260406000206000915090505481565b60006106e382610b6f565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461072d91906113b0565b9050919050565b61073c610a24565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107ae5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107a59190611053565b60405180910390fd5b6107b781610aab565b50565b6107c2610a24565b6003544210610806576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fd9061123d565b60405180910390fd5b60008111610849576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084090611430565b60405180910390fd5b8060048190555050565b600354421015610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088f906114c2565b60405180910390fd5b60006108a3336109c8565b90506108fb6108b0610393565b3383600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610c4f909392919063ffffffff16565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461094a91906114e2565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a826040516109979190610f40565b60405180910390a250565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a1383610b6f565b610a1d91906113b0565b9050919050565b610a2c610cd1565b73ffffffffffffffffffffffffffffffffffffffff16610a4a610393565b73ffffffffffffffffffffffffffffffffffffffff1614610aa957610a6d610cd1565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610aa09190611053565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600354421015610b845760009050610c4a565b600454600354610b9491906114e2565b421115610be257600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610c4a565b60045460035442610bf391906113b0565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c3d9190611516565b610c479190611587565b90505b919050565b610ccb848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401610c84939291906115b8565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cd9565b50505050565b600033905090565b6000610d04828473ffffffffffffffffffffffffffffffffffffffff16610d7090919063ffffffff16565b90506000815114158015610d29575080806020019051810190610d279190611627565b155b15610d6b57826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401610d629190611053565b60405180910390fd5b505050565b6060610d7e83836000610d86565b905092915050565b606081471015610dcd57306040517fcd786059000000000000000000000000000000000000000000000000000000008152600401610dc49190611053565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168486604051610df691906116c5565b60006040518083038185875af1925050503d8060008114610e33576040519150601f19603f3d011682016040523d82523d6000602084013e610e38565b606091505b5091509150610e48868383610e53565b925050509392505050565b606082610e6857610e6382610ee2565b610eda565b60008251148015610e90575060008473ffffffffffffffffffffffffffffffffffffffff163b145b15610ed257836040517f9996b315000000000000000000000000000000000000000000000000000000008152600401610ec99190611053565b60405180910390fd5b819050610edb565b5b9392505050565b600081511115610ef55780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000819050919050565b610f3a81610f27565b82525050565b6000602082019050610f556000830184610f31565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f8b82610f60565b9050919050565b610f9b81610f80565b8114610fa657600080fd5b50565b600081359050610fb881610f92565b92915050565b600060208284031215610fd457610fd3610f5b565b5b6000610fe284828501610fa9565b91505092915050565b610ff481610f27565b8114610fff57600080fd5b50565b60008135905061101181610feb565b92915050565b60006020828403121561102d5761102c610f5b565b5b600061103b84828501611002565b91505092915050565b61104d81610f80565b82525050565b60006020820190506110686000830184611044565b92915050565b6000806040838503121561108557611084610f5b565b5b600061109385828601610fa9565b92505060206110a485828601611002565b9150509250929050565b6000819050919050565b60006110d36110ce6110c984610f60565b6110ae565b610f60565b9050919050565b60006110e5826110b8565b9050919050565b60006110f7826110da565b9050919050565b611107816110ec565b82525050565b600060208201905061112260008301846110fe565b92915050565b600082825260208201905092915050565b7f4c4f4c56657374696e673a2073746172742074696d65206d757374206265206960008201527f6e20746865206675747572650000000000000000000000000000000000000000602082015250565b6000611195602c83611128565b91506111a082611139565b604082019050919050565b600060208201905081810360008301526111c481611188565b9050919050565b7f4c4f4c56657374696e673a2076657374696e672068617320616c72656164792060008201527f7374617274656400000000000000000000000000000000000000000000000000602082015250565b6000611227602783611128565b9150611232826111cb565b604082019050919050565b600060208201905081810360008301526112568161121a565b9050919050565b7f4c4f4c56657374696e673a20616c6c6f636174696f6e206d757374206265203e60008201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b60006112b9602283611128565b91506112c48261125d565b604082019050919050565b600060208201905081810360008301526112e8816112ac565b9050919050565b7f4c4f4c56657374696e673a20726563697069656e74206d757374206e6f74206260008201527f6520307830000000000000000000000000000000000000000000000000000000602082015250565b600061134b602583611128565b9150611356826112ef565b604082019050919050565b6000602082019050818103600083015261137a8161133e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113bb82610f27565b91506113c683610f27565b92508282039050818111156113de576113dd611381565b5b92915050565b7f4c4f4c56657374696e673a206475726174696f6e206d757374206265203e2030600082015250565b600061141a602083611128565b9150611425826113e4565b602082019050919050565b600060208201905081810360008301526114498161140d565b9050919050565b7f4c4f4c56657374696e673a20636c61696d20686173206e6f742073746172746560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b60006114ac602183611128565b91506114b782611450565b604082019050919050565b600060208201905081810360008301526114db8161149f565b9050919050565b60006114ed82610f27565b91506114f883610f27565b92508282019050808211156115105761150f611381565b5b92915050565b600061152182610f27565b915061152c83610f27565b925082820261153a81610f27565b9150828204841483151761155157611550611381565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061159282610f27565b915061159d83610f27565b9250826115ad576115ac611558565b5b828204905092915050565b60006060820190506115cd6000830186611044565b6115da6020830185611044565b6115e76040830184610f31565b949350505050565b60008115159050919050565b611604816115ef565b811461160f57600080fd5b50565b600081519050611621816115fb565b92915050565b60006020828403121561163d5761163c610f5b565b5b600061164b84828501611612565b91505092915050565b600081519050919050565b600081905092915050565b60005b8381101561168857808201518184015260208101905061166d565b60008484015250505050565b600061169f82611654565b6116a9818561165f565b93506116b981856020860161166a565b80840191505092915050565b60006116d18284611694565b91508190509291505056fea264697066735822122007c43f396f938da8e180244e0f22b8b7266e3687a39d3522b04ba74ba14887d564736f6c63430008140033";

type LOLVestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LOLVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LOLVesting__factory extends ContractFactory {
  constructor(...args: LOLVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    token_: AddressLike,
    recipients_: AddressLike[],
    allocations_: BigNumberish[],
    startTime_: BigNumberish,
    duration_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      initialOwner,
      token_,
      recipients_,
      allocations_,
      startTime_,
      duration_,
      overrides || {}
    );
  }
  override deploy(
    initialOwner: AddressLike,
    token_: AddressLike,
    recipients_: AddressLike[],
    allocations_: BigNumberish[],
    startTime_: BigNumberish,
    duration_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      initialOwner,
      token_,
      recipients_,
      allocations_,
      startTime_,
      duration_,
      overrides || {}
    ) as Promise<
      LOLVesting & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LOLVesting__factory {
    return super.connect(runner) as LOLVesting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LOLVestingInterface {
    return new Interface(_abi) as LOLVestingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LOLVesting {
    return new Contract(address, _abi, runner) as unknown as LOLVesting;
  }
}
