export type DeviceRequestType = {

    // MediaStreams Mirror
    videoinput?: boolean;
    audioinput?: boolean;
    audiooutput?: boolean;

    // New DataStreams Attributes
    eeginput?: boolean;
    emginput?: boolean;
    fnirsinput?: boolean;
}


export type MessageType = {
    data: {
        cmd: string
        data: any
    }
}