import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";
import jwt_decode from "jwt-decode";
import MasterNavbar from "./MasterNavbar";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export default function SignUpUsers(props) {
  let history = useHistory();
  const [fullName, setfullName] = useState();
  const [headerName, setheaderName] = useState();
  const [headerId, setheaderId] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [phone, setPhone] = useState();
  const [postal, setPostal] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [successfulForm, setSuccessfulForm] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleHeaderIDChange = (data) => {
    setheaderId(data);
  };

  const handleHeaderNameChange = (data) => {
    setheaderName(data);
  };

  const handleFullNameChange = (evt) => {
    setfullName(evt.target.value);
  };

  const handleAgeChange = (evt) => {
    setAge(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePassChange = (evt) => {
    setPass(evt.target.value);
  };

  const handlePhoneChange = (evt) => {
    setPhone(evt.target.value);
  };

  const handlePostalChange = (evt) => {
    setPostal(evt.target.value);
  };

  const StreetAddress_toChange = (evt) => {
    setStreetAddress(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      full_name: fullName,
      age: age,
      email_address: email,
      password: pass,
      phone_number: phone,
      postal_code: postal,
      street_address: streetAddress,
    };

    if (
      !(fullName || age || email || pass || phone || postal || streetAddress)
    ) {
      setError("Input field cannot be blank.");
      setShow(true);

      return;
    }

    axios
      .post("http://localhost:8000/register", { newUser })

      .then((res) => {
        //update state on successfull insertion
        //so that redirect happens
        console.log(
          "inside front end - register.jsx - consloe log res...want to set token",
          res.data
        );

        if (res.data.error) {
          console.log("error");
          return history.push("/RegisterErrorPage");
        } else {
          console.log("NO error");

          //set headerName with full_name from backend..
          handleHeaderNameChange(res.data.full_name);
          handleHeaderIDChange(res.data.user_id);

          //store token in local storage
          try {
            localStorage.setItem("token", JSON.stringify(res.data));
          } catch (e) {}

          const myUserToken = localStorage.getItem("token");

          if (myUserToken) {
            console.log("token exist", myUserToken);
          } else {
            console.log("token DOESNT  exist");
          }

          setSuccessfulForm(true);
        }
      });
  };

  if (successfulForm) {
    return <Redirect to="/homeUsers" />;
  }

  return (
    <>
      <MasterNavbar headerName={headerName} />

      <form className="elder-login" onSubmit={handleSubmit}>
        {show && (
          <Alert className="alert" variant="danger">
            {" "}
            <h1>{error}</h1>
          </Alert>
        )}
        <h3>Register - Users</h3>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="fullName"
            name="fullName"
            onChange={handleFullNameChange}
            className="form-control"
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="age"
            name="age"
            onChange={handleAgeChange}
            className="form-control"
            placeholder="Enter Age"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handlePassChange}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={handlePhoneChange}
            className="form-control"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="postalCode"
            name="postalCode"
            onChange={handlePostalChange}
            className="form-control"
            placeholder="Enter Postal Code"
          />
        </div>

        <div className="form-group">
          <label>Street Address:</label>
          <input
            type="street_address"
            name="street_address"
            onChange={StreetAddress_toChange}
            className="form-control"
            placeholder="Street Address"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          <a
            href="/login
        "
          >
            Looking to Login?
          </a>
        </p>
      </form>
    </>
  );
}
