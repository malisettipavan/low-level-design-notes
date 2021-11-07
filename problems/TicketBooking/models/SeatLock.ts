import { Seat } from "./Seat";
import { Show } from "./Show";

class SeatLock {
    seat : Seat;
    show : Show;  // since, we would like to lock the seat of a Screen for particular show
    lockTime : Date;
    timeOutInSec : number;
    lockedBy : string;

    constructor(seat : Seat, show : Show, lockTime : Date, timeOutInSec : number, lockedBy : string){
        this.seat = seat;
        this.show = show;
        this.lockTime = lockTime;
        this.timeOutInSec = timeOutInSec;
        this.lockedBy = lockedBy;
    }

    isLockExpired() : boolean {
        return (this.lockTime.getSeconds() + this.timeOutInSec < new Date().getSeconds());
    }
}

export {SeatLock};