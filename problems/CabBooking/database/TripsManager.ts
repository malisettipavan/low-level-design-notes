import { Cab } from "../models/Cab";
import { Location } from "../models/Location";
import { Rider } from "../models/Rider";
import { Trip } from "../models/Trip";
import { CabsManager } from "./CabsManager";
import { RidersManager } from "./RidersManager";

class TripsManager{
    
    cabsManager : CabsManager;
    ridersManager : RidersManager;
    trips : Record<string,Array<Trip>>;

    constructor(cabsManager : CabsManager, ridersManager : RidersManager){
        this.cabsManager = cabsManager;
        this.ridersManager = ridersManager;
        this.trips = {};
    }
    
    async createTrip(rider : Rider, sourceloc : Location, destloc : Location) : Promise<void> {
        // Logic to create a new Trip
    }

    async tripsHistory(rider : Rider) : Promise<Array<Trip>> {
        // check whether there are any trips related to current rider

        return this.trips[rider.id];
    }

    async endTrip(cab : Cab) : Promise<void> {
        if(cab.getCurrentTrip()===undefined){
            // throw exception => there is no trip for this cab
        }

        cab.getCurrentTrip().endTrip();
        
        // set current trip of cap to null
    }

}

export { TripsManager};