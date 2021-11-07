// CAB Booking
// => we want to build a cab booking platform to allow a rider to book a cab

// Details
// 1) The location is represented as (x,y) co-ordinate
// 2) Distance b/w two points (x1,y1) and (x2,y2) is sqrt((x1-x2)^2 + (y1-y2)^2)
// 3) Platform has been decided upon maximum distance a driver has to travel to pick up the order
// 4) A cab has only 1 driver
// 5) Sharing of cab is not allowed b/w riders
// 6) There is only single type of cab

// Build an Application that exposes following features to riders and drivers
// 1) Register a rider
// 2) Register a driver/cab
// 3) Update cab's location
// 4) A driver can switch on/off his availability
// 5) A rider can book his cab
// 6) Fetch history of all rides taken by a rider
// 7) End the trip


// function main(){

//     let data : Record<string,number> = {};

//     data["1"] = 3;

//     const res = Object.keys(data);

//     const isPresent = res.filter((id : string) => (id==="2"));

//     console.log('pavan', isPresent);
// }

// main();