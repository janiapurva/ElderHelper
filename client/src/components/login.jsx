import React, { useState } from "react";

export default function Login () {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleEmailChange = evt => {

    setEmail(evt.target.value)

  }
 
  
  const handlePassChange = evt => {

    setPass(evt.target.value)

  }

  const onSubmit = evt => {

    evt.preventDefault(); 
    console.log(email, pass)
  }
  
    
  return (
    
    <form onSubmit = {onSubmit}>

    <h3>Vagrant Sucks </h3>

    <div className="form-group">
        <label>Email</label>
        <input type = "email" name = "email" onChange ={handleEmailChange} className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type = "password" name = "password" onChange ={handlePassChange} className="form-control" placeholder="Enter password" />
    </div>

    <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>

    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
    <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
    </p>
</form>

  );
    
}
