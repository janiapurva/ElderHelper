import React, { useState, useEffect } from "react";
import NavBar from "./NavBarLoggedOut";
import MasterNavbar from "./MasterNavbar";
import PopupButton from "./PopupButton";
import PopupContact from "./PopupContact";
import VolunteerRequestList from "./VolunteerRequestList";
import VolunteerRequestItem from "./VolunteerRequestItem";

export default function HomeVolunteers() {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  console.log('1st Render')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));

    if (!data) {
      setToken(null);
    } else {
      setToken(data.full_name);
      setSessionId(data.user_id);
      console.log('data - homeVolunteers.jsx',data)
    }

    setTimeout(() => {

      console.log("sessionID after setting + timeout - homeVolunteers.jsx", sessionId);
    }, 5000);

  }, [sessionId, token]);

    return (
      <div>
        <MasterNavbar headerName={token} />
        <VolunteerRequestItem sessionID={sessionId} />
      </div>
    );



}
