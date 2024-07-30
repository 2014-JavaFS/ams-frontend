async function findAllFlights(){
    try{
        const response = await fetch("http://localhost:9999/flights") // default it's a get
        const data = await response.json()
        document.getElementById("flights").innerHTML = JSON.stringify(data);
    } catch(error){
        console.error(error)
    }
}