import { Car } from "./Car";

class Slot{
    // A place where a car can be parked
    // => A parking Lot will have many slots

    // Slot should have it's number, car info if it is blocked
    slotNumber : number;
    parkedCar : Car | null;

    constructor(slotNumber : number){
        this.slotNumber = slotNumber;
    }

    getSlot() : Slot {

    }

    getSlotNumber() : number {
        return this.slotNumber;
    }

    getParkedCar() : Car | null {
        return this.parkedCar;
    }

    isSlotFree() : boolean {
        return (this.parkedCar === null);
    }

    assignCar(car : Car) : void {
        this.parkedCar = car;
    }

    unassignCar() : void {
        this.parkedCar = null;
    }

}

export {Slot};