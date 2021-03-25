import React, { useState } from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";
import jwt_decode from "jwt-decode";

export default function HomeVolunteers(props) {
  // console.log(props)
  return (
    <div className="volunteer-landing">
      <h1>Welcome {props.headerName} </h1>
      <h2>  Your Current Rating is... </h2>
    </div>
  );
}
