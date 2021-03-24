import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import PopupContact from "./PopupContact";
import PopupButton from "./PopupButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import VolunteerAcceptedRequestItem from "./VolunteerAcceptedRequestItem";
import VolunteerRequestItem from "./VolunteerRequestItem";
import LeafletMap from "./LeafletMap";
import RequestMap from "./RequestMap";
import HomeLandingVolunteers from "./HomeLandingVolunteers";
import elderHelperLogo from '../images/elderHelperLogo.jpg';

export default function SideBarVolunteer(props) {
  console.log("this on is in sidebar", props);

  const [active, setActive] = useState("one");

  return (
    <>
      <div className="sidenav">
      <img src={elderHelperLogo} alt="ElderHelper"/>
        <a href="#" onClick={() => setActive("one")}>
          Landing Page
        </a>
        <a href="#" onClick={() => setActive("two")}>
          Open Requests
        </a>
        <a href="#" onClick={() => setActive("three")}>
          Completed Requests
        </a>
        <a href="#" onClick={() => setActive("four")}>
          Elder location Map
        </a>
        <a href="#" onClick={() => setActive("five")}>
          Request Map
        </a>
      </div>
      <>
        {active === "one" && <HomeLandingVolunteers sessionID={props.sessionID}/>}
        {active === "two" && (
          <VolunteerRequestItem sessionID={props.sessionID} />
        )}
        {active === "three" && (
          <VolunteerAcceptedRequestItem sessionID={props.sessionID} />
        )}
        {active === "four" && (
          <LeafletMap
            centername={props.centername}
            centerlat={props.centerlat}
            centerlong={props.centerlong}
          />
        )}
        {active === "five" && (
          <RequestMap
            centername={props.centername}
            centerlat={props.centerlat}
            centerlong={props.centerlong}
          />
        )}
      </>
    </>
  );
}
