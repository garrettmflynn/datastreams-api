export interface UserType {
    uuid: number;
    ws: any;
    auth?: any;
    info?: {
        [key: string]: any;
    }
}