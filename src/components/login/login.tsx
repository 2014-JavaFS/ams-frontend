import { useState } from "react";
import { useRef } from "react";
import { amsServer } from "../../common/ams-server";


export default function Login(){
    let memberId;
    let memberType;

    const [status,booBoo] = useState<number | String | undefined>(0);
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    // Check this out
    
    function anotherfunction(){
        return "Hi"
    }

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
            if(axResp.status > 200 || axResp.status < 299 )
                booBoo(anotherfunction())
            else if (axResp.status > 300 || axResp.status < 399 )
                booBoo(12345)
            console.log(status)

            
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
