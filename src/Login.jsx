import React,{useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

import google from "./Assets/google.svg"
import face from "./Assets/face.svg"
import "./App.css"
export default function Login(){
    let[name, setName] = useState("");
    let[password, setPassword] = useState("");
    // let navigate = useNavigate()

    function submit(){
     let a =   sessionStorage.getItem("name")
      let b =  sessionStorage.getItem("password")
      if(a===name && b===password){
        alert("Login Successfull")
        window.open("/")
      }
      else{
        alert("invalid credentials")
      }
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
        <div id="mainJoin" style={{height:"540px", marginTop:"210px"}} >
            <h1>Login</h1>
            <div id="k"><img  src={google} alt="" style={{height:"24px", width:"24px"}}/><div>Continue with Google</div></div>
            <div id="k"><img id="l" src={face} alt=""  style={{height:"24px", width:"24px"}} /><div>Continue with Facebook</div></div>
            <hr />
            <form action="" onSubmit={submit}>
            <h3>Username</h3>
            <input type="text" placeholder="ex:aneeq12345" onChange={name1} value={name}/>
            <h3>Password</h3>
            <input type="password" onChange={pass1} value={password} /><br />
            <button type="submit" id="submit" >Login</button>
            </form>


        </div>
        </>
    )
}