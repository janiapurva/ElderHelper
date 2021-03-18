import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";

import MasterNavbar from "./MasterNavbar";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [successfulForm, setSuccessfulForm] = useState(false);
  // const [deconstructedToken, setDeconstructedToken] = useState(null);

  // const [token, setToken] = useState(null);
  const { token, setToken } = props;
  console.log("props LOGINS jsX", props);

  const handleEmailChange = (evt) => {
    evt.preventDefault();

    setEmail(evt.target.value);
  };

  const handlePassChange = (evt) => {
    evt.preventDefault();

    setPass(evt.target.value);
  };

  // const handleDeconstructedToken = (data) => {
  //   setDeconstructedToken(data);
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const checkUser = {
      email_address: email,
      password: pass,
    };

    axios
      .post("http://localhost:8000/login", { checkUser })
      .then((res) => {
        try {
          console.log("res.data", res.data);
          localStorage.setItem("token", res.data);
        } catch (e) {
          console.error(e);
        }

        const myUserToken = localStorage.getItem("token");

        if (myUserToken) {
          var decodedToken = jwt_decode(myUserToken);
        } else {
          console.log("token DOESNT  exist");
        }

        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.error("login error LOGIN JSX: ", err);
      });
  };

  if (successfulForm) {
    return <Redirect to="/homeUsers" />;
  }

  return (
    <div>
      <MasterNavbar token={token} />

      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
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
            value={pass}
            onChange={handlePassChange}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>
        <p className="forgot-password text-right">
          <a href="/sign-up">Looking to Register?</a>
        </p>
      </form>
    </div>
  );
}
