import { Cab } from "../models/Cab";
import { Location } from "../models/Location";

class CabsManager{
    
    cabs : Record<string, Cab>;

    constructor(){
        this.cabs = {};
    }

    async isCabPresent(cabId : string) : Promise<boolean> {
        // check in hashMap -> if rider already exists
        const matches : string[] = Object.keys(this.cabs).filter((id : string) => (id===cabId));

        return (matches.length>0);
    }

    async createCab(newCab : Cab) : Promise<void> {
        
        const cabAvailable : boolean = await this.isCabPresent(newCab.id);
       
        if(cabAvailable){
            // throw exception - cab already exists
        }

        // Insert new Rider into hashMap
        this.cabs[newCab.id] = newCab;
    }

    async getCab(cabId : string) : Promise<Cab> {
        const cabAvailable : boolean = await this.isCabPresent(cabId);
       
        if(!cabAvailable){
            // throw exception - cab already exists
        }

        return this.cabs[cabId];
    }

    async updateCabLocation(cabId : string, location : Location) : Promise<void> {
        const cabAvailable : boolean = await this.isCabPresent(cabId);

        if(!cabAvailable){
            // throw exception - cab not available
        }

        this.cabs[cabId].setLocation(location);
    }

    async updateCabAvailability(cabId : string, newAvailability : boolean) : Promise<void> {
        const cabAvailable : boolean = await this.isCabPresent(cabId);

        if(!cabAvailable){
            // throw exception - cab not available
        }

        this.cabs[cabId].setAvailability(newAvailability);
    }

    async getCabs(source : Location, distance : number) : Promise<Array<Cab>> {
        let cabsList : Array<Cab> = [];

        // Find all the cabs which are near to source and at a given distance


        return cabsList;
    }

}

export {CabsManager};