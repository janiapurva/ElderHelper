import React from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";

export default function MasterNavbar(props) {
  const myUserToken = localStorage.getItem("token");

  if (!myUserToken) {
    return <NavBarLoggedOut />;
  } else {
    return <NavBarLoggedIn headerName={props} />;
  }
}
