export interface UserType {
    uuid: string;
    ws: any;
    auth?: any;
    info?: {
        [key: string]: any;
    }
}