import React from "react";
import react, { useEffect, useState } from "react";
import "./signup.css";
import ocean from "./images/ocean.jpg";
import logo from "./images/logo.png";
import {Route, Link, BrowserRouter as Router } from 'react-router-dom'
 
const SignUp=()=>{
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
 
   const handleInputChange = (e) => {
     const {id , value} = e.target;
     if(id === "username"){
         setUsername(value);
     }
     if(id === "email"){
         setEmail(value);
     }
     if(id === "password"){
         setPassword(value);
     }
     if(id === "confirmPassword"){
         setConfirmPassword(value);
     }
 
 }
 
 const handleSubmit  = () => {
     console.log(username,email,password,confirmPassword);
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
          <form className="data">
           <div>
             <label>Username</label>
           </div>
           <div className="row">
              <input type="text"  placeholder=""  value={username}
              onChange = {(e) => handleInputChange(e)} id="username" />
           </div>
        
 
           <div>
             <label>Email</label>
           </div>
           <div className="row">
              <input type="text" placeholder="" value={email}
                id="email" onChange = {(e) => handleInputChange(e)} />
           </div>
 
           <div>
             <label>Password</label>
           </div>
           <div className="row">
              <input type="password" placeholder="password" value={password}
               id="password" onChange = {(e) => handleInputChange(e)} />
           </div>
 
           <div>
             <label>Confirm Password</label>
           </div>
           <div className="row">
              <input type="password" placeholder="confirmpassword" value={confirmPassword}
              id="confirmPassword" onChange = {(e) => handleInputChange(e)}
                />
           </div>
           <div>
               <button type="submit" id="button" onClick={()=>handleSubmit()}>SignUp</button>
               <p className="paragraph">Already have an Account? <a href="/Login">Login </a> </p>
           </div>
        
          </form>
 
       </div>
     </div>
   );
 }
  export default SignUp;