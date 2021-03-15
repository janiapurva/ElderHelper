import React, { useState } from "react";

export default function SignUpUsers () {
  const [fullName, setfullName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [phone, setPhone] = useState('')
  const [postal, setPostal] = useState('')
  const [belongs_to, setbelongs_to] = useState('')
  
  const handleFullNameChange = evt => {

    setfullName(evt.target.value)

  }

  const handleAgeChange = evt => {

    setAge(evt.target.value)

  }

  const handleEmailChange = evt => {

    setEmail(evt.target.value)

  }
  
  const handlePassChange = evt => {

    setPass(evt.target.value)

  }

  const handlePhoneChange = evt => {

    setPhone(evt.target.value)

  }

  const handlePostalChange = evt => {

    setPostal(evt.target.value)

  }

  const handlebelongs_toChange = evt => {

    setbelongs_to(evt.target.value)

  }

  const onSubmit = evt => {

    evt.preventDefault(); 
    console.log(email, pass)
  }

    
    
  return (
    
    <form onSubmit = {onSubmit}>

    <h3>Register - Users</h3>

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