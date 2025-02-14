declare let data: number[];
declare function findMinimal(data: number[]): number;
declare let matrix: string[][];
declare function createBooleanMatr(matrix: string[][]): boolean[][];
declare let tuple: [number, number];
declare function checkTuple(tuple: [number, number]): boolean;
declare enum RNK {
    Adenin = "A",
    Guanin = "G",
    Cytosine = "C",
    Uracil = "U"
}
declare let RNK1: RNK;
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function petInfo(pet: Pet): void;
declare class Medicine {
    extractionDate: String;
    sampleType: String;
    patientId: String;
    rnk: RNK;
    constructor(extractionDate: string, sampleType: string, patientId: string, rnk: RNK);
}
declare const med: Medicine;
declare const medJson: string;
