import React, { useState } from "react";
import SignIn from "./login";
import SignUp from "./register";
import VolunteerSignUp from "./VolunteerRegister";
import VolunteerSignIn from "./VolunteerLogin";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MasterNavbar from "./MasterNavbar";

export default function LandingPage() {
  return (
    <>
      <MasterNavbar />
      <span className="landing-page">
        <div className="inner">
          <Link to="/sign-in">
            Elder
            <br /> Login{" "}
          </Link>
          <br></br>
          <Link to="/sign-up">
            Elder <br />
            Register
          </Link>
        </div>
        <div className="inner">
          <Link to="/volunteer-sign-in">
            Volunteer <br />
            Login
          </Link>
          <br></br>
          <Link to="/volunteer-sign-up">
            Volunteer <br />
            Register
          </Link>
        </div>
      </span>
    </>
  );
}
