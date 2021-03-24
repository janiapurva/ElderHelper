import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import PopupContact from "./PopupContact";
import PopupButton from "./PopupButton";
import AddContact from "./AddContact";
import UserRequestItem from "./UserRequestItem";
import Alert from "react-bootstrap/Alert";
import HomeLandingUsers from "./HomeLandingUsers";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function SideBar(props) {
  const [active, setActive] = useState("one");
  return (
    <>
      <div className="sidenav">
        <img
          alt="new"
        />
        <a>
          <PopupButton sessionID={props.sessionID} />
        </a>
        <a>
          <PopupContact sessionID={props.sessionID} />
        </a>
        <a href="#" onClick={() => setActive("two")}>
          Past Request
        </a>
        <a href="#" onClick={() => setActive("three")}>
          Add a new Contact
        </a>
      </div>
      <>
        {active === "one" && <HomeLandingUsers sessionID={props.sessionID}/>}
        {active === "two" && <UserRequestItem sessionID={props.sessionID} />}
        {active === "three" && (
          <AddContact sessionID={props.sessionID} setActive={setActive} />
        )}
      </>
    </>
  );
}
