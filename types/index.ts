export type Tokens = "LOL" | "LOLToken" | "LOLExchange" | "LOLNFTExchange";

export type Networks = "localhost" | "sepolia" | "mainnet";

export type Config = {
    [key in Tokens]: {
        [key in Networks]: string;
    }
};