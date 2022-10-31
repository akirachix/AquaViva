import React from "react";
import { useForm } from "react-hook-form";
import "./signup.css";
import ocean from "./images/ocean.jpg";
import logo from "./images/logo.png";


const SignUp = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
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
        <form className="data" onSubmit={handleSubmit(onSubmit)}>

          <label>Username</label>
          <div className="row">
            <input type="text" placeholder=""  {...register("username", { required: true })}
              aria-invalid={errors.username ? "true" : "false"} />
            {errors.username?.type === 'required' && <p role="alert" className="errormsg">username is required</p>}
          </div>
_
          <label>Email</label>
          <div className="row">
            <input type="text" placeholder="" {...register("email", {
              required: "Email Address is required", pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
              aria-invalid={errors.email ? "true" : "false"} />
            {/* {errors.email?.type === 'required' && <p role="alert" className="errormsg">Email is required</p>} */}
            {errors.email && <p className="errormsg">{errors.email.message}</p>}
          </div>

          <div>
            <label>Password</label>
          </div>
          <div className="row">
            <input type="password" placeholder="password" {...register("password", {
              required: "Password is required", minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })}
              aria-invalid={errors.password ? "true" : "false"} />
            {/* {errors.password?.type === 'required' && <p role="alert" className="errormsg">Password is required</p>} */}
            {errors.password && <p className="errormsg">{errors.password.message}</p>}
          </div>

          <div>
            <label>Confirm Password</label>
          </div>
          <div className="row">
            <input type="password" placeholder="confirmpassword"  {...register("confirmPassword", { required: "ConfirmPassword is required" })}
              aria-invalid={errors.confirmPassword ? "true" : "false"} />
            {/* {errors.confirmPassword?.type === 'required' && <p role="alert" className="errormsg">confirmPassword is required</p>} */}
            {errors.confirmPassword && <p className="errormsg">{errors.confirmPassword.message}</p>}
          </div>
          <div>
            <button type="submit" id="button" >SignUp</button>
            <p className="paragraph">Already have an Account? <a href="/Login">Login </a> </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;

