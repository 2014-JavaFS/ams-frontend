
import { useState } from "react";
import { amsServer } from "../../common/ams-server";
import FlightTableData from "./flightTableData";

export default function AllFlights(){

    const [flights,setFlights] = useState([]);

    async function findAllFlights(){
        try{
            // const response = await fetch("http://localhost:9999/flights") // default it's a get
            // const data = await response.json()

            const axResp = await amsServer.get("/flights")

            console.log(axResp.headers)
            flights.map(e => console.log(e))

            setFlights(axResp.data)
        } catch(error){
            console.error(error)
        }
    }

    return(<>
        <h1>Welcome to all of our Flights, please search below</h1>
        <button onClick={findAllFlights}>Search Flights</button>

        <table>
            <thead>
                <tr>
                    <th>Flight Number</th>
                    <th>Origin Airport</th>
                    <th>Depature Time</th>
                    <th>Destination Airport</th>
                    <th>Arrival Time</th>
                    <th>Airline</th>
                    <th>Pilot</th>
                </tr>
            </thead>
            {flights === undefined || <FlightTableData flights={flights}></FlightTableData>}
        </table>
    </>);
}