import { randomUUID } from "crypto";
import { Movie } from "../models/Movie";

class MovieService {
    
    movies : Map<string, Movie>;

    constructor(){
        this.movies = new Map<string, Movie>();
    }

    createMovie(movieName : string) : Movie{
        let movieId : string = randomUUID.toString();
        let newMovie : Movie = new Movie(movieId, movieName);
        this.movies.set(movieId, newMovie);
        return newMovie;
    }

    getMovie(movieId : string) : Movie {
        if(!this.movies.has(movieId)){
            // throw exception
        }

        return this.movies.get(movieId)!;
    }

}

export { MovieService };