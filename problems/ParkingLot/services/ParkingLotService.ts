import { ParkingLot } from "../models/ParkingLot";
import { Slot } from "../models/Slot";
import { ParkingStrategy } from "../models/strategy/ParkingStrategy";

class ParkingLotService {
    
    parkingStrategy : ParkingStrategy;
    parkingLot : ParkingLot;

    constructor(parkingLot : ParkingLot, parkingStrategy : ParkingStrategy){
        this.parkingLot = parkingLot;
        this.parkingStrategy = parkingStrategy;
        for(let i=0; i<this.parkingLot.getCapacity(); i++){
            this.parkingStrategy.addSlot(i);
        }
    }
    
    validateParkingLotExists() : void{
        if(this.parkingLot===undefined){
            // throw Exception
        }
    }

    park(car : Car) : number {
        this.validateParkingLotExists();

        // Find the next best slot for the car
        let nextFreeSlot : number = this.parkingStrategy.getNextSlot();
        this.parkingLot.park(nextFreeSlot, car);
        this.parkingStrategy.removeSlot(nextFreeSlot);
        return nextFreeSlot;
    }

    makeSlotFree(slotNumber : number) : void {
        this.validateParkingLotExists();

        this.parkingLot.makeSlotFree(slotNumber);
        this.parkingStrategy.addSlot(slotNumber);
    }

    getOccupiedSlots() : Array<Slot> {
        let occupiedSlots : Array<Slot> = [];
        let allSlots : Record<number, Slot> = this.parkingLot.getSlots();
        
        Object.keys(allSlots).map(Number).map((id : number) => {
            if(!allSlots[id].isSlotFree()){
                occupiedSlots.push(allSlots[id]);
            }
        });

        return occupiedSlots;
    }

    getSlotsForColor(color : string) : Array<Slot> {
        let occupiedSlots : Array<Slot> = [];
        
        // Logic to find the cars of given color

        return occupiedSlots;
    }

}

export {ParkingLotService};