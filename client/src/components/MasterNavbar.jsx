import React, { useState } from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";
import jwt_decode from "jwt-decode";


export default function MasterNavbar(props) {

  

  if(!props){
    return <NavBarLoggedOut/>;
  }

  return <NavBarLoggedIn headerName={props} />;  

  

}
