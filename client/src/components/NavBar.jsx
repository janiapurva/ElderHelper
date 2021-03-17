import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'

export default function NavBar (){
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">ElderHelper</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Past request</Nav.Link>
      <Nav.Link href="#pricing">NewRequest</Nav.Link>
      <Link className="nav-link" to={"/sign-in"} >
                    Sign in
                </Link>
      <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>

    </Nav>
    <Form inline>
      <Button variant="outline-info">Logout</Button>
    </Form>
  </Navbar>
  <br />
  

  
</>
  )
}