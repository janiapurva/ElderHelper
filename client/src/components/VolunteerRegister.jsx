import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";
import jwt_decode from "jwt-decode";
import MasterNavbar from "./MasterNavbar";

export default function SignUpUsers(props) {
  const [fullName, setfullName] = useState();
  const [headerName, setheaderName] = useState();
  const [headerId, setheaderId] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [phone, setPhone] = useState();
  const [postal, setPostal] = useState();
  const [available, setAvailable] = useState();
  const [special_skills, setSpecialSkills] = useState();
  const [successfulForm, setSuccessfulForm] = useState(false);

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

  const handleAvailableChange = (evt) => {
    setAvailable(evt.target.value);
  };
  const handleSpecialSkillsChange = (evt) => {
    setSpecialSkills(evt.target.value);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      full_name: fullName,
      age: age,
      email_address: email,
      password: pass,
      phone_number: phone,
      postal_code: postal,
      available: available,
      special_skills: special_skills,
    };

    axios
      .post("http://localhost:8000/volunteerRegister", { newUser })

      .then((res) => {
        //update state on successfull insertion
        //so that redirect happens
        console.log(
          "inside front end - signUpUsers.js - consloe log res...want to set token",
          res.data
        );

        //set headerName with full_name from backend..
        handleHeaderNameChange(res.data.full_name);
        handleHeaderIDChange(res.data.user_id);

        //store token in local storage
        try {
          localStorage.setItem("token", JSON.stringify(res.data));
        } catch (e) {}

        //check token exists
        const myUserToken = localStorage.getItem("token");

        if (myUserToken) {
          console.log("token exist", myUserToken);
        } else {
          console.log("token DOESNT  exist");
        }

        setSuccessfulForm(true);
      });
  };

  if (successfulForm) {
    return <Redirect to="/homeVolunteerUsers" />;
  }

  return (
    <>
      <MasterNavbar headerName={headerName} />

      <form className="volunteer-register" onSubmit={onSubmit}>
        <h3>Sign up- Volunteer</h3>

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
            type="phoneNumber"
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
          <label>Available</label>
          <input
            type="available"
            name="available"
            onChange={handleAvailableChange}
            className="form-control"
            placeholder="available!"
          />
        </div>
        <div className="form-group">
          <label>Special Skills</label>
          <input
            type="special_skills"
            name="special_skills"
            onChange={handleSpecialSkillsChange}
            className="form-control"
            placeholder="Special Skills"
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
