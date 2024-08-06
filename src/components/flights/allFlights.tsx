
import { useState } from "react";
import { amsServer } from "../../common/ams-server";

export default function AllFlights(){

    const [flights,setFlights] = useState();

    async function findAllFlights(){
        try{
            const response = await fetch("http://localhost:9999/flights") // default it's a get
            const data = await response.json()

            const axResp = await amsServer.get("/flights")

            console.log(axResp.headers)
            console.log(data)

            setFlights(data)
        } catch(error){
            console.error(error)
        }
    }

    return(<>
        <h1>Welcome to all of our Flights, please search below</h1>
        <button onClick={findAllFlights}>Search Flights</button>

        <p>{flights === undefined ? <p>Click the button above to see flights!</p> : JSON.stringify(flights)}</p>
    </>);
}