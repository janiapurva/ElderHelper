import React, { useState, useEffect } from "react";
import NavBar from "./NavBarLoggedOut";
import MasterNavbar from "./MasterNavbar";
import PopupButton from "./PopupButton";
import SideBar from "./SideBar";
import PopupContact from "./PopupContact";
import UserRequestItem from "./UserRequestItem";

export default function HomeUsers() {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    // console.log("data", data);

    if (!data) {
      setToken(null);
    } else {
      setToken(data.full_name);

      setSessionId(data.user_id);

      // console.log("data", data.full_name);
    }
  }, []);
  console.log("this one is on display", sessionId);
  return (
    <>
      <MasterNavbar headerName={token} />
      <SideBar sessionID={sessionId} />
    </>
  );
}
