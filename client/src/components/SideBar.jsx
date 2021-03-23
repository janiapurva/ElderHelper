import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import PopupContact from "./PopupContact";
import PopupButton from "./PopupButton";
import AddContact from './AddContact';
import UserRequestItem from './UserRequestItem';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function SideBar(props) {
  console.log("this on is in sidebar", props);
  const [active, setActive] = useState("one");
  return (
    <>
      <div className="sidenav">
        <PopupButton sessionID={props.sessionID} />
        <PopupContact />

        <a href="#" onClick={() => setActive("two")}>
          Past Request
        </a>
        <a href="#"  onClick={() => setActive("three")}>Add a new Contact</a>
      </div>
      <>
        {active === "two" && (
          <UserRequestItem sessionID={props.sessionID} />
        )}
         {active === "three" && (
          <AddContact sessionID={props.sessionID}
          useState= {useState} />
        )}
      </>
    </>
  );
}
