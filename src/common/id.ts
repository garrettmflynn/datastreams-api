import { v4 as uuid } from 'uuid';

declare global {
    interface Crypto {
      randomUUID: () => string;
    }
}

export const randomUUID = () => {

    // // Use Crypto API
    if (globalThis.crypto) return globalThis.crypto.randomUUID()

    // // Or Generate our UUID
    else return uuid()
}