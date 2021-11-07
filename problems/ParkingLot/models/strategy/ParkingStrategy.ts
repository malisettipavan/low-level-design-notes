import { Slot } from "../Slot";

// Strategy which will be used to decide How slots will be used to park the car

// Lets say that, Initially we have 100 slots

// => Now, Parking Strategy will help us find the best Slot available -> eg : 77 slot

// => Now, we remove 77 slot from current slots List

// Just Like a Map -> once, took the data -> delete the entry

interface ParkingStrategy{
    
    // Add a new Slot
    addSlot(slotNumber : number) : void;

    // Remove slot
    removeSlot(slotNumber : number) : void;

    // Method which gives us the Next best free slot
    getNextSlot() : number;

}

export {ParkingStrategy};