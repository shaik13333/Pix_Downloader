import React, { useState } from "react"
import google from "./Assets/google.svg"
import face from "./Assets/face.svg"
import "./App.css"

export default function Join(){
    let[name, setName] = useState("");
    let[password, setPassword] = useState("");

    function submit(){
       sessionStorage.setItem("name", name)
       sessionStorage.setItem("password", password)

     window.open("/login")
    }
    function name1(e){
        setName(e.target.value)
    }
    function pass1(e){
        setPassword(e.target.value)
    }

    return(
        <>
        <div id="backimg"></div>
        <div id="mainJoin" >
            <h1>SignUp</h1>
            <div id="k"><img  src={google} alt="" style={{height:"24px", width:"24px"}}/><div>Continue with Google</div></div>
            <div id="k"><img id="l" src={face} alt=""  style={{height:"24px", width:"24px"}} /><div>Continue with Facebook</div></div>
            <hr />
            <form onSubmit={submit}>
            <h3>Username</h3>
            <input type="text" placeholder="ex:aneeq12345" onChange={name1} value={name}/>
            <h3>Password</h3>
            <input type="password" value={password} onChange={pass1}/><br />
            <h3>Confirm Password</h3>
            <input type="password" /><br />
            <button type="submit" id="submit">Sign Up</button>
            </form>


        </div>
        </>
    )
}