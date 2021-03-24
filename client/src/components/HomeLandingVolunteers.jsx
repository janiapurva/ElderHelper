import React, { useState } from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";
import jwt_decode from "jwt-decode";

export default function HomeVolunteers(props) {
  // console.log(props)
  const myUserToken = localStorage.getItem("token");

  if (!myUserToken) {
    return <NavBarLoggedOut />;
  } else {
    return <NavBarLoggedIn headerName={props} />;
  }
}
