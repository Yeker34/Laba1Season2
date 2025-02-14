declare function division(p1: number, p2: number): number;
declare const divisionArrow: (p1: number, p2: number) => number;
declare let first: number;
declare const second: number;
declare let third: number;
declare let fourth: any;
declare let isFifth: boolean;
declare const sixth: string;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
}
declare const data: ToJsonStringify;
declare const jsonStringify: string;
declare const someObject: any;
