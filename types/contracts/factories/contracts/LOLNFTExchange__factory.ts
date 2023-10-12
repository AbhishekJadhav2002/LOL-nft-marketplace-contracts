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
  LOLNFTExchange,
  LOLNFTExchangeInterface,
} from "../../contracts/LOLNFTExchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lol",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lolToken",
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
        indexed: true,
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
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
    name: "lol",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lolToken",
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
  "0x60806040523480156200001157600080fd5b506040516200125d3803806200125d8339818101604052810190620000379190620002cf565b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a491906200033c565b60405180910390fd5b620000be816200019e60201b60201c565b50620000db67513c99f91c00e02560c01b6200026260201b60201c565b620000f7678e6be9acbf587daa60c01b6200026260201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000154674944c00bb88efe4460c01b6200026260201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000359565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000297826200026a565b9050919050565b620002a9816200028a565b8114620002b557600080fd5b50565b600081519050620002c9816200029e565b92915050565b600080600060608486031215620002eb57620002ea62000265565b5b6000620002fb86828701620002b8565b93505060206200030e86828701620002b8565b92505060406200032186828701620002b8565b9150509250925092565b62000336816200028a565b82525050565b60006020820190506200035360008301846200032b565b92915050565b610ef480620003696000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b14610109578063a79123a914610134578063de74e57b1461015d578063f2fde38b1461019e5761007b565b806351ed828814610080578063715018a61461009c57806371e2d919146100b35780638b4b09ea146100de575b600080fd5b61009a60048036038101906100959190610aa4565b6101c7565b005b3480156100a857600080fd5b506100b161050d565b005b3480156100bf57600080fd5b506100c8610521565b6040516100d59190610b50565b60405180910390f35b3480156100ea57600080fd5b506100f3610547565b6040516101009190610b8c565b60405180910390f35b34801561011557600080fd5b5061011e61056d565b60405161012b9190610bc8565b60405180910390f35b34801561014057600080fd5b5061015b60048036038101906101569190610be3565b610596565b005b34801561016957600080fd5b50610184600480360381019061017f9190610aa4565b61082a565b604051610195959493929190610c4d565b60405180910390f35b3480156101aa57600080fd5b506101c560048036038101906101c09190610ccc565b61088d565b005b6101db677418a7a9477687d760c01b610913565b6101ef67b8771b72311c169060c01b610913565b610203679f9ab8c2b3cdf92a60c01b610913565b600060046000838152602001908152602001600020905061022e671da905639dd6eb3160c01b610913565b61024267942af1679e36494f60c01b610913565b610256672313eb8f667b620a60c01b610913565b8060030160009054906101000a900460ff16156102a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029f90610d7c565b60405180910390fd5b6102bc67b9fd736bbda4ca4560c01b610913565b6102d06735ab342517da786460c01b610913565b6102e4677eefb7f8000d266060c01b610913565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd338360030160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600201546040518463ffffffff1660e01b815260040161036b93929190610d9c565b6020604051808303816000875af115801561038a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ae9190610dff565b506103c367301db52a9b544ecd60c01b610913565b6103d767c8c2b488a5d558dc60c01b610913565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b815260040161043a93929190610d9c565b600060405180830381600087803b15801561045457600080fd5b505af1158015610468573d6000803e3d6000fd5b5050505061048067369ae9ccab902f8860c01b610913565b60018160030160006101000a81548160ff0219169083151502179055506104b167fadf28ebd12904d960c01b610913565b6104c56730d6bdeacf4be97760c01b610913565b3373ffffffffffffffffffffffffffffffffffffffff16827f8f9d273ad6b9ef6936db5cd20a141ecb032af10f2a5fec60c106343670b2c87760405160405180910390a35050565b610515610916565b61051f600061099d565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105aa677a7c3585b0b1028160c01b610913565b6105be676e966a17852fab8460c01b610913565b6105d26749484a91c083ec1b60c01b610913565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161063193929190610d9c565b600060405180830381600087803b15801561064b57600080fd5b505af115801561065f573d6000803e3d6000fd5b5050505061067767a4d0b0c4b182167b60c01b610913565b6003600081548092919061068a90610e5b565b91905055506106a3673516ea30c0d7326660c01b610913565b6106b767513816a4c922240560c01b610913565b600060035490506106d2673b50922a56a4aa3e60c01b610913565b6040518060a001604052808281526020018481526020018381526020016000151581526020013373ffffffffffffffffffffffffffffffffffffffff168152506004600083815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506107c167a93de62cbdee051860c01b610913565b6107d567866788654b9baf4e60c01b610913565b3373ffffffffffffffffffffffffffffffffffffffff1683827f8093adc67e6531e4dcb9f96fe66947096b91ad10573e8136f8ef1a1cebe2fad68560405161081d9190610ea3565b60405180910390a4505050565b60046020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a900460ff16908060030160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b610895610916565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109075760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108fe9190610bc8565b60405180910390fd5b6109108161099d565b50565b50565b61091e610a61565b73ffffffffffffffffffffffffffffffffffffffff1661093c61056d565b73ffffffffffffffffffffffffffffffffffffffff161461099b5761095f610a61565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109929190610bc8565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b6000819050919050565b610a8181610a6e565b8114610a8c57600080fd5b50565b600081359050610a9e81610a78565b92915050565b600060208284031215610aba57610ab9610a69565b5b6000610ac884828501610a8f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610b16610b11610b0c84610ad1565b610af1565b610ad1565b9050919050565b6000610b2882610afb565b9050919050565b6000610b3a82610b1d565b9050919050565b610b4a81610b2f565b82525050565b6000602082019050610b656000830184610b41565b92915050565b6000610b7682610b1d565b9050919050565b610b8681610b6b565b82525050565b6000602082019050610ba16000830184610b7d565b92915050565b6000610bb282610ad1565b9050919050565b610bc281610ba7565b82525050565b6000602082019050610bdd6000830184610bb9565b92915050565b60008060408385031215610bfa57610bf9610a69565b5b6000610c0885828601610a8f565b9250506020610c1985828601610a8f565b9150509250929050565b610c2c81610a6e565b82525050565b60008115159050919050565b610c4781610c32565b82525050565b600060a082019050610c626000830188610c23565b610c6f6020830187610c23565b610c7c6040830186610c23565b610c896060830185610c3e565b610c966080830184610bb9565b9695505050505050565b610ca981610ba7565b8114610cb457600080fd5b50565b600081359050610cc681610ca0565b92915050565b600060208284031215610ce257610ce1610a69565b5b6000610cf084828501610cb7565b91505092915050565b600082825260208201905092915050565b7f4c4f4c4e465445786368616e67653a204e465420697320616c7265616479207360008201527f6f6c640000000000000000000000000000000000000000000000000000000000602082015250565b6000610d66602383610cf9565b9150610d7182610d0a565b604082019050919050565b60006020820190508181036000830152610d9581610d59565b9050919050565b6000606082019050610db16000830186610bb9565b610dbe6020830185610bb9565b610dcb6040830184610c23565b949350505050565b610ddc81610c32565b8114610de757600080fd5b50565b600081519050610df981610dd3565b92915050565b600060208284031215610e1557610e14610a69565b5b6000610e2384828501610dea565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e6682610a6e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e9857610e97610e2c565b5b600182019050919050565b6000602082019050610eb86000830184610c23565b9291505056fea2646970667358221220e6cb5841334b231263149a4f1f2b615c67747d79c5c6894a2990dd0a669e98ab64736f6c63430008140033";

type LOLNFTExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LOLNFTExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LOLNFTExchange__factory extends ContractFactory {
  constructor(...args: LOLNFTExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    _lol: AddressLike,
    _lolToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      initialOwner,
      _lol,
      _lolToken,
      overrides || {}
    );
  }
  override deploy(
    initialOwner: AddressLike,
    _lol: AddressLike,
    _lolToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      initialOwner,
      _lol,
      _lolToken,
      overrides || {}
    ) as Promise<
      LOLNFTExchange & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LOLNFTExchange__factory {
    return super.connect(runner) as LOLNFTExchange__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LOLNFTExchangeInterface {
    return new Interface(_abi) as LOLNFTExchangeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LOLNFTExchange {
    return new Contract(address, _abi, runner) as unknown as LOLNFTExchange;
  }
}
