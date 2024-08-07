import Flight from "../../common/interfaces/Flight"

export default function FlightTableData(props: {flights: Flight[]}){
    const flightArray = props.flights.map(o =>{
        return(<tr>
            <td>{o.flightNumber}</td>
            <td>{o.originAirport}</td>
            <td>{o.timeDeparture}</td>
            <td>{o.destinationAirport}</td>
            <td>{o.timeArrival}</td>
            <td>{o.airline}</td>
            <td>{o.pilot.firstName + o.pilot.lastName}</td>
        </tr>)
    });
    return(<tbody>{flightArray}</tbody>)
}