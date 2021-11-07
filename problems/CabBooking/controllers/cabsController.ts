import { CabsManager } from "../database/CabsManager";
import { TripsManager } from "../database/TripsManager";
import { Cab } from "../models/Cab";
import { Location } from "../models/Location";
import { PostResponse } from "../models/PostResponse";

class CabsController{
    
    cabsManager : CabsManager;
    tripsManager : TripsManager;

    constructor(cabsManager : CabsManager, tripsManager : TripsManager){
        this.cabsManager = cabsManager;
        this.tripsManager = tripsManager;
    }
    
    async registerCab(cabId : string, driverName : string) : Promise<PostResponse> {
        await this.cabsManager.createCab(new Cab(cabId, driverName));
        return PostResponse.ok("");
    }

    async updateCabLocation(cabId : string, locX : number, locY : number) : Promise<PostResponse> {
        await this.cabsManager.updateCabLocation(cabId, new Location(locX, locY));
        return PostResponse.ok("");
    }

    async updateCabAvailability(cabId : string, newAvailability : boolean) : Promise<PostResponse> {
        await this.cabsManager.updateCabAvailability(cabId, newAvailability);
        return PostResponse.ok("");
    }

    async endTrip(cabId : string) : Promise<PostResponse> {
        await this.tripsManager.endTrip(await this.cabsManager.getCab(cabId));
        return PostResponse.ok("");
    }
}

export {CabsController};