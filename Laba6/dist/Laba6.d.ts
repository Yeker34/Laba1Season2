declare function sealed(constructor: Function): void;
declare function toUpper(target: any, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor;
interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    dateOfBirth: Date;
    document: Documents;
    serieDocument: number;
    numberDocument: number;
    showInfo(): void;
}
declare enum Documents {
    PASSPORT = "\u041F\u0430c\u043F\u043E\u0440\u0442",
    POLIC = "\u041F\u043E\u043B\u0438\u0441",
    BIRTHCERTIFICATE = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",
    STUDENCHESKY = "\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439",
    INTERNATIONALPASSPORT = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442"
}
interface IVehicle {
    mark: string;
    model: string;
    yearOfRelease: number;
    VIN_number: number;
    registrationNumber: number;
    owner: IOwner;
    showInfo(): void;
}
declare class Vehicle implements IVehicle {
    private Mark;
    private Model;
    private YearOfRelease;
    private _VIN_number;
    private RegistrationNumber;
    private Owner;
    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner);
    get mark(): string;
    set mark(mark: string);
    get model(): string;
    set model(model: string);
    get yearOfRelease(): number;
    set yearOfRelease(yearOfRelease: number);
    get VIN_number(): number;
    set VIN_number(VIN_number: number);
    get registrationNumber(): number;
    set registrationNumber(registrationNumber: number);
    get owner(): IOwner;
    set owner(owner: IOwner);
    showInfo(): void;
}
declare class Owner implements IOwner {
    private Surname;
    private Name;
    private Patronumic;
    private DateOfBirth;
    private Document;
    private SerieDocument;
    private NumberDocument;
    constructor(surname: string, name: string, patronymic: string, dateOfBirth: Date, document: Documents, serieDocumnt: number, numberDocument: number);
    get surname(): string;
    set surname(surname: string);
    get name(): string;
    set name(name: string);
    get patronymic(): string;
    set patronymic(patronymic: string);
    get dateOfBirth(): Date;
    set dateOfBirth(dateOfBirth: Date);
    get document(): Documents;
    set document(document: Documents);
    get serieDocument(): number;
    set serieDocument(serieDocument: number);
    get numberDocument(): number;
    set numberDocument(numberDocument: number);
    showInfo(): void;
}
interface ICar extends IVehicle {
    typeOfBody: BodyType;
    classCar: ClassCar;
}
declare class Car extends Vehicle implements ICar {
    private TypeOfBody;
    private ClassCar;
    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, typeOfBody: BodyType, classCar: ClassCar);
    get typeOfBody(): BodyType;
    set typeOfBody(typeOfBody: BodyType);
    get classCar(): ClassCar;
    set classCar(classCar: ClassCar);
    showInfo(): void;
}
declare enum BodyType {
    SEDAN = "\u0421\u0435\u0434\u0430\u043D",
    HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A ",
    KUPE = "\u041A\u0443\u043F\u0435",
    SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
    PICUP = "\u041F\u0438\u043A\u0430\u043F"
}
declare enum ClassCar {
    A = "\u041C\u0438\u043D\u0438-\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
    B = "\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u043E\u043B\u044C",
    C = "\u0421\u0440\u0435\u0434\u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439  \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
    D = "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439  \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
    E = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"
}
declare const owner: IOwner;
declare const car1: ICar;
