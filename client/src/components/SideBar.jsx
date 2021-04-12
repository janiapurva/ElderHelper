/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PopupContact from "./PopupContact";
import PopupButton from "./PopupButton";
import AddContact from "./AddContact";
import UserRequestItem from "./UserRequestItem";
import HomeLandingUsers from "./HomeLandingUsers";
import elderHelperLogo from "../images/elderHelperLogo.png";

export default function SideBar(props) {
  const [active, setActive] = useState("one");
  return (
    <>
      <div className="sidenav">
        <img
          className="picture"
          src={elderHelperLogo}
          alt="BigCo Inc. logo"
      
        />
        <a href="#" onClick={() => setActive("one")}>
          Home
        </a>

        <a>
          <PopupButton sessionID={props.sessionID} />
          
        </a>
       
        <a>
          <PopupContact sessionID={props.sessionID} setActive={setActive} />
        </a>
       
        <a href="#" onClick={() => setActive("two")}>
          Past Requests
        </a>
       
        <a href="#" onClick={() => setActive("three")}>
          Add a new Contact
        </a>
      </div>
      <>
        {active === "one" && (
          <HomeLandingUsers
            sessionID={props.sessionID}
            headerName={props.headerName}
          />
        )}
        {active === "two" && <UserRequestItem sessionID={props.sessionID} />}
        {active === "three" && (
          <AddContact sessionID={props.sessionID} setActive={setActive} />
        )}
      </>
    </>
  );
}
