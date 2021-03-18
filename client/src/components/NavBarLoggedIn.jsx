import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBarLoggedIn(props) {
  console.log("login navabar", props.headerName.headerName)
  const history = useHistory();

  function logout() {
    history.push("/sign-in");
    localStorage.removeItem("token");    
  }

  // const myLocalToken = localStorage.getItem("decodedToken");
  
  // console.log('navbarLoggedin', myLocalToken)
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">ElderHelper</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Past request</Nav.Link>
          <Nav.Link href="#pricing">NewRequest</Nav.Link>
        </Nav>
        <Form inline>
          <div className="nav-link">{props.headerName.headerName}</div>
          {/* {props.headerName.} */}
          <Button type="button" onClick={logout} variant="outline-info">
            Logout
          </Button>
        </Form>
      </Navbar>
      <br />
    </>
  );


}
