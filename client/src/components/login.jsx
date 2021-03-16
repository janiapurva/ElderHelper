import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";

export default function LoginUsers () {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [successfulForm, setSuccessfulForm] = useState(false)


  const handleEmailChange = evt => {

    setEmail(evt.target.value)

  }
  
  const handlePassChange = evt => {

    setPass(evt.target.value)

  }


  const onSubmit = evt => {

    evt.preventDefault(); 

    const checkUser = {

      email_address: email,
      password: pass

    }

    console.log('values from login form', email, pass)
    

    // axios.post('http://localhost:8000/login', {checkUser})
    
    
    axios.post('http://localhost:8000/login', {checkUser})
    .then((res)=> {
      console.log('Successful login')

      //update state on successfull insertion 
      //so that redirect happens
      //setSuccessfulForm(true);
    })
    .catch((err) => {console.log('login error LOGIN JSX: ', err) })
   
  }
    
  if (successfulForm) {
    return <Redirect to='/homeUsers' />
  }

  
  return (
    
    <form onSubmit = {onSubmit}>

    <h3>Login</h3>

   
    <div className="form-group">
        <label>Email</label>
        <input type = "email" name = "email" onChange ={handleEmailChange} className="form-control" placeholder="Enter Email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type = "password" name = "password" onChange ={handlePassChange} className="form-control" placeholder="Enter Password" />
    </div>

    <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
    <p className="forgot-password text-right">
        <a href="/register
        ">Looking to Register?</a>
    </p>
</form>

  );
    
}