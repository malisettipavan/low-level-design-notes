import { Location } from "./Location";
import { Trip } from "./Trip";

class Cab{
    // Each cab will have a unique Id, it's driver and status(currently occupied (or) not)
    id : string;
    driverName : string;
    isAvailable : boolean;

    // Current Location and which trip it is currently on
    currLocation : Location;
    currTrip : Trip;

    constructor(id : string, driverName : string){
        this.id = id;
        this.driverName = driverName;
        this.isAvailable = true; // default
    }

    setLocation(location : Location){
        this.currLocation = location;
    }

    setTrip(trip : Trip){
        this.currTrip = trip;
    }

    setAvailability(newAvailability : boolean){
        this.isAvailable = newAvailability;
    }

    getCurrentTrip() : Trip {
        return this.currTrip;
    }

    toObject() : Object {
        return {
            id : this.id,
            driverName : this.driverName,
            isAvailable : this.isAvailable
        }
    }
}

export {Cab};