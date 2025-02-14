import {Transport} from "./Laba4";
import IOwner = Transport.IOwner;
import Documents = Transport.Documents;
import Owner = Transport.Owner;
import ICar = Transport.ICar;
import Car = Transport.Car;
import BodyType = Transport.BodyType;
import ClassCar = Transport.ClassCar;
import IMotorbike = Transport.IMotorbike;
import Motorbike = Transport.Motorbike;
import IVehicleStorage = Transport.IVehicleStorage;
import IVehicle = Transport.IVehicle;
import VehicleStorage = Transport.VehicleStorage;

const owner: IOwner = new Owner("Андреев", "Андрей", "Андреевич", new Date(), Documents.PASSPORT, 1234, 567890);
const car1: ICar = new Car("Lada", "2110", 1999, 3333, 12345, owner, BodyType.SEDAN, ClassCar.B);
const car2: ICar = new Car("Renault", "Duster", 2015, 3332, 12346, owner, BodyType.SUV, ClassCar.D);

const owner1: IOwner = new Owner("Иванов", "Иван", "Егорович", new Date(), Documents.INTERNATIONALPASSPORT, 111111, 111111);

const bike1: IMotorbike = new Motorbike("Harley-Davidson", "Low Rider", 2020, 33333, 4444, owner1, true, "Большой");
const bike2: IMotorbike = new Motorbike("Honda", "VFR 1200", 2011, 33332, 4443, owner1, false, "Средний");

console.log(car1.showInfo());
console.log(car2.showInfo());
console.log(bike1.showInfo());
console.log(bike2.showInfo());

const vehicleStorage: IVehicleStorage<IVehicle> = new VehicleStorage();

vehicleStorage.save(car1);
vehicleStorage.save(car2);
vehicleStorage.save(bike1);
vehicleStorage.save(bike2);

console.log(vehicleStorage.getAll());