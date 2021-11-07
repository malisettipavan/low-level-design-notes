import { randomUUID } from "crypto";
import { Screen } from "../models/Screen";
import { Seat } from "../models/Seat";
import { Theatre } from "../models/Theatre";

class TheatreService {
    
    theatres : Map<string, Theatre>;
    screens : Map<string, Screen>;
    seats : Map<string, Seat>;

    constructor(){
        this.theatres = new Map<string, Theatre>();
        this.screens = new Map<string, Screen>();
        this.seats = new Map<string, Seat>();
    }

    createTheatre(theatreName : string) : Theatre {
        let theatreId : string = randomUUID.toString();
        let newTheatre : Theatre = new Theatre(theatreId, theatreName);
        this.theatres.set(theatreId, newTheatre);
        return newTheatre;
    }

    createScreenInTheatre(screenName : string, theatre : Theatre){
        let screenId : string = randomUUID.toString();
        let newScreen : Screen = new Screen(screenId, screenName, theatre);
        this.screens.set(screenId, newScreen);
        theatre.addScreen(newScreen);
        return newScreen;
    }

    createSeatInScreen(rowId : number, seatNo : number, screen : Screen){
        let seatId : string = randomUUID.toString();
        let newSeat : Seat = new Seat(seatId, rowId, seatNo);
        this.seats.set(seatId, newSeat);
        screen.addSeat(newSeat);
        return newSeat;
    }

    createScreen(screenName : string, theatre : Theatre){
        let screenId : string = randomUUID.toString();
        let newScreen : Screen = new Screen(screenId, screenName, theatre);
        this.screens.set(screenId, newScreen);
        return newScreen;
    }


    getTheatre(theatreId : string) : Theatre {
        if(!this.theatres.has(theatreId)){
            // throw exception
        }

        return this.theatres.get(theatreId)!;
    }

    getScreen(screenId : string) : Screen {
        if(!this.screens.has(screenId)){
            // throw exception
        }

        return this.screens.get(screenId)!;
    }

    getSeat(seatId : string) : Seat {
        if(!this.seats.has(seatId)){
            // throw Exception
        }

        return this.seats.get(seatId)!;
    }

}

export {TheatreService};