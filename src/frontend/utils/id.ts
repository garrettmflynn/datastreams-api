import { uiid } from '@giveback007/util-lib';

export const randomUUID = () => {

    // // Use Crypto API
    // if (window.crypto) return window.crypto.randomUUID()

    // // Or Generate our UUID
    // else 
    return uiid()
}