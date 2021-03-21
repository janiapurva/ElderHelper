import React, { useState } from "react";
import SignIn from "./login";
import SignUp from "./register";
import VolunteerSignUp from "./VolunteerRegister";
import VolunteerSignIn from "./VolunteerLogin";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className = 'inner'>
    <h2>
    <ul>
      <p>
        <Link to="/sign-in">User Login</Link>
      </p>
      <p>
        <Link to="/sign-up">User Register</Link>
      </p>
      <p>
        <Link to="/volunteer-sign-in">Volunteer Login</Link>
      </p>
      <p>
        <Link to="/volunteer-sign-up">Volunteer Register</Link>
      </p>
    </ul>
    </h2>
    </div>
  );
}
