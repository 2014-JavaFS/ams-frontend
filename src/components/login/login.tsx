import { useState } from "react";
import { useRef } from "react";
import { amsServer } from "../../common/ams-server";


export default function Login(){

    const [status,setStatus] = useState<number>(0);
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    // Check this out

    async function login(){
        
        console.log(emailInput.current?.value)
        console.log(passwordInput.current?.value)
        try{
            // const response = await fetch(`http://localhost:9999/auth?email=${emailInput.current?.value}&password=${passwordInput.current?.value}`, {method: 'POST'})


            // memberId = response.headers.get("memberId")
            // memberType = response.headers.get("memberType")
            
            const axResp = await amsServer.post(`auth?email=${emailInput.current?.value}&password=${passwordInput.current?.value}`)
            console.log(axResp.headers.memberid, axResp.headers.membertype)
            console.log(axResp.status)
            setStatus(axResp.status)
            
        } catch (error){
            console.error(error)
            console.error(status)
        }
    }        
    
    return(<>
             <div className="login-container">
                <input id="emailInput" type="email" placeholder="please enter email" ref={emailInput}/>
                <input id="passwordInput" type="password" placeholder="please enter password" ref={passwordInput}/>
                <button onClick={login}>Login</button>

                {status !== 0 ? 
                    <p>{
                        // ternary operator = conditional ? ifTrue(content) : ifFalse(content)
                        status >= 400 ? 
                        "Login failed due to invalid credentails" : 
                        "Successfully logged in"
                    }</p> :
                    ""
                }
            </div>
    </>);
}
