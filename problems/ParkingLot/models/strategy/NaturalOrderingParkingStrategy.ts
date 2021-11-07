import { ParkingStrategy } from "./ParkingStrategy";

class NaturalOrderingParkingStrategy implements ParkingStrategy{

    slots : Set<number>;

    constructor(){
        this.slots = new Set<number>();
    }

    addSlot(slotNumber : number) {
        this.slots.add(slotNumber);
    }

    removeSlot(slotNumber : number){
        this.slots.delete(slotNumber);
    }

    getNextSlot() : number {
        
        if(this.slots.size===0){
            // throw exception
        }

        // Find the next available slot
        // Eg : slots = [3,6,8,9]
        // => next best slot is 3 (lesser number .. so, less distance)
        return this.slots.entries().next().value;
    }

}

export {NaturalOrderingParkingStrategy};