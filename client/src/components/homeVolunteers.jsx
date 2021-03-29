import React, { useState, useEffect } from "react";
import MasterNavbar from "./MasterNavbar";
import SideBarVolunteer from "./SideBarVolunteer";

export default function HomeVolunteers() {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));

    if (!data) {
      setToken(null);
    } else {
      setToken(data.full_name);
      setSessionId(data.user_id);
      setLat(data.user_lat);
      setLong(data.user_long);
    }

    setTimeout(() => {}, 5000);
  }, [sessionId, token]);

  return (
    <>
      <MasterNavbar headerName={token} />
      <SideBarVolunteer
        sessionID={sessionId}
        headerName={token}
        centername={token}
        centerlat={lat}
        centerlong={long}
      />
    </>
  );
}
