export type DeviceRequestType = {

    // MediaStreams Mirror
    videoinput?: boolean;
    audioinput?: boolean;
    audiooutput?: boolean;

    // New DataStreams Attributes
    datainput?: boolean;
    dataoutput?: boolean;
}


export type MessageType = {
    data: {
        cmd: string
        data: any
    }
}