import Pilot from "./Pilot";

export default interface Flight{
    flightNumber:number,
    originAirport:string,
    destinationAirport:string,
    timeDeparture:string,
    timeArrival:string,
    seatCount:number,
    pilot:Pilot,
    airline:number
}