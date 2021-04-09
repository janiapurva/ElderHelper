import React from "react";
import { useHistory } from "react-router";
import { Navbar, Nav, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBarLoggedOut() {
  const history = useHistory();

  const handleClick = () => {
    console.log("hi");
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <>
      <Navbar className="nav-logged-out">
        <Navbar.Brand href="#home" className="logged-out-logo">
          ElderHelper
        </Navbar.Brand>

        <Form inline>
          <div class="dropdown">
            <Link class="dropbtn">Login</Link>
            <div class="dropdown-content">
              <Link to="/sign-in">Elder Login</Link>
              <Link to="/volunteer-sign-in">Volunteer Login</Link>
            </div>
          </div>

          <div class="dropdown">
            <Link class="dropbtn">Register</Link>
            <div class="dropdown-content">
              <Link to="/sign-up">Elder Register</Link>
              <Link to="/volunteer-sign-up">Volunteer Register</Link>
            </div>
          </div>

          {/* 
          <div>
            <button>LOGIN</button>

            <div class="dropdown-content">
              <Link to="/sign-in">Elder Login</Link>
              <br></br>
              <Link to="/volunteer-sign-in">Volunteer Login</Link>
              <br></br>
            </div>
          </div> */}

          {/* <Link to="/sign-up">
            Elder <br />
            Register
          </Link> */}
          <br></br>
          {/* <Link to="/volunteer-sign-up">
            Volunteer <br />
            Register
          </Link> */}
        </Form>
      </Navbar>
    </>
  );
}
