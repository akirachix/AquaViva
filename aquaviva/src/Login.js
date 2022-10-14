import React from "react";
import {useState,setState} from "react";
import "./login.css";
import ocean from "./images/ocean.jpg";
import logo from "./images/logo.png";
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom' 

const Login=()=>{ 
    const [username, setUsername]=useState("");
    const[password, setPassword]=useState("");
    const handlesubmit = ()=>{
            const data ={
              username:username,
              password:password
            }
            alert(JSON.stringify(data))
          }  

    return (
      <div className="container">
        <div className="image-section" >
        <img src= {ocean} alt=""/>
        
        <div className="headings"> 
        <div className="image-logo"> 
           <img src= {logo}  alt="" /> 
        </div>
       
            <h1> AQUA VIVA</h1> 
        </div>
        </div>

        <div className="content">
           <form onSubmit={handlesubmit}>
            <div>
              <label>username</label>
            </div> 
            <div className="row">
               <input type="text" 
               placeholder="at least 15 characters" 
               id="username"
               value={username}
               onChange={(e)=>{setUsername(e.target.value)}} />
               
            </div>

            <div>
              <label>Password</label>
            </div>
            <div className="row">
               <input type="password" placeholder="at least 8 characters" id="password"
               value={password}
               onChange={(e)=>{setPassword(e.target.value)}} />
            </div>

              <p className="password"> <a href="">Forgot Password? </a> </p>
            
           <button type="submit" id="button" > Login </button>
           
           <p className="paragraph">Do not have an Account? <a href="/Signup">Signup </a> </p>
           </form>

        </div>
      </div>
    );
  }
  
  export default Login;