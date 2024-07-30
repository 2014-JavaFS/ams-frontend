
// http://localhost:8080/auth?email=tester7@mail.com&password=pass123
const url = "http://localhost:9999/auth"
// let email = "tester7@mail.com"
// let password = "pass123"
let memberId;
let memberType;

// ECMASCRIPT 6 - async/await syntax

async function login(){
    const emailDOM = document.getElementById("emailInput").value;
    const passwordDOM = document.getElementById("passwordInput").value;

    console.log(emailDOM)
    console.log(passwordDOM)
    try{
        const response = await fetch(`${url}?email=${emailDOM}&password=${passwordDOM}`, {method: 'POST'})

        memberId = response.headers.get("memberId")
        memberType = response.headers.get("memberType")
        console.log(memberId, memberType)

        if(response.status >= 400){
            document.getElementById("loginStatus").innerHTML = "Login failed due to invalid credentails"
        } else {
            document.getElementById("loginStatus").innerHTML = "Successfully logged in";
        }
    } catch (error){
        console.error(error)
    }
    /* Fetch-THEN Syntax
    // fetch is defaulted to get requests
    // fetch returns a Promise (object) --> THIS WILL RETURN INFORMATION at some point
    fetch(`${url}?email=${emailDOM}&password=${passwordDOM}`, {method: 'POST'}) // url, an object containing things like HTTP Request method, Header infortiom
    .then(response => {
        memberId = response.headers.get("memberId")
        memberType = response.headers.get("memberType")
        console.log(memberId, memberType)
    })
    .catch((error) => console.error(error)) // catch - Higher Order, arrow functions - Anonymous callback
    */
}