export type Tokens = "LOL" | "LOLToken" | "LOLExchange" | "LOLNFTExchange" | "LOLVesting";

export type Networks = "localhost" | "sepolia" | "mainnet";

export type Config = {
    [key in Tokens]: {
        [key in Networks]: string;
    }
};