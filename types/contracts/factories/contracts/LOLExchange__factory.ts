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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  LOLExchange,
  LOLExchangeInterface,
} from "../../contracts/LOLExchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ListingCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "ListingSold",
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
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "itemsListed",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isSold",
            type: "bool",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        internalType: "struct LOLExchange.Listing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listings",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isSold",
        type: "bool",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162001e8c38038062001e8c833981810160405281019062000037919062000213565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000256565b60405180910390fd5b620000be81620000e260201b60201c565b50620000db67fb6fb4b754962ed460c01b620001a660201b60201c565b5062000273565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001db82620001ae565b9050919050565b620001ed81620001ce565b8114620001f957600080fd5b50565b6000815190506200020d81620001e2565b92915050565b6000602082840312156200022c576200022b620001a9565b5b60006200023c84828501620001fc565b91505092915050565b6200025081620001ce565b82525050565b60006020820190506200026d600083018462000245565b92915050565b611c0980620002836000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063715018a61161005b578063715018a6146100d85780638da5cb5b146100e2578063de74e57b14610100578063f2fde38b146101365761007d565b806351ed8288146100825780635e7f40451461009e578063619a55e8146100bc575b600080fd5b61009c600480360381019061009791906113c0565b610152565b005b6100a661071a565b6040516100b39190611595565b60405180910390f35b6100d660048036038101906100d191906115e3565b610b98565b005b6100e061103c565b005b6100ea611050565b6040516100f79190611659565b60405180910390f35b61011a600480360381019061011591906113c0565b611079565b60405161012d9796959493929190611692565b60405180910390f35b610150600480360381019061014b9190611701565b611128565b005b610166670f0fc4283b38e74560c01b6111ae565b61017a674120fef9a97efbea60c01b6111ae565b61018e678150fa2268d28a5060c01b6111ae565b60006002600083815260200190815260200160002090506101b9679b38a1e87b89e9b260c01b6111ae565b6101cd67feb708dfa3a0cd4960c01b6111ae565b6101e167dcc9201947542e2e60c01b6111ae565b8060050160009054906101000a900460ff1615610233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022a9061178b565b60405180910390fd5b610247677a7f4abf9462fe4a60c01b6111ae565b61025b67d431d5a305bc2f9660c01b6111ae565b61026f67625751eef98d4c0d60c01b6111ae565b60008160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506102ac67fb868819611ccc3360c01b6111ae565b6102c067b9dc9d591810858360c01b6111ae565b60008260020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506102fd67eef5aa7e28b300e260c01b6111ae565b61031167d06b3ab66bdd319a60c01b6111ae565b610325671326da558693a96660c01b6111ae565b82600401548273ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016103639190611659565b602060405180830381865afa158015610380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a491906117c0565b10156103e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103dc9061185f565b60405180910390fd5b6103f967999d3383b262642660c01b6111ae565b61040d6717e4f025fa26dbf260c01b6111ae565b61042167c48acd983b3385b560c01b6111ae565b610435677d7b17e2ad82bbf560c01b6111ae565b82600401548273ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161047592919061187f565b602060405180830381865afa158015610492573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b691906117c0565b10156104f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ee9061191a565b60405180910390fd5b61050b67b44eb2195a98c4a460c01b6111ae565b61051f67ec8dcca584c449a760c01b6111ae565b610533677b7619f1e78724b260c01b6111ae565b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd338560050160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686600401546040518463ffffffff1660e01b81526004016105989392919061193a565b6020604051808303816000875af11580156105b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105db919061199d565b506105f067172fe65a39e41ea160c01b6111ae565b6106046722bb0a708a395f4060c01b6111ae565b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd303386600301546040518463ffffffff1660e01b81526004016106459392919061193a565b600060405180830381600087803b15801561065f57600080fd5b505af1158015610673573d6000803e3d6000fd5b5050505061068b67a1930534f834f90a60c01b6111ae565b60018360050160006101000a81548160ff0219169083151502179055506106bc6750b2eb65e83c9ce860c01b6111ae565b6106d06748dd164b20c1c24f60c01b6111ae565b3373ffffffffffffffffffffffffffffffffffffffff16847f8f9d273ad6b9ef6936db5cd20a141ecb032af10f2a5fec60c106343670b2c87760405160405180910390a350505050565b6060610730673f4ad3b11a148c6660c01b6111ae565b610744676356971956962d7c60c01b6111ae565b610758679ab2d52a67666dd060c01b6111ae565b600061076e67ee292b4a288e294860c01b6111ae565b61078267f9f8b49743c2480c60c01b6111ae565b6000600190505b6001548111610845576107a66785ff8c283e18288660c01b6111ae565b6107ba675d62004cddf4412960c01b6111ae565b6002600082815260200190815260200160002060050160009054906101000a900460ff1661081d576107f66717421a7103d4bfbc60c01b6111ae565b61080a6771cbcca9811302bd60c01b6111ae565b8180610815906119f9565b925050610832565b610831678b41863f58ccd15260c01b6111ae565b5b808061083d906119f9565b915050610789565b5061085a67257ef6da46bfdb1360c01b6111ae565b61086e674b07e326883fb57160c01b6111ae565b60008167ffffffffffffffff81111561088a57610889611a41565b5b6040519080825280602002602001820160405280156108c357816020015b6108b0611304565b8152602001906001900390816108a85790505b5090506108da67dd7cf11537ac576b60c01b6111ae565b6108ee67ebd5f3710ebcc44a60c01b6111ae565b600061090467f3b4275c728fd89660c01b6111ae565b610918679e07a5a1a52ba2e860c01b6111ae565b6000600190505b6001548111610b665761093c672f2212dc5fbd4ac760c01b6111ae565b61095067b449595d272a4c6060c01b6111ae565b6002600082815260200190815260200160002060050160009054906101000a900460ff16610b3e5761098c6778706ff6b0aaf89060c01b6111ae565b6109a06711ae760f43b64f3d60c01b6111ae565b600260008281526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160038201548152602001600482015481526020016005820160009054906101000a900460ff161515151581526020016005820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050838381518110610b0c57610b0b611a70565b5b6020026020010181905250610b2b671e61b7c3771de63e60c01b6111ae565b8180610b36906119f9565b925050610b53565b610b52678d71425225091c1c60c01b6111ae565b5b8080610b5e906119f9565b91505061091f565b50610b7b67307710b895f72a4c60c01b6111ae565b610b8f67317ab79e230439db60c01b6111ae565b81935050505090565b610bac678cde972931eb560160c01b6111ae565b610bc0676cb4db6fbfd4b3da60c01b6111ae565b610bd4673dcc974a7a3cdcc960c01b6111ae565b6000839050610bed67823c0eb403065a4060c01b6111ae565b610c0167c447e07fcdeb017160c01b6111ae565b610c15670b8bb20ca38ef47060c01b6111ae565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610c659190611a9f565b602060405180830381865afa158015610c82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca69190611acf565b73ffffffffffffffffffffffffffffffffffffffff1614610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf390611b6e565b60405180910390fd5b610d1067c8067926e529871060c01b6111ae565b610d2467d8ef07b007de39e960c01b6111ae565b610d386781f3e3c1c0a9bc4c60c01b6111ae565b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401610d759392919061193a565b600060405180830381600087803b158015610d8f57600080fd5b505af1158015610da3573d6000803e3d6000fd5b50505050610dbb675d5e88845026345360c01b6111ae565b60016000815480929190610dce906119f9565b9190505550610de7671f2345d264d3b7a860c01b6111ae565b610dfb6798ebcab3d3bb77a660c01b6111ae565b60006001549050610e16671f52f243de35e63760c01b6111ae565b6040518060e001604052808281526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020016000151581526020013373ffffffffffffffffffffffffffffffffffffffff16815250600260008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555060c08201518160050160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050610fcb675f842fcf533a379a60c01b6111ae565b610fdf672075a88acc6cf1d860c01b6111ae565b3373ffffffffffffffffffffffffffffffffffffffff16817f950e8565b79111fb6cb4c5dfda4966d8bdc2e05a09885138dea91f7f9afee6de8888888860405161102c9493929190611b8e565b60405180910390a3505050505050565b6110446111b1565b61104e6000611238565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905087565b6111306111b1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111a25760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016111999190611659565b60405180910390fd5b6111ab81611238565b50565b50565b6111b96112fc565b73ffffffffffffffffffffffffffffffffffffffff166111d7611050565b73ffffffffffffffffffffffffffffffffffffffff1614611236576111fa6112fc565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161122d9190611659565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518060e0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b600080fd5b6000819050919050565b61139d8161138a565b81146113a857600080fd5b50565b6000813590506113ba81611394565b92915050565b6000602082840312156113d6576113d5611385565b5b60006113e4848285016113ab565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6114228161138a565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061145382611428565b9050919050565b61146381611448565b82525050565b60008115159050919050565b61147e81611469565b82525050565b60e08201600082015161149a6000850182611419565b5060208201516114ad602085018261145a565b5060408201516114c0604085018261145a565b5060608201516114d36060850182611419565b5060808201516114e66080850182611419565b5060a08201516114f960a0850182611475565b5060c082015161150c60c085018261145a565b50505050565b600061151e8383611484565b60e08301905092915050565b6000602082019050919050565b6000611542826113ed565b61154c81856113f8565b935061155783611409565b8060005b8381101561158857815161156f8882611512565b975061157a8361152a565b92505060018101905061155b565b5085935050505092915050565b600060208201905081810360008301526115af8184611537565b905092915050565b6115c081611448565b81146115cb57600080fd5b50565b6000813590506115dd816115b7565b92915050565b600080600080608085870312156115fd576115fc611385565b5b600061160b878288016115ce565b945050602061161c878288016115ce565b935050604061162d878288016113ab565b925050606061163e878288016113ab565b91505092959194509250565b61165381611448565b82525050565b600060208201905061166e600083018461164a565b92915050565b61167d8161138a565b82525050565b61168c81611469565b82525050565b600060e0820190506116a7600083018a611674565b6116b4602083018961164a565b6116c1604083018861164a565b6116ce6060830187611674565b6116db6080830186611674565b6116e860a0830185611683565b6116f560c083018461164a565b98975050505050505050565b60006020828403121561171757611716611385565b5b6000611725848285016115ce565b91505092915050565b600082825260208201905092915050565b7f4c4f4c45786368616e67653a204e465420697320616c726561647920736f6c64600082015250565b600061177560208361172e565b91506117808261173f565b602082019050919050565b600060208201905081810360008301526117a481611768565b9050919050565b6000815190506117ba81611394565b92915050565b6000602082840312156117d6576117d5611385565b5b60006117e4848285016117ab565b91505092915050565b7f4c4f4c45786368616e67653a20496e73756666696369656e7420746f6b656e2060008201527f62616c616e636500000000000000000000000000000000000000000000000000602082015250565b600061184960278361172e565b9150611854826117ed565b604082019050919050565b600060208201905081810360008301526118788161183c565b9050919050565b6000604082019050611894600083018561164a565b6118a1602083018461164a565b9392505050565b7f4c4f4c45786368616e67653a20496e73756666696369656e7420746f6b656e2060008201527f616c6c6f77616e63650000000000000000000000000000000000000000000000602082015250565b600061190460298361172e565b915061190f826118a8565b604082019050919050565b60006020820190508181036000830152611933816118f7565b9050919050565b600060608201905061194f600083018661164a565b61195c602083018561164a565b6119696040830184611674565b949350505050565b61197a81611469565b811461198557600080fd5b50565b60008151905061199781611971565b92915050565b6000602082840312156119b3576119b2611385565b5b60006119c184828501611988565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a048261138a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a3657611a356119ca565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082019050611ab46000830184611674565b92915050565b600081519050611ac9816115b7565b92915050565b600060208284031215611ae557611ae4611385565b5b6000611af384828501611aba565b91505092915050565b7f4c4f4c45786368616e67653a204e465420546f6b656e206f776e65722063616e60008201527f206f6e6c7920637265617465206c697374696e67000000000000000000000000602082015250565b6000611b5860348361172e565b9150611b6382611afc565b604082019050919050565b60006020820190508181036000830152611b8781611b4b565b9050919050565b6000608082019050611ba3600083018761164a565b611bb0602083018661164a565b611bbd6040830185611674565b611bca6060830184611674565b9594505050505056fea264697066735822122052dc56a90696f88ed1ad06e71543d2e117a06dc66be684e398708acb3185e3ab64736f6c63430008140033";

type LOLExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LOLExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LOLExchange__factory extends ContractFactory {
  constructor(...args: LOLExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      LOLExchange & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LOLExchange__factory {
    return super.connect(runner) as LOLExchange__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LOLExchangeInterface {
    return new Interface(_abi) as LOLExchangeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LOLExchange {
    return new Contract(address, _abi, runner) as unknown as LOLExchange;
  }
}
