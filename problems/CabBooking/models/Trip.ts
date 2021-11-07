import { Cab } from "./Cab";
import { Location } from "./Location";
import { Rider } from "./Rider";

enum TripStatus {
     IN_PROGRESS,
     FINISHED
}

class Trip {
     // Each Trip will have a Rider, a Cab, trip status, From and To locations, current trip price
     private rider: Rider;
     private cab: Cab;
     private status: TripStatus;
     private price: number;
     private fromLocation: Location;
     private toLocation: Location;

     constructor(rider: Rider, cab: Cab, price: number, fromLocation: Location, toLocation: Location) {
          this.rider = rider;
          this.cab = cab;
          this.price = price;
          this.fromLocation = fromLocation;
          this.toLocation = toLocation;
          this.status = TripStatus.IN_PROGRESS;
     }

     endTrip(): void {
          this.status = TripStatus.FINISHED;
     }

}

export { Trip };