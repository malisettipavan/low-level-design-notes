import { randomUUID } from "crypto";
import { Movie } from "../models/Movie";
import { Screen } from "../models/Screen";
import { Show } from "../models/Show";

class ShowService {
    
    shows : Map<string, Show>;

    constructor(){
        this.shows = new Map<string, Show>();
    }

    createShow(movie : Movie, screen : Screen, startTime : Date, durationInSec : number) : Show {
        
        let showId : string = randomUUID.toString();
        let show : Show = new Show(showId, movie, screen, startTime, durationInSec);
        this.shows.set(showId, show);
        return show;
        
    }

    getShowsForScreen(screen : Screen) : Array<Show> {
        let res : Array<Show> = [];
        
        for(let [key, value] of this.shows){
            if(value.getScreen()===screen){
                res.push(value);
            }
        }

        return res;
    }

    getShow(showId : string) : Show {
        if(!this.shows.has(showId)){
            // throw exception
        }

        return this.shows.get(showId)!;
    }

}

export {ShowService};