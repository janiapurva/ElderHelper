import React from "react";
import {useHistory } from "react-router";
import { Navbar, Nav, Form } from "react-bootstrap";

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
