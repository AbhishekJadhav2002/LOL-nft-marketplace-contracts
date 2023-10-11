export type Tokens = "LOL" | "LOLToken";

export type Networks = "localhost";

export type Config = {
    [key in Tokens]: {
        [key in Networks]: string;
    }
};