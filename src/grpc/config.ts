/** Config */
export interface Config {
    endpoint: string;
    cert: Buffer | null;
    pk: Buffer | null;
    certChain: Buffer | null;
    insecure: boolean | null;
}

