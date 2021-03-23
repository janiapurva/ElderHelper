import React, { useState, useEffect } from "react";
import NavBar from "./NavBarLoggedOut";
import MasterNavbar from "./MasterNavbar";
import PopupButton from "./PopupButton";
import PopupContact from "./PopupContact";
import VolunteerAcceptedRequestItem from "./VolunteerAcceptedRequestItem";
import VolunteerRequestItem from "./VolunteerRequestItem";
import LeafletMap from "./LeafletMap";
import RequestMap from "./RequestMap";
import SideBarVolunteer from "./SideBarVolunteer"

export default function HomeVolunteers() {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  console.log("1st Render");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));

    if (!data) {
      setToken(null);
    } else {
      setToken(data.full_name);
      setSessionId(data.user_id);
      setLat(data.user_lat);
      setLong(data.user_long);

      //console.log('data - homeVolunteers.jsx',data)
    }

    setTimeout(() => {
      //console.log("sessionID after setting + timeout - homeVolunteers.jsx", sessionId);
    }, 5000);
  }, [sessionId, token]);

  return (
    <>
      <MasterNavbar headerName={token} />
      <SideBarVolunteer/>
      <VolunteerRequestItem sessionID={sessionId} />
      <VolunteerAcceptedRequestItem sessionID={sessionId} />
      {lat && long && <LeafletMap centername={token} centerlat={lat} centerlong={long} />}
      {lat && long && <RequestMap centername={token} centerlat={lat} centerlong={long} />}
    </>
  );
}
