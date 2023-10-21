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
  "0x60806040523480156200001157600080fd5b5060405162002e0d38038062002e0d833981810160405281019062000037919062000b48565b85600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000c33565b60405180910390fd5b620000be816200073d60201b60201c565b50620000db67b1e391a814c1ffe460c01b6200080160201b60201c565b620000f7672ec80fe1f0a6679360c01b6200080160201b60201c565b6200011367e9411ab5fbde490360c01b6200080160201b60201c565b6200012f6717c491eb0097b65960c01b6200080160201b60201c565b825184511462000176576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016d9062000cd7565b60405180910390fd5b62000192674f88fe0026afbdfb60c01b6200080160201b60201c565b620001ae6752023a44783880d460c01b6200080160201b60201c565b620001ca676bb6bbe7221c611c60c01b6200080160201b60201c565b620001e667f97ab7d8a9d7ed4260c01b6200080160201b60201c565b60008451116200022d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002249062000d49565b60405180910390fd5b6200024967b7728506b19596cc60c01b6200080160201b60201c565b6200026567da67ceac3bbdd12360c01b6200080160201b60201c565b62000281672e5b11c92fad3f4260c01b6200080160201b60201c565b6200029d67a4c516b764609c3460c01b6200080160201b60201c565b428211620002e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002d99062000de1565b60405180910390fd5b620002fe6764f61b4530914da460c01b6200080160201b60201c565b6200031a677ca5592d2190848460c01b6200080160201b60201c565b6200033667b3d38a342c8195a960c01b6200080160201b60201c565b62000352674458173aeb9abc5860c01b6200080160201b60201c565b6000811162000398576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200038f9062000e53565b60405180910390fd5b620003b4676dbb83c28a464c7b60c01b6200080160201b60201c565b620003d0671930bdf2ac1f366a60c01b6200080160201b60201c565b620003ec671a895c7d752e477660c01b6200080160201b60201c565b60005b84518110156200059757620004156768762f51369f7f8060c01b6200080160201b60201c565b6200043167ab88a179e514593860c01b6200080160201b60201c565b600060018262000442919062000ea4565b90505b855181101562000580576200046b670fbbdb3ab9c7623360c01b6200080160201b60201c565b6200048767f1b28c5fc25e040660c01b6200080160201b60201c565b620004a3679a4a598db735f7f960c01b6200080160201b60201c565b858181518110620004b957620004b862000edf565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16868381518110620004ed57620004ec62000edf565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16036200054e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005459062000f5e565b60405180910390fd5b6200056a671f9b37d9786026eb60c01b6200080160201b60201c565b8080620005779062000f80565b91505062000445565b5080806200058e9062000f80565b915050620003ef565b50620005b4674df854927493f60160c01b6200080160201b60201c565b84600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620006116742814523bf65555260c01b6200080160201b60201c565b8160038190555062000634673a5288ae512abf4660c01b6200080160201b60201c565b806004819055506200065767328b4239559efbcb60c01b6200080160201b60201c565b620006736763c4e071a2eb7d8560c01b6200080160201b60201c565b60005b845181101562000730576200069c67e6d7d56ea407626760c01b6200080160201b60201c565b838181518110620006b257620006b162000edf565b5b602002602001015160026000878481518110620006d457620006d362000edf565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080620007279062000f80565b91505062000676565b5050505050505062000fcd565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620008458262000818565b9050919050565b620008578162000838565b81146200086357600080fd5b50565b60008151905062000877816200084c565b92915050565b60006200088a8262000838565b9050919050565b6200089c816200087d565b8114620008a857600080fd5b50565b600081519050620008bc8162000891565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200091282620008c7565b810181811067ffffffffffffffff82111715620009345762000933620008d8565b5b80604052505050565b60006200094962000804565b905062000957828262000907565b919050565b600067ffffffffffffffff8211156200097a5762000979620008d8565b5b602082029050602081019050919050565b600080fd5b6000620009a7620009a1846200095c565b6200093d565b90508083825260208201905060208402830185811115620009cd57620009cc6200098b565b5b835b81811015620009fa5780620009e5888262000866565b845260208401935050602081019050620009cf565b5050509392505050565b600082601f83011262000a1c5762000a1b620008c2565b5b815162000a2e84826020860162000990565b91505092915050565b600067ffffffffffffffff82111562000a555762000a54620008d8565b5b602082029050602081019050919050565b6000819050919050565b62000a7b8162000a66565b811462000a8757600080fd5b50565b60008151905062000a9b8162000a70565b92915050565b600062000ab862000ab28462000a37565b6200093d565b9050808382526020820190506020840283018581111562000ade5762000add6200098b565b5b835b8181101562000b0b578062000af6888262000a8a565b84526020840193505060208101905062000ae0565b5050509392505050565b600082601f83011262000b2d5762000b2c620008c2565b5b815162000b3f84826020860162000aa1565b91505092915050565b60008060008060008060c0878903121562000b685762000b676200080e565b5b600062000b7889828a0162000866565b965050602062000b8b89828a01620008ab565b955050604087015167ffffffffffffffff81111562000baf5762000bae62000813565b5b62000bbd89828a0162000a04565b945050606087015167ffffffffffffffff81111562000be15762000be062000813565b5b62000bef89828a0162000b15565b935050608062000c0289828a0162000a8a565b92505060a062000c1589828a0162000a8a565b9150509295509295509295565b62000c2d8162000838565b82525050565b600060208201905062000c4a600083018462000c22565b92915050565b600082825260208201905092915050565b7f4c4f4c56657374696e673a20726563697069656e747320616e6420616c6c6f6360008201527f6174696f6e73206c656e677468206d69736d6174636800000000000000000000602082015250565b600062000cbf60368362000c50565b915062000ccc8262000c61565b604082019050919050565b6000602082019050818103600083015262000cf28162000cb0565b9050919050565b7f4c4f4c56657374696e673a206e6f20726563697069656e747300000000000000600082015250565b600062000d3160198362000c50565b915062000d3e8262000cf9565b602082019050919050565b6000602082019050818103600083015262000d648162000d22565b9050919050565b7f4c4f4c56657374696e673a2073746172742074696d65206d757374206265206960008201527f6e20746865206675747572650000000000000000000000000000000000000000602082015250565b600062000dc9602c8362000c50565b915062000dd68262000d6b565b604082019050919050565b6000602082019050818103600083015262000dfc8162000dba565b9050919050565b7f4c4f4c56657374696e673a206475726174696f6e206d757374206265203e2030600082015250565b600062000e3b60208362000c50565b915062000e488262000e03565b602082019050919050565b6000602082019050818103600083015262000e6e8162000e2c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000eb18262000a66565b915062000ebe8362000a66565b925082820190508082111562000ed95762000ed862000e75565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4c4f4c56657374696e673a206475706c696361746520726563697069656e7473600082015250565b600062000f4660208362000c50565b915062000f538262000f0e565b602082019050919050565b6000602082019050818103600083015262000f798162000f37565b9050919050565b600062000f8d8262000a66565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000fc25762000fc162000e75565b5b600182019050919050565b611e308062000fdd6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b81b863011610097578063f2fde38b11610066578063f2fde38b146102ad578063f6be71d1146102c9578063faca3894146102e5578063fc0c546a146102ef57610100565b8063b81b863014610201578063c58156e014610231578063c884ef831461024d578063de58bafa1461027d57610100565b806378e97925116100d357806378e97925146101795780638da5cb5b146101975780639852595c146101b5578063a75d1d12146101e557610100565b80630fb5a6b41461010557806310098ad5146101235780633e0a322d14610153578063715018a61461016f575b600080fd5b61010d61030d565b60405161011a919061165e565b60405180910390f35b61013d600480360381019061013891906116dc565b610313565b60405161014a919061165e565b60405180910390f35b61016d60048036038101906101689190611735565b610361565b005b610177610455565b005b610181610469565b60405161018e919061165e565b60405180910390f35b61019f61046f565b6040516101ac9190611771565b60405180910390f35b6101cf60048036038101906101ca91906116dc565b610498565b6040516101dc919061165e565b60405180910390f35b6101ff60048036038101906101fa919061178c565b6104e6565b005b61021b600480360381019061021691906116dc565b6107e2565b604051610228919061165e565b60405180910390f35b61024b600480360381019061024691906116dc565b6107fa565b005b610267600480360381019061026291906116dc565b610a58565b604051610274919061165e565b60405180910390f35b610297600480360381019061029291906116dc565b610a70565b6040516102a4919061165e565b60405180910390f35b6102c760048036038101906102c291906116dc565b610b08565b005b6102e360048036038101906102de9190611735565b610b8e565b005b6102ed610d17565b005b6102f7610f56565b604051610304919061182b565b60405180910390f35b60045481565b60006103296746b301f88981dad860c01b610f7c565b61033d67c9616f32f313d11660c01b610f7c565b610351676841639ee9781e7360c01b610f7c565b61035a82610f7f565b9050919050565b61037567459e76f13b4b7e5c60c01b610f7c565b61037d611016565b610391674281cd2c0a84c40360c01b610f7c565b6103a5671b4683611505db9960c01b610f7c565b6103b967624a0bfbc1b2263560c01b610f7c565b6103cd678c0944ed61b19f8360c01b610f7c565b6103e1672c91549f6b9f52fd60c01b610f7c565b428111610423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041a906118c9565b60405180910390fd5b6104376792e83e4ba3b64e7360c01b610f7c565b61044b678f6f2894e3ea1f2660c01b610f7c565b8060038190555050565b61045d611016565b610467600061109d565b565b60035481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006104ae6738131141e0547cd960c01b610f7c565b6104c267fcd2d0cd20a5081e60c01b610f7c565b6104d667477085f4643be45c60c01b610f7c565b6104df82611161565b9050919050565b6104fa67ef2f0f41b74bf22460c01b610f7c565b610502611016565b6105166762c12965c843b42d60c01b610f7c565b61052a67beabc123db22df9460c01b610f7c565b61053e67f73b837350d5d57560c01b610f7c565b6105526724dfc66167b495b260c01b610f7c565b610566679b7dbe759f4d5afb60c01b610f7c565b60035442106105aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a19061195b565b60405180910390fd5b6105be67e437bde50ed6bf8d60c01b610f7c565b6105d267058d2243770a333c60c01b610f7c565b6105e66741076b6e017ab0eb60c01b610f7c565b6105fa67fe87a336b5f3a04c60c01b610f7c565b6000811161063d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610634906119ed565b60405180910390fd5b61065167c5d1028534b8b4dc60c01b610f7c565b61066567e6b195aaf2bd33c760c01b610f7c565b6106796776ee20c80b4c6fb360c01b610f7c565b61068d6708396e4ba7c55aec60c01b610f7c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f390611a7f565b60405180910390fd5b61071067a0d6d7f1f3de47cb60c01b610f7c565b610724673972e51537d696d760c01b610f7c565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061077c67411fb6a9b3de3edb60c01b610f7c565b61079067523235fc65370d6e60c01b610f7c565b8173ffffffffffffffffffffffffffffffffffffffff167f89ae0301b5d5ac75c6f115698621696c58117a28edfbe1738e1c955e6f1e9090826040516107d6919061165e565b60405180910390a25050565b60026020528060005260406000206000915090505481565b61080e67485392d1ed133bf960c01b610f7c565b610816611016565b61082a678c3afcb919a495e960c01b610f7c565b61083e6706f70fe06ec8f70c60c01b610f7c565b61085267db1737227f6c9d0f60c01b610f7c565b61086667b7fa01e3b831235360c01b610f7c565b61087a67ae700e85e50822ab60c01b610f7c565b60035442106108be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b59061195b565b60405180910390fd5b6108d267bf52ed75872bc00d60c01b610f7c565b6108e667b8f9beb8a0cf2bff60c01b610f7c565b6108fa67b2ec5327791462a460c01b610f7c565b61090e67a8a1252a8aef91f060c01b610f7c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361097d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097490611a7f565b60405180910390fd5b6109916755e71b28d9792fd160c01b610f7c565b6109a56767d8b8bad15e828260c01b610f7c565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109fe679306d8963f53739960c01b610f7c565b610a12670768311802a83ae160c01b610f7c565b8073ffffffffffffffffffffffffffffffffffffffff167f85f179d4205edd87e18c80df3160316df70c87a3c515d0650c32dae6ead80afd60405160405180910390a250565b60056020528060005260406000206000915090505481565b6000610a866730af6741b7c87b5760c01b610f7c565b610a9a67f59b9f2cb29fb41460c01b610f7c565b610aae679e05096d3c4f3d9460c01b610f7c565b610ab782611161565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b019190611ace565b9050919050565b610b10611016565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b825760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610b799190611771565b60405180910390fd5b610b8b8161109d565b50565b610ba267ce3b4626147a421b60c01b610f7c565b610baa611016565b610bbe6768ec93b0acaf60c060c01b610f7c565b610bd26770133b2ab1886c3660c01b610f7c565b610be667353c70bf78e22e6560c01b610f7c565b610bfa67de055a0c9fff34a760c01b610f7c565b610c0e6760709fc19dbd25c560c01b610f7c565b6003544210610c52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c499061195b565b60405180910390fd5b610c6667516733057f0806b760c01b610f7c565b610c7a67152db49f91b4c3dd60c01b610f7c565b610c8e67823cffbf4b958d4160c01b610f7c565b610ca267e32dd636d5a0e2d160c01b610f7c565b60008111610ce5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdc90611b4e565b60405180910390fd5b610cf9671366918a062ef51360c01b610f7c565b610d0d67c065373d9d887a0660c01b610f7c565b8060048190555050565b610d2b67d82b72ae18c1b2e660c01b610f7c565b610d3f676353b1ffa2fe61bd60c01b610f7c565b610d536713b28d3b95f0838f60c01b610f7c565b610d6767aecef25b8f681d0060c01b610f7c565b600354421015610dac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da390611be0565b60405180910390fd5b610dc0675f1e14dbd82aa6ec60c01b610f7c565b610dd467acea5a84af53261a60c01b610f7c565b610de8679c29673f4f7e13d760c01b610f7c565b6000610df333610f7f565b9050610e0967489a511e29a607ea60c01b610f7c565b610e1d6779759bc6be35f8e460c01b610f7c565b610e73610e2861046f565b3383600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661136d909392919063ffffffff16565b610e87671c5a6a934dd8bc1a60c01b610f7c565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ed69190611c00565b92505081905550610ef1676262f66a5e3ef92d60c01b610f7c565b610f05671ae7aa1e3af970bb60c01b610f7c565b3373ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a82604051610f4b919061165e565b60405180910390a250565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b6000610f9466ff2cfe2e572e3e60c01b610f7c565b610fa867246b8bd44679a39460c01b610f7c565b610fbc675e82c7c33cda39c260c01b610f7c565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461100583611161565b61100f9190611ace565b9050919050565b61101e6113ef565b73ffffffffffffffffffffffffffffffffffffffff1661103c61046f565b73ffffffffffffffffffffffffffffffffffffffff161461109b5761105f6113ef565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016110929190611771565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000611177673ac055e4bc32963c60c01b610f7c565b61118b67c54661cb12cce32460c01b610f7c565b61119f670efc3ef1679aa10160c01b610f7c565b6003544210156111ee576111bd6799dd166ae5f4cb1b60c01b610f7c565b6111d167d3e643b841ba349560c01b610f7c565b6111e56704aa0d1e955cb40e60c01b610f7c565b60009050611368565b61120267c45efd7c9c6d343260c01b610f7c565b61121667d51901b5a7a4f48760c01b610f7c565b61122a67f05ef9cbb521434660c01b610f7c565b60045460035461123a9190611c00565b4211156112c457611255678b8c8c155238f10e60c01b610f7c565b61126967b20f94f68f56f90e60c01b610f7c565b61127d672f4fc4bff0d2678860c01b610f7c565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050611368565b6112d867609f8e53d76a32f660c01b610f7c565b6112ec67ecebfa0a1024908560c01b610f7c565b61130067ccc922830849c92660c01b610f7c565b600454600354426113119190611ace565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461135b9190611c34565b6113659190611ca5565b90505b919050565b6113e9848573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016113a293929190611cd6565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113f7565b50505050565b600033905090565b6000611422828473ffffffffffffffffffffffffffffffffffffffff1661148e90919063ffffffff16565b905060008151141580156114475750808060200190518101906114459190611d45565b155b1561148957826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016114809190611771565b60405180910390fd5b505050565b606061149c838360006114a4565b905092915050565b6060814710156114eb57306040517fcd7860590000000000000000000000000000000000000000000000000000000081526004016114e29190611771565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1684866040516115149190611de3565b60006040518083038185875af1925050503d8060008114611551576040519150601f19603f3d011682016040523d82523d6000602084013e611556565b606091505b5091509150611566868383611571565b925050509392505050565b6060826115865761158182611600565b6115f8565b600082511480156115ae575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156115f057836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016115e79190611771565b60405180910390fd5b8190506115f9565b5b9392505050565b6000815111156116135780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000819050919050565b61165881611645565b82525050565b6000602082019050611673600083018461164f565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116a98261167e565b9050919050565b6116b98161169e565b81146116c457600080fd5b50565b6000813590506116d6816116b0565b92915050565b6000602082840312156116f2576116f1611679565b5b6000611700848285016116c7565b91505092915050565b61171281611645565b811461171d57600080fd5b50565b60008135905061172f81611709565b92915050565b60006020828403121561174b5761174a611679565b5b600061175984828501611720565b91505092915050565b61176b8161169e565b82525050565b60006020820190506117866000830184611762565b92915050565b600080604083850312156117a3576117a2611679565b5b60006117b1858286016116c7565b92505060206117c285828601611720565b9150509250929050565b6000819050919050565b60006117f16117ec6117e78461167e565b6117cc565b61167e565b9050919050565b6000611803826117d6565b9050919050565b6000611815826117f8565b9050919050565b6118258161180a565b82525050565b6000602082019050611840600083018461181c565b92915050565b600082825260208201905092915050565b7f4c4f4c56657374696e673a2073746172742074696d65206d757374206265206960008201527f6e20746865206675747572650000000000000000000000000000000000000000602082015250565b60006118b3602c83611846565b91506118be82611857565b604082019050919050565b600060208201905081810360008301526118e2816118a6565b9050919050565b7f4c4f4c56657374696e673a2076657374696e672068617320616c72656164792060008201527f7374617274656400000000000000000000000000000000000000000000000000602082015250565b6000611945602783611846565b9150611950826118e9565b604082019050919050565b6000602082019050818103600083015261197481611938565b9050919050565b7f4c4f4c56657374696e673a20616c6c6f636174696f6e206d757374206265203e60008201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b60006119d7602283611846565b91506119e28261197b565b604082019050919050565b60006020820190508181036000830152611a06816119ca565b9050919050565b7f4c4f4c56657374696e673a20726563697069656e74206d757374206e6f74206260008201527f6520307830000000000000000000000000000000000000000000000000000000602082015250565b6000611a69602583611846565b9150611a7482611a0d565b604082019050919050565b60006020820190508181036000830152611a9881611a5c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ad982611645565b9150611ae483611645565b9250828203905081811115611afc57611afb611a9f565b5b92915050565b7f4c4f4c56657374696e673a206475726174696f6e206d757374206265203e2030600082015250565b6000611b38602083611846565b9150611b4382611b02565b602082019050919050565b60006020820190508181036000830152611b6781611b2b565b9050919050565b7f4c4f4c56657374696e673a20636c61696d20686173206e6f742073746172746560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611bca602183611846565b9150611bd582611b6e565b604082019050919050565b60006020820190508181036000830152611bf981611bbd565b9050919050565b6000611c0b82611645565b9150611c1683611645565b9250828201905080821115611c2e57611c2d611a9f565b5b92915050565b6000611c3f82611645565b9150611c4a83611645565b9250828202611c5881611645565b91508282048414831517611c6f57611c6e611a9f565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611cb082611645565b9150611cbb83611645565b925082611ccb57611cca611c76565b5b828204905092915050565b6000606082019050611ceb6000830186611762565b611cf86020830185611762565b611d05604083018461164f565b949350505050565b60008115159050919050565b611d2281611d0d565b8114611d2d57600080fd5b50565b600081519050611d3f81611d19565b92915050565b600060208284031215611d5b57611d5a611679565b5b6000611d6984828501611d30565b91505092915050565b600081519050919050565b600081905092915050565b60005b83811015611da6578082015181840152602081019050611d8b565b60008484015250505050565b6000611dbd82611d72565b611dc78185611d7d565b9350611dd7818560208601611d88565b80840191505092915050565b6000611def8284611db2565b91508190509291505056fea2646970667358221220813f8f0bf07e27adb5155700cae0d763aae7244fc79b75954fc3aad75e39e4e064736f6c63430008140033";

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