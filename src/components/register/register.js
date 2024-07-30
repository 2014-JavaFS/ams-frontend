async function register(){

    const registerMember = {
        firstName: document.getElementById("fnameInput").value,
        lastName: document.getElementById("lnameInput").value,
        email: document.getElementById("emailInput").value,
        password: document.getElementById("passwordInput").value
    }

    const response = await fetch("http://localhost:9999/members", {
        method: "POST",
        body: JSON.stringify(registerMember),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data)

    document.getElementById("registerStatus").innerHTML = JSON.stringify(data)
}