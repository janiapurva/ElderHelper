import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBarLoggedOut() {
  const history = useHistory();

  return (
    <>
      <Navbar className="nav-logged-out">
        <Navbar.Brand href="#home" className="logged-out-logo">
          ElderHelper
        </Navbar.Brand>
        <Form inline>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Form>
      </Navbar>
    </>
  );
}
