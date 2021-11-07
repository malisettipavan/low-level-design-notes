import { Seat } from "../models/Seat";
import { SeatLock } from "../models/SeatLock";
import { Show } from "../models/Show";
import { SeatLockProvider } from "./SeatLockProvider";

class InMemorySeatLockProvider implements SeatLockProvider{
    
    locks : Map<Show, Map<Seat, SeatLock>>;
    lockTimeOut : number;

    constructor(lockTimeOut : number){
        this.lockTimeOut = lockTimeOut;
        this.locks = new Map<Show, Map<Seat, SeatLock>>();
    }
    
    lockSeat(show : Show, seat : Seat, user : string){
        
        // If there are no seats locked for the given show
        if(!this.locks.has(show)){
            // create a new entry
            this.locks.set(show, new Map<Seat, SeatLock>());
        }

        let lock : SeatLock = new SeatLock(seat, show, new Date(), this.lockTimeOut, user);
        this.locks.get(show)?.set(seat, lock);
    }

    isSeatLocked(show : Show, seat : Seat) : boolean {
        return (this.locks.has(show) && this.locks.get(show)?.has(seat) && !this.locks.get(show)?.get(seat)?.isLockExpired())!;
    }

    lockSeats(show : Show, seats : Array<Seat>, user : string) {
        
        // Check if all the given seats are unlocked
        for(let seat of seats){
            if(this.isSeatLocked(show, seat)){
                // if seat is already locked
                // throw Exception
            }
        }
        
        for(let seat  of seats){
            this.lockSeat(show, seat, user);
        }

    }

    // Validates lock
    validateLock(show : Show, seat : Seat, user : string) {
        return (this.isSeatLocked(show, seat) && (this.locks.get(show)?.get(seat)?.lockedBy===user));
    }

    unlockSeat(show : Show, seat : Seat) {
        if(!this.locks.has(show)) return;

        this.locks.get(show)?.delete(seat);
    }


    unlockSeats(show : Show, seats : Array<Seat>, user : string){
        for(let seat of seats){
            // ensures that such that the same user is trying to unlock it
            if(this.validateLock(show, seat, user)){
                this.unlockSeat(show, seat);
            }
        }
    }

    getLockedSeats(show : Show) : Array<Seat> {
        let lockedSeats : Array<Seat> = [];
        if(!this.locks.has(show)){
            return lockedSeats;
        }

        for(let [key, value] of this.locks.get(show)!){
            if(this.isSeatLocked(show, key)){
                lockedSeats.push(key);
            }
        }

        return lockedSeats;
    }


}

export {InMemorySeatLockProvider};