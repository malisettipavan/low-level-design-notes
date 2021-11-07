import { Seat } from "./Seat";
import { Theatre } from "./Theatre";

class Screen{
    id : string;
    name : string;
    theatre : Theatre;

    seats : Array<Seat>;
    
    constructor(id : string, name : string, theatre : Theatre){
        this.id = id;
        this.name = name;
        this.theatre = theatre;
    }

    getSeats() : Array<Seat> {
        return this.seats;
    }

    addSeat(seat : Seat) {
        this.seats.push(seat);
    }

}

export {Screen};