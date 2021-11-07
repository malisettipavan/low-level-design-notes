import { Rider } from "../models/Rider";

class RidersManager {
    
    // HashMap to store Riders
    riders : Record<string,Rider>;

    constructor(){
        this.riders = {};
    }

    async createRider(newRider : Rider) : Promise<void> {
        
        // check in hashMap -> if rider already exists
        const riderIDs : string[] = Object.keys(this.riders);
        const matches : string[] = riderIDs.filter((id : string) => (id===newRider.id));

        if(matches.length>0){
            // throw exception - rider already exists
        }
        
        // Insert new Rider into hashMap
        this.riders[newRider.id] = newRider;

    }

    async getRider(riderId : string) : Promise<Rider> {
        
        // check in hashMap -> if rider already exists
        const riderIDs : string[] = Object.keys(this.riders);
        const matches : string[] = riderIDs.filter((id : string) => (id===riderId));

        if(matches.length==0){
            // throw Exception - rider doesnot exists
        }

        return this.riders[riderId];
    }

}

export {RidersManager};