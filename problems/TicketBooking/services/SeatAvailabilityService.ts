import { Seat } from "../models/Seat";
import { Show } from "../models/Show";
import { SeatLockProvider } from "../providers/SeatLockProvider";
import { BookingService } from "./BookingService";

class SeatAvailabilityService {

    bookingService : BookingService;
    seatLockProvider : SeatLockProvider;

    constructor(bookingService : BookingService, seatLockProvider : SeatLockProvider){
        this.bookingService = bookingService;
        this.seatLockProvider = seatLockProvider;
    }

    getUnavailableSeats(show : Show) : Array<Seat> {
        let unavailableSeats : Array<Seat> = this.bookingService.getBookedSeats(show);
        let lockedSeats : Array<Seat> = this.seatLockProvider.getLockedSeats(show);

        unavailableSeats.push(...lockedSeats);
        return unavailableSeats;
    }

    getAllAvailableSeats(show : Show) : Array<Seat> {
        let allSeats : Array<Seat> = show.getScreen().getSeats();
        let unavailableSeats : Array<Seat> = this.getUnavailableSeats(show);
        
        allSeats = allSeats.filter((val, idx) => {
            return (!unavailableSeats.includes(val));
        });

        return allSeats;

    }

}

export {SeatAvailabilityService};