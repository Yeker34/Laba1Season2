export namespace Transport {
    export interface IOwner{
        surname: string;
        name: string;
        patronymic: string;
        dateOfBirth: Date;
        document: Documents;
        serieDocument: number;
        numberDocument: number;
    
        showInfo(): void;
    }
    export enum Documents {
        PASSPORT = "Паcпорт" ,
        POLIC = "Полис",
        BIRTHCERTIFICATE = "Свидетельство о рождении",
        STUDENCHESKY = "Студенческий",
        INTERNATIONALPASSPORT = "Загранпаспорт"
    }
    export interface IVehicle{
        mark: string;
        model: string;
        yearOfRelease: number;
        VIN_number: number;
        registrationNumber: number;
        owner: IOwner;
        showInfo(): void;
    }
    export class Vehicle implements IVehicle{
        private Mark: string;
        private Model: string;
        private YearOfRelease: number;
        private _VIN_number: number;
        private RegistrationNumber: number;
        private Owner: IOwner;
    
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner){
            this.Mark = mark;
            this.Model = model;
            this.YearOfRelease = yearOfRelease;
            this._VIN_number = VIN_number;
            this.RegistrationNumber = registrationNumber;
            this.Owner = owner;
        }
        get mark(): string {
            return this.Mark;
        }
        set mark(mark: string) {
            this.Mark = mark;
        }
    
        get model(): string {
            return this.Model;
        }
        set model(model: string) {
            this.Model = model;
        }
    
        get yearOfRelease(): number {
            return this.YearOfRelease;
        }
        set yearOfRelease(yearOfRelease: number) {
            this.YearOfRelease = yearOfRelease;
        }
    
        get VIN_number(): number {
            return this._VIN_number;
        }
        set VIN_number(VIN_number: number) {
            this._VIN_number = VIN_number;
        }
    
        get registrationNumber(): number {
            return this.RegistrationNumber;
        }
        set registrationNumber(registrationNumber: number) {
            this.RegistrationNumber = registrationNumber
        }
    
        get owner(): IOwner {
            return this.Owner;
        }
        set owner(owner: IOwner) {
            this.Owner = owner;
        }
    
        showInfo(): void{
            console.log(this.Mark, this.Model, this._VIN_number, this.Owner, this.RegistrationNumber, this.YearOfRelease);
        }
    }
    export class Owner implements IOwner{
        private Surname: string;
        private Name: string;
        private Patronumic: string;
        private DateOfBirth: Date;
        private Document: Documents;
        private SerieDocument: number;
        private NumberDocument: number;
    
        constructor(surname: string, name: string, patronymic: string, dateOfBirth: Date, document: Documents, serieDocumnt: number, numberDocument: number) {
            this.Surname = surname;
            this.Name = name;
            this.Patronumic = patronymic;
            this.DateOfBirth = dateOfBirth;
            this.Document = document;
            this.SerieDocument = serieDocumnt;
            this.NumberDocument = numberDocument;
        }
    
    
        get surname(): string {
            return this.Surname;
        }
        set surname(surname: string) {
            this.Surname = surname;
        }
    
        get name(): string {
            return this.Name;
        }
        set name(name: string) {
            this.Name = name;
        }
    
        get patronymic(): string {
            return this.Patronumic;
        }
        set patronymic(patronymic: string) {
            this.Patronumic = patronymic;
        }
    
        get dateOfBirth(): Date {
            return this.DateOfBirth;
        }
        set dateOfBirth(dateOfBirth: Date) {
            this.DateOfBirth = dateOfBirth;
        }
    
        get document(): Documents {
            return this.Document;
        }
        set document(document: Documents) {
            this.Document = document
        }
    
        get serieDocument(): number {
            return this.SerieDocument;
        }
        set serieDocument(serieDocument: number) {
            this.SerieDocument = serieDocument;
        }
    
        get numberDocument(): number {
            return this.NumberDocument;
        }
        set numberDocument(numberDocument: number) {
            this.NumberDocument = numberDocument;
        }
    
        showInfo(): void {
            console.log(this.Surname, this.Name, this.DateOfBirth, this.Document, this.NumberDocument, this.SerieDocument, this.Patronumic);
        }
    }
    
    export interface ICar extends IVehicle{
        typeOfBody: BodyType;
        classCar: ClassCar;
    }
    export class Car extends Vehicle implements ICar{
    
        private TypeOfBody: BodyType;
        private ClassCar: ClassCar;
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, typeOfBody: BodyType, classCar: ClassCar){
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
            this.TypeOfBody = typeOfBody;
            this.ClassCar = classCar;
        }
        get typeOfBody(): BodyType {
            return this.TypeOfBody;
        }
        set typeOfBody(typeOfBody: BodyType) {
            this.TypeOfBody = typeOfBody;
        }
    
        get classCar(): ClassCar {
            return this.ClassCar;
        }
        set classCar(classCar: ClassCar) {
            this.ClassCar = classCar;
        }
    
        showInfo(){
            console.log(this.TypeOfBody, this.ClassCar, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
        }
    }
    
    export enum BodyType {
        SEDAN = "Седан",
        HATCHBACK = "Хэтчбек ",
        KUPE = "Купе",
        SUV = "Внедорожник",
        PICUP = "Пикап"
    };
    export enum ClassCar {
        A = "Мини-автомобиль",
        B = "Компактный автомоболь",
        C = "Среднеразмерный  автомобиль",
        D = "Представительский  автомобиль",
        E = "Спортивный автомобиль"
    }
    
    export interface IMotorbike extends IVehicle{
        frameType: string;
        forSport: boolean;
    }
    export class Motorbike extends Vehicle implements IMotorbike {
        private FrameType: string;
        private ForSport: boolean;
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, forSport: boolean, frameType: string){
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
            this.ForSport = forSport;
            this.FrameType = frameType;
        }
        get frameType(): string {
            return this.FrameType;
        }
        set frameType(frameType: string) {
            this.FrameType = frameType;
        }
    
        get forSport(): boolean {
            return this.ForSport;
        }
        set forSport(forSport: boolean) {
            this.ForSport = forSport;
        }
    
        showInfo(){
            console.log(this.FrameType, this.ForSport, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
        }
    }
    export interface IVehicleStorage<T extends IVehicle>{
        dateCreate: Date;
        data: T[];
        getAll(): T[];
        save(data: T): void;
    }
    
    export class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
        private readonly DateCreate: Date;
        private Date: T[];
        constructor(){
            this.DateCreate = new Date();
            this.Date = [];
        }
    
        get dateCreate(): Date {
            return this.DateCreate;
        }
    
        get data(): T[] {
            return this.Date;
        }
        save(data: T): void {
            this.Date.push(data);
        }
        getAll(): T[] {
            return this.Date;
        }
    }
}