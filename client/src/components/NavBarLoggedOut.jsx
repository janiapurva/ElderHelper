import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBarLoggedOut() {
  const history = useHistory();

  return (
    <>
      <Navbar className="nav-logged-out">
        <Navbar.Brand href="#home" className="logged-out-logo">ElderHelper</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form inline>
          <Link className="nav-link" to={"/sign-in"}>
            Sign in as Requster/Elder
          </Link>
          <Link className="nav-link" to={"/sign-up"}>
            Sign up as Requster/Elder
          </Link>
          <Link className="nav-link" to={"/volunteer-sign-in"}>
             Volunteer Sign in
          </Link>
          <Link className="nav-link" to={"/volunteer-sign-up"}>
            Volunteer Sign up
          </Link>
        </Form>
      </Navbar>
    </>
  );
}
