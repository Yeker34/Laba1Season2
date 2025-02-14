var Documents;
(function (Documents) {
    Documents["PASSPORT"] = "\u041F\u0430c\u043F\u043E\u0440\u0442";
    Documents["POLIC"] = "\u041F\u043E\u043B\u0438\u0441";
    Documents["BIRTHCERTIFICATE"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
    Documents["STUDENCHESKY"] = "\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439";
    Documents["INTERNATIONALPASSPORT"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
})(Documents || (Documents = {}));
class Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner) {
        this.Mark = mark;
        this.Model = model;
        this.YearOfRelease = yearOfRelease;
        this._VIN_number = VIN_number;
        this.RegistrationNumber = registrationNumber;
        this.Owner = owner;
    }
    get mark() {
        return this.Mark;
    }
    set mark(mark) {
        this.Mark = mark;
    }
    get model() {
        return this.Model;
    }
    set model(model) {
        this.Model = model;
    }
    get yearOfRelease() {
        return this.YearOfRelease;
    }
    set yearOfRelease(yearOfRelease) {
        this.YearOfRelease = yearOfRelease;
    }
    get VIN_number() {
        return this._VIN_number;
    }
    set VIN_number(VIN_number) {
        this._VIN_number = VIN_number;
    }
    get registrationNumber() {
        return this.RegistrationNumber;
    }
    set registrationNumber(registrationNumber) {
        this.RegistrationNumber = registrationNumber;
    }
    get owner() {
        return this.Owner;
    }
    set owner(owner) {
        this.Owner = owner;
    }
    showInfo() {
        console.log(this.Mark, this.Model, this._VIN_number, this.Owner, this.RegistrationNumber, this.YearOfRelease);
    }
}
class Owner {
    constructor(surname, name, patronymic, dateOfBirth, document, serieDocumnt, numberDocument) {
        this.Surname = surname;
        this.Name = name;
        this.Patronumic = patronymic;
        this.DateOfBirth = dateOfBirth;
        this.Document = document;
        this.SerieDocument = serieDocumnt;
        this.NumberDocument = numberDocument;
    }
    get surname() {
        return this.Surname;
    }
    set surname(surname) {
        this.Surname = surname;
    }
    get name() {
        return this.Name;
    }
    set name(name) {
        this.Name = name;
    }
    get patronymic() {
        return this.Patronumic;
    }
    set patronymic(patronymic) {
        this.Patronumic = patronymic;
    }
    get dateOfBirth() {
        return this.DateOfBirth;
    }
    set dateOfBirth(dateOfBirth) {
        this.DateOfBirth = dateOfBirth;
    }
    get document() {
        return this.Document;
    }
    set document(document) {
        this.Document = document;
    }
    get serieDocument() {
        return this.SerieDocument;
    }
    set serieDocument(serieDocument) {
        this.SerieDocument = serieDocument;
    }
    get numberDocument() {
        return this.NumberDocument;
    }
    set numberDocument(numberDocument) {
        this.NumberDocument = numberDocument;
    }
    showInfo() {
        console.log(this.Surname, this.Name, this.DateOfBirth, this.Document, this.NumberDocument, this.SerieDocument, this.Patronumic);
    }
}
class Car extends Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, typeOfBody, classCar) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this.TypeOfBody = typeOfBody;
        this.ClassCar = classCar;
    }
    get typeOfBody() {
        return this.TypeOfBody;
    }
    set typeOfBody(typeOfBody) {
        this.TypeOfBody = typeOfBody;
    }
    get classCar() {
        return this.ClassCar;
    }
    set classCar(classCar) {
        this.ClassCar = classCar;
    }
    showInfo() {
        console.log(this.TypeOfBody, this.ClassCar, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
    }
}
var BodyType;
(function (BodyType) {
    BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A ";
    BodyType["KUPE"] = "\u041A\u0443\u043F\u0435";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["PICUP"] = "\u041F\u0438\u043A\u0430\u043F";
})(BodyType || (BodyType = {}));
;
var ClassCar;
(function (ClassCar) {
    ClassCar["A"] = "\u041C\u0438\u043D\u0438-\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
    ClassCar["B"] = "\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u043E\u043B\u044C";
    ClassCar["C"] = "\u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439  \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
    ClassCar["D"] = "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439  \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
    ClassCar["E"] = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
})(ClassCar || (ClassCar = {}));
class Motorbike extends Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, forSport, frameType) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this.ForSport = forSport;
        this.FrameType = frameType;
    }
    get frameType() {
        return this.FrameType;
    }
    set frameType(frameType) {
        this.FrameType = frameType;
    }
    get forSport() {
        return this.ForSport;
    }
    set forSport(forSport) {
        this.ForSport = forSport;
    }
    showInfo() {
        console.log(this.FrameType, this.ForSport, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
    }
}
class VehicleStorage {
    constructor() {
        this.DateCreate = new Date();
        this.Date = [];
    }
    get dateCreate() {
        return this.DateCreate;
    }
    get data() {
        return this.Date;
    }
    save(data) {
        this.Date.push(data);
    }
    getAll() {
        return this.Date;
    }
}
const owner = new Owner("Андрей", "Андреев", "Андреевич", new Date(), Documents.PASSPORT, 1234, 567890);
const car1 = new Car("Lada", "2110", 1999, 3333, 12345, owner, BodyType.SEDAN, ClassCar.B);
const car2 = new Car("Renault", "Duster", 2015, 3332, 12346, owner, BodyType.SUV, ClassCar.D);
const owner1 = new Owner("Иванов", "Иван", "Егорович", new Date(), Documents.INTERNATIONALPASSPORT, 111111, 111111);
const bike1 = new Motorbike("Harley-Davidson", "Low Rider", 2020, 33333, 4444, owner1, true, "Большой");
const bike2 = new Motorbike("Honda", "VFR 1200", 2011, 33332, 4443, owner1, false, "Средний");
console.log(car1.showInfo());
console.log(car2.showInfo());
console.log(bike1.showInfo());
console.log(bike2.showInfo());
const vehicleStorage = new VehicleStorage();
vehicleStorage.save(car1);
vehicleStorage.save(car2);
vehicleStorage.save(bike1);
vehicleStorage.save(bike2);
console.log(vehicleStorage.getAll());
