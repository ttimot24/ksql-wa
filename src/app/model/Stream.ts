export interface Stream {

    type: string;
    name: string;
    topic: string;
    keyFormat: string;
    valueFormat: string;
    isWindowed: boolean;

}