console.log("Hellow orld")
function division(p1: number, p2: number) {
    return p1%p2;
}
const divisionArrow = (p1: number, p2:number) => {return p1%p2;};
let first: number;
const second: number = 20;
let third = 777;
let fourth: any = "hello";
let isFifth: boolean = true;
const sixth: string = "шерсть.";
interface Entity {
    id: number;
    }
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
    }
const data: ToJsonStringify = {
    id: 6,
    e1: null,
    e2: 28,
    
    }
const jsonStringify: string = JSON.stringify(data);
console.log(jsonStringify);
const someObject = JSON.parse(jsonStringify);
console.log(someObject);