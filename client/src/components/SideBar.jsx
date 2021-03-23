import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import PopupContact from "./PopupContact";
import PopupButton from "./PopupButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function SideBar(props) {
  console.log("this on is in sidebar", props);
  return (
    <div className="sidenav">
      <PopupButton sessionID={props.sessionID} />
      <PopupContact sessionID={props.sessionID}/>

      <a href="#">Past Request</a>
      <a href="#">Add a new Contact</a>
    </div>
  );
}
