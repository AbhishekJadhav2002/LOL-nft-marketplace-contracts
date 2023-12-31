/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface LOLVestingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addNewAllocation"
      | "allocation"
      | "available"
      | "claimLOL"
      | "claimed"
      | "duration"
      | "outstanding"
      | "owner"
      | "released"
      | "removeAllocation"
      | "renounceOwnership"
      | "setDuration"
      | "setStartTime"
      | "startTime"
      | "token"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AllocationAdded"
      | "AllocationRemoved"
      | "Claimed"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addNewAllocation",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allocation",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "available",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "claimLOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "outstanding",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "released",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAllocation",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStartTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addNewAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allocation", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimLOL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "outstanding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AllocationAddedEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AllocationRemovedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimedEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface LOLVesting extends BaseContract {
  connect(runner?: ContractRunner | null): LOLVesting;
  waitForDeployment(): Promise<this>;

  interface: LOLVestingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addNewAllocation: TypedContractMethod<
    [recipient: AddressLike, allocation_: BigNumberish],
    [void],
    "nonpayable"
  >;

  allocation: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  available: TypedContractMethod<[address_: AddressLike], [bigint], "view">;

  claimLOL: TypedContractMethod<[], [void], "nonpayable">;

  claimed: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  duration: TypedContractMethod<[], [bigint], "view">;

  outstanding: TypedContractMethod<[address_: AddressLike], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  released: TypedContractMethod<[address_: AddressLike], [bigint], "view">;

  removeAllocation: TypedContractMethod<
    [recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setDuration: TypedContractMethod<
    [duration_: BigNumberish],
    [void],
    "nonpayable"
  >;

  setStartTime: TypedContractMethod<
    [startTime_: BigNumberish],
    [void],
    "nonpayable"
  >;

  startTime: TypedContractMethod<[], [bigint], "view">;

  token: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addNewAllocation"
  ): TypedContractMethod<
    [recipient: AddressLike, allocation_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allocation"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "available"
  ): TypedContractMethod<[address_: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimLOL"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimed"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "duration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "outstanding"
  ): TypedContractMethod<[address_: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "released"
  ): TypedContractMethod<[address_: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeAllocation"
  ): TypedContractMethod<[recipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDuration"
  ): TypedContractMethod<[duration_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setStartTime"
  ): TypedContractMethod<[startTime_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AllocationAdded"
  ): TypedContractEvent<
    AllocationAddedEvent.InputTuple,
    AllocationAddedEvent.OutputTuple,
    AllocationAddedEvent.OutputObject
  >;
  getEvent(
    key: "AllocationRemoved"
  ): TypedContractEvent<
    AllocationRemovedEvent.InputTuple,
    AllocationRemovedEvent.OutputTuple,
    AllocationRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Claimed"
  ): TypedContractEvent<
    ClaimedEvent.InputTuple,
    ClaimedEvent.OutputTuple,
    ClaimedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "AllocationAdded(address,uint256)": TypedContractEvent<
      AllocationAddedEvent.InputTuple,
      AllocationAddedEvent.OutputTuple,
      AllocationAddedEvent.OutputObject
    >;
    AllocationAdded: TypedContractEvent<
      AllocationAddedEvent.InputTuple,
      AllocationAddedEvent.OutputTuple,
      AllocationAddedEvent.OutputObject
    >;

    "AllocationRemoved(address)": TypedContractEvent<
      AllocationRemovedEvent.InputTuple,
      AllocationRemovedEvent.OutputTuple,
      AllocationRemovedEvent.OutputObject
    >;
    AllocationRemoved: TypedContractEvent<
      AllocationRemovedEvent.InputTuple,
      AllocationRemovedEvent.OutputTuple,
      AllocationRemovedEvent.OutputObject
    >;

    "Claimed(address,uint256)": TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;
    Claimed: TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
