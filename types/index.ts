export type Tokens = "LOL" | "LOLToken" | "LOLExchange";

export type Networks = "localhost";

export type Config = {
    [key in Tokens]: {
        [key in Networks]: string;
    }
};