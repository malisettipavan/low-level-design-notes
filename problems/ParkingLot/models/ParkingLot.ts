import { Car } from "./Car";
import { Slot } from "./Slot";

class ParkingLot {

    // A parking Lot will have multiple Slots
    
    // Here, we just think that - Atmost we can have MAX_CAPACITY parking Slots
    // => Since, during initialisation of Parking lot, we have to create Parking slots
    // => And this will not be efficient

    // So, what we do is -> when we received getSlot() request 
    //  => if the slotNumber is within our capacity limits, we create a new Slot there itself and insert it into Record

    static MAX_CAPACITY : number = 10000;
    capacity : number;
    slots : Record<number, Slot>;

    constructor(capacity : number){
        if(capacity<=0 || capacity>ParkingLot.MAX_CAPACITY){
            // throw Exception
        }

        this.capacity = capacity;
        this.slots = {};
    }

    // Get Capacity
    getCapacity() : number {
        return this.capacity;
    }

    // Get Slots
    getSlots() : Record<number, Slot> {
        return this.slots;
    }

    // Get information on any particular parking Slot
    getSlot(slotNumber : number) : Slot {

        if(slotNumber<=0 || slotNumber>this.capacity){
            // throw exception
        }

        // Check whether there is a slot with given slotNumber
        const res = Object.keys(this.slots).map(Number).filter((num) => (num===slotNumber));

        if(res.length===0){
            // If there is no slot with given slotnumber => Create one
            this.slots[slotNumber] = new Slot(slotNumber);
        }

        return this.slots[slotNumber];
    }

    // Park car to a slot => Assign Car to a parking Slot
    park(slotNumber : number, car : Car) : Slot {
        let currSlot : Slot = this.getSlot(slotNumber);
        if(!currSlot.isSlotFree()){
            // throw exception
        }

        // Assign car
        currSlot.assignCar(car);
        return currSlot;
    }

    // Remove Car from parking Slot
    makeSlotFree(slotNumber : number) {
        let currSlot : Slot = this.getSlot(slotNumber);
        currSlot.unassignCar();
        return currSlot;
    }

}

export {ParkingLot};