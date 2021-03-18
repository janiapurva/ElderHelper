import React, { useState } from "react";
import NavBar from "./NavBarLoggedOut";
import MasterNavbar from "./MasterNavbar";
import PopupButton from "./PopupButton";
import PopupContact from "./PopupContact";


export default function homeUsers() {
  return (
    <div>
      <MasterNavbar />
      <PopupButton />
      <PopupContact />
    </div>
  );
}
