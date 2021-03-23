import React, { useState } from "react";
import { Redirect, useHistory } from "react-router"; 

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import PopupButton from "./PopupButton";

export default function NavBarLoggedIn(props) {
  const history = useHistory();

  function logout() {
    history.push("/");
    localStorage.removeItem("token");
  }

  // const myLocalToken = localStorage.getItem("decodedToken");

  // console.log('navbarLoggedin', myLocalToken)

  return (
    <header>
      <Navbar className="nav-logged-in">
        <Navbar.Brand className="nav-logged-in-logo">ElderHelper</Navbar.Brand>

        <div>
          <b>  Welcome  {props.headerName.headerName} </b>
          <Button className="logout" type="button" onClick={logout}>
            Logout
          </Button>
        </div>
      </Navbar>
    </header>
  );
}
