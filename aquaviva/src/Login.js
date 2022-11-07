import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import ocean from "./images/ocean.jpg";
import logo from "./images/logo.png";
import axios from "axios";

const Login= () => {
  const { register,handleSubmit,formState: { errors } } = useForm();

  const onSubmit=(e) => {
    e.preventDefault();
      const user = {
        name: this.state.name
      }
      axios.post('https://aqua-viva.herokuapp.com/api/login', { user })
        .then(res=>{
          console.log(res);
          console.log(res.data);
          window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
        })
    }
 

  return (
    <div className="container">
      <div className="image-section" >
        <img src={ocean} alt="" />

        <div className="headings">
          <div className="image-logo">
            <img src={logo} alt="" />
          </div>

          <h1> AQUA VIVA</h1>
        </div>
      </div>

      <div className="content">
        <form className="loginform" onSubmit={handleSubmit(onSubmit)}>

          <label>username</label>
          <div className="row">
            <input type="text"
              placeholder="at least 15 characters" {...register("username", { required: true })}
              aria-invalid={errors.username ? "true" : "false"} />
            {errors.username?.type === 'required' && <p role="alert" className="errormsg">username is required</p>}
            </div>


          <label>Password</label>
          <div className="row">
            <input type="password" placeholder="at least 8 characters" {...register("password", {
              required: "Password is required", minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })}
              aria-invalid={errors.password ? "true" : "false"} />
            {errors.password?.type === 'required' && <p role="alert" className="errormsg">Password is required</p>}
          </div>

          <p className="password"> <a href="">Forgot Password? </a> </p>

          <button type="submit" id="button"> Login </button>

          <p className="paragraph">Do not have an Account? <a href="/Signup">Signup </a> </p>
        </form>

      </div>
    </div>
  );
}

export default Login;