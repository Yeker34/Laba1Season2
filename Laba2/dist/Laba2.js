let data = [-64, 0, 32, 0, -32, 0, 16, 0, -16, 0, 8, 0, -8, 0, 4, 0, -4, 0, 2, 0, -2, 0, 1, 0, -1, 0];
console.log(data);
function findMinimal(data) {
    let minElem = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 0 && data[i] > minElem) {
            minElem = data[i];
        }
    }
    return minElem;
}
console.log(findMinimal(data));
let matrix = [
    ["первый", "два", "тритий"],
    ["четырка", "пятёрочка", "шестой"],
    ["сеееемь", "восем", "девять"]
];
function createBooleanMatr(matrix) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const boolRow = [];
        for (let j = 0; j < data.length; j++) {
            const col = row[j];
            boolRow.push(col.length % 2 !== 0);
        }
        result.push(boolRow);
    }
    return result;
}
console.log(createBooleanMatr(matrix));
let tuple = [25, 34];
function checkTuple(tuple) {
    const [num1, num2] = tuple;
    let sum1 = 0;
    let sum2 = 0;
    const numStr1 = Math.abs(num1).toString();
    for (let i = 0; i < numStr1.length; i++) {
        sum1 += parseInt(numStr1[i]);
    }
    const numStr2 = Math.abs(num2).toString();
    for (let i = 0; i < numStr2.length; i++) {
        sum2 += parseInt(numStr2[i]);
    }
    return sum1 === sum2;
}
console.log(checkTuple(tuple));
var RNK;
(function (RNK) {
    RNK["Adenin"] = "A";
    RNK["Guanin"] = "G";
    RNK["Cytosine"] = "C";
    RNK["Uracil"] = "U";
})(RNK || (RNK = {}));
let RNK1 = RNK.Adenin;
console.log(RNK1);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function petInfo(pet) {
    console.log(pet.name, pet.age);
}
class Medicine {
    constructor(extractionDate, sampleType, patientId, rnk) {
        this.extractionDate = extractionDate;
        this.sampleType = sampleType;
        this.patientId = patientId;
        this.rnk = rnk;
    }
}
const med = new Medicine("01.01.2021", "blood", "007", RNK.Adenin);
const medJson = JSON.stringify(med);
console.log(medJson);
