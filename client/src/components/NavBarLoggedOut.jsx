import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBarLoggedOut() {

  console.log('navbarLoggedOUT')
  const history = useHistory();


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">ElderHelper</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <Link className="nav-link" to={"/sign-in"}>
            Sign in
          </Link>
          <Link className="nav-link" to={"/sign-up"}>
            Sign up
          </Link>
        </Form>
      </Navbar>
      <br />
    </>
  );
}
