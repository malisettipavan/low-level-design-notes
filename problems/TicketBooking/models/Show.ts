import { Movie } from "./Movie";
import { Screen } from "./Screen";

class Show {
    id : string;
    movie : Movie;
    screen : Screen;
    startTime : Date;
    durationInSec : number;

    constructor(id : string, movie : Movie, screen : Screen, startTime : Date, durationInSec : number){
        this.id = id;
        this.movie = movie;
        this.screen = screen;
        this.startTime = startTime;
        this.durationInSec = durationInSec;
    }

    getScreen() : Screen {
        return this.screen;
    }
}

export {Show};