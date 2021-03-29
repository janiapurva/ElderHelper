import React from "react";
import { useHistory } from "react-router";
import { Navbar, Button } from "react-bootstrap";

export default function NavBarLoggedIn(props) {
  const history = useHistory();

  function logout() {
    history.push("/");
    localStorage.removeItem("token");
  }

  return (
    <header>
      <Navbar className="nav-logged-in">
        <Navbar.Brand className="nav-logged-in-logo">ElderHelper</Navbar.Brand>
        <div>
          <b> Welcome {props.headerName.headerName} </b>
          <Button className="logout" type="button" onClick={logout}>
            Logout
          </Button>
        </div>
      </Navbar>
    </header>
  );
}
