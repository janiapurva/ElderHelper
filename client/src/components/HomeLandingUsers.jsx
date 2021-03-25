import React, { useState } from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";
import jwt_decode from "jwt-decode";

export default function HomeLandingUsers(props) {
  // console.log(props)
  return(
  <div className="volunteer-landing">
    
    <h1>Welcome {props.headerName}!
    <br/> you've made x many requests</h1>
  </div>
  )
}
