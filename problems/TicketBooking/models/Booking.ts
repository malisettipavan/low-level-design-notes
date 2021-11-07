import { Seat } from "./Seat";
import { Show } from "./Show";

enum BookingStatus {
    Created = "Created",
    Confirmed = "Confirmed",
    Expired = "Expired"
}

class Booking {
    
    id : string;
    show : Show;
    seatsBooked : Array<Seat>;
    bookingStatus : BookingStatus;
    user : string;

    constructor(id : string, show : Show, seatsBooked : Array<Seat>, user : string){
        this.id = id;
        this.show = show;
        this.seatsBooked = seatsBooked;
        this.user = user;
    }

    getShow() : Show {
        return this.show;
    }

    getSeatsBooked() : Array<Seat> {
        return this.seatsBooked;
    }

    getUser() : string {
        return this.user;
    }

    confirmBooking(){
        if(this.bookingStatus!==BookingStatus.Created){
            // Throw exception
        }

        this.bookingStatus = BookingStatus.Confirmed;
    }

    isBookingConfirmed() : boolean {
        return (this.bookingStatus===BookingStatus.Confirmed);
    }

    expireBooking(){
        if(this.bookingStatus!==BookingStatus.Confirmed){
            // Throw exception
        }

        this.bookingStatus = BookingStatus.Expired;
    }


}

export {Booking, BookingStatus};