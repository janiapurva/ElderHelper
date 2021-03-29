import React, { useState } from "react";
import VolunteerAcceptedRequestItem from "./VolunteerAcceptedRequestItem";
import VolunteerRequestItem from "./VolunteerRequestItem";
import LeafletMap from "./LeafletMap";
import RequestMap from "./RequestMap";
import HomeLandingVolunteers from "./HomeLandingVolunteers";
import elderHelperLogo from "../images/elderHelperLogo.png";

export default function SideBarVolunteer(props) {
  const [active, setActive] = useState("one");

  return (
    <>
      <div className="sidenav">
        <img
          className="picture"
          src={elderHelperLogo}
          alt="BigCo Inc. logo"
          alt="new"
        />
        <a href="#" onClick={() => setActive("one")}>
          Home
        </a>
        <a href="#" onClick={() => setActive("two")}>
          Open Requests
        </a>
        <a href="#" onClick={() => setActive("three")}>
          Accepted and Completed Requests
        </a>
        <a href="#" onClick={() => setActive("four")}>
          Elder location Map
        </a>
        <a href="#" onClick={() => setActive("five")}>
          Request Map
        </a>
      </div>
      <>
        {active === "one" && (
          <HomeLandingVolunteers
            sessionID={props.sessionID}
            headerName={props.headerName}
          />
        )}
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
