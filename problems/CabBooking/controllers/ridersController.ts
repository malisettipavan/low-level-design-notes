import { RidersManager } from "../database/RidersManager";
import { TripsManager } from "../database/TripsManager";
import { Location } from "../models/Location";
import { PostResponse } from "../models/PostResponse";
import { Rider } from "../models/Rider";
import { Trip } from "../models/Trip";

class RidersController{
    ridersManager : RidersManager;
    tripsManager : TripsManager;

    constructor(ridersManager : RidersManager, tripsManager : TripsManager){
        this.ridersManager = ridersManager;
        this.tripsManager = tripsManager;
    }

    async registerRider(riderId : string, riderName : string) : Promise<PostResponse> {
        await this.ridersManager.createRider(new Rider(riderId, riderName));
        return PostResponse.ok("");
    }

    async bookCab(riderId : string, sourceX : number, sourceY : number, destX : number, destY : number) : Promise<PostResponse> {
        
        await this.tripsManager.createTrip(await this.ridersManager.getRider(riderId), new Location(sourceX, sourceY), new Location(destX, destY));
        
        return PostResponse.ok("");
    }

    async fetchTripsHistory(riderId : string) : Promise<PostResponse> {
        let trips : Array<Trip> = [];

        trips = await this.tripsManager.tripsHistory(await this.ridersManager.getRider(riderId));

        return PostResponse.ok(trips);
    }
}

export {RidersController};