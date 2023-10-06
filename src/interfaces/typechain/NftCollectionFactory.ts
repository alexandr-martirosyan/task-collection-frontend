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
} from "./common";

export interface NftCollectionFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "createCollection" | "mintToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "CollectionCreated" | "TokenMinted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createCollection",
    values: [string, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintToken",
    values: [AddressLike, AddressLike, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintToken", data: BytesLike): Result;
}

export namespace CollectionCreatedEvent {
  export type InputTuple = [
    collection: AddressLike,
    name: string,
    symbol: string
  ];
  export type OutputTuple = [collection: string, name: string, symbol: string];
  export interface OutputObject {
    collection: string;
    name: string;
    symbol: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenMintedEvent {
  export type InputTuple = [
    collection: AddressLike,
    recipient: AddressLike,
    tokenId: BigNumberish,
    tokenURI: string
  ];
  export type OutputTuple = [
    collection: string,
    recipient: string,
    tokenId: bigint,
    tokenURI: string
  ];
  export interface OutputObject {
    collection: string;
    recipient: string;
    tokenId: bigint;
    tokenURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NftCollectionFactory extends BaseContract {
  connect(runner?: ContractRunner | null): NftCollectionFactory;
  waitForDeployment(): Promise<this>;

  interface: NftCollectionFactoryInterface;

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

  createCollection: TypedContractMethod<
    [name_: string, symbol_: string, collectionOwner_: AddressLike],
    [void],
    "nonpayable"
  >;

  mintToken: TypedContractMethod<
    [
      collection_: AddressLike,
      to_: AddressLike,
      tokenId_: BigNumberish,
      tokenURI_: string
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createCollection"
  ): TypedContractMethod<
    [name_: string, symbol_: string, collectionOwner_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintToken"
  ): TypedContractMethod<
    [
      collection_: AddressLike,
      to_: AddressLike,
      tokenId_: BigNumberish,
      tokenURI_: string
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CollectionCreated"
  ): TypedContractEvent<
    CollectionCreatedEvent.InputTuple,
    CollectionCreatedEvent.OutputTuple,
    CollectionCreatedEvent.OutputObject
  >;
  getEvent(
    key: "TokenMinted"
  ): TypedContractEvent<
    TokenMintedEvent.InputTuple,
    TokenMintedEvent.OutputTuple,
    TokenMintedEvent.OutputObject
  >;

  filters: {
    "CollectionCreated(address,string,string)": TypedContractEvent<
      CollectionCreatedEvent.InputTuple,
      CollectionCreatedEvent.OutputTuple,
      CollectionCreatedEvent.OutputObject
    >;
    CollectionCreated: TypedContractEvent<
      CollectionCreatedEvent.InputTuple,
      CollectionCreatedEvent.OutputTuple,
      CollectionCreatedEvent.OutputObject
    >;

    "TokenMinted(address,address,uint256,string)": TypedContractEvent<
      TokenMintedEvent.InputTuple,
      TokenMintedEvent.OutputTuple,
      TokenMintedEvent.OutputObject
    >;
    TokenMinted: TypedContractEvent<
      TokenMintedEvent.InputTuple,
      TokenMintedEvent.OutputTuple,
      TokenMintedEvent.OutputObject
    >;
  };
}
