import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import MasterNavbar from "./MasterNavbar";
import Alert from "react-bootstrap/Alert";

export default function Login(props) {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [successfulForm, setSuccessfulForm] = useState(false);
  const [headerName, setheaderName] = useState();
  const [headerId, setheaderId] = useState();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleHeaderIDChange = (data) => {
    setheaderId(data);
  };

  const handleHeaderNameChange = (data) => {
    setheaderName(data);
  };

  const handleEmailChange = (evt) => {
    evt.preventDefault();

    setEmail(evt.target.value);
  };

  const handlePassChange = (evt) => {
    evt.preventDefault();

    setPass(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const checkUser = {
      email_address: email,
      password: pass,
    };

    if (!(email || pass)) {
      setError("Name and password need to be provided.");
      setShow(true);

      return;
    }

    axios
      .post("http://localhost:8000/login", { checkUser })
      .then((res) => {
        console.log(
          "inside front end - signUpUsers.js - consloe log res...want to set token",
          res.data
        );

        if (res.data.error) {
          console.log("error");
          return history.push("/LoginErrorPage");
        } else {
          //set headerName with full_name from backend..
          handleHeaderNameChange(res.data.full_name);
          handleHeaderIDChange(res.data.user_id);

          //store token in local storage
          try {
            localStorage.setItem("token", JSON.stringify(res.data));
          } catch (e) {}

          const myUserToken = localStorage.getItem("token");

          setSuccessfulForm(true);
        }
      })
      .catch((err) => {
        console.error("login error LOGIN JSX: ", err);
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
        <div className="form-group-login">
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
        </div>
      </form>
    </>
  );
}
