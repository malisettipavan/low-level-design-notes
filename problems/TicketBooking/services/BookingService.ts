import { randomUUID } from "crypto";
import { Booking, BookingStatus } from "../models/Booking";
import { Seat } from "../models/Seat";
import { Show } from "../models/Show";
import { SeatLockProvider } from "../providers/SeatLockProvider";

class BookingService {
   
    seatLockProvider : SeatLockProvider;
    bookings : Map<string, Booking>;

    constructor(seatLockProvider : SeatLockProvider){
        this.seatLockProvider = seatLockProvider;
        this.bookings = new Map<string, Booking>();
    }
    
    getBooking(bookingId : string) {
        if(!this.bookings.has(bookingId)){
            // throw exception
        }

        return this.bookings.get(bookingId);
    }

    getAllBookings(show : Show) : Array<Booking> {
        let allBookings : Array<Booking> = [];

        for(let [key, value] of this.bookings){
            if(value.getShow()===show){
                allBookings.push(value);
            }
        }

        return allBookings;
    }

    getBookedSeats(show : Show) : Array<Seat> {
        let bookedSeats : Array<Seat> = [];
        
        let allBookingForGivenShow : Array<Booking> = this.getAllBookings(show);

        allBookingForGivenShow.map((booking : Booking) => {
            if(booking.bookingStatus === BookingStatus.Confirmed){
                bookedSeats.push(...booking.getSeatsBooked());
            }
        })

        return bookedSeats;
    }


    isAnySeatAlreadyBooked(show : Show, seats : Array<Seat>) : boolean {
        let bookedSeats : Array<Seat> = this.getBookedSeats(show);
        for(let seat of seats){
            if(bookedSeats.includes(seat)){
                return true;
            }
        }

        return false;
    }

    createBooking(user : string, show : Show, seats : Array<Seat>){
        
        // check if the seat is already booked
        if(this.isAnySeatAlreadyBooked(show, seats)){
            // throw Exception
        }

        this.seatLockProvider.lockSeats(show, seats, user);
        let bookingId : string = randomUUID.toString();
        let newBooking : Booking = new Booking(bookingId, show, seats, user);
        this.bookings.set(bookingId, newBooking);
        return newBooking;
    }


    confirmBooking(booking : Booking, user : string) {
        
        if(booking.getUser() !== user){
            // throw Exception
        }

        let bookedSeats : Array<Seat> = booking.getSeatsBooked();

        for(let seat of bookedSeats){
            // if there is no lock on the seat
            if(!this.seatLockProvider.validateLock(booking.getShow(), seat, user)){
                // throw exception
            }
        }

        booking.confirmBooking();

    }


}

export {BookingService};