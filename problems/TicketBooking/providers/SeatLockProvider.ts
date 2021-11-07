import { Seat } from "../models/Seat";
import { Show } from "../models/Show";

interface SeatLockProvider {
    
    lockSeats(show : Show, seats : Array<Seat>, user : string) : void;

    unlockSeats(show : Show, seats : Array<Seat>, user : string) : void;

    validateLock(show : Show, seat : Seat, user : string) : boolean;

    getLockedSeats(show : Show) : Array<Seat>;

}

export {SeatLockProvider};