import React, { useState } from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";
import jwt_decode from "jwt-decode";


export default function MasterNavbar() {
  
  const token = localStorage.getItem('token');   

  if(!token){
    return <NavBarLoggedOut/>;
  }

  return <NavBarLoggedIn name={token} />;  

  

}
