import React, { useState, useEffect } from "react";
import NavBar from "./NavBarLoggedOut";
import MasterNavbar from "./MasterNavbar";
import PopupButton from "./PopupButton";
import PopupContact from "./PopupContact";
import VolunteerDisplay from "./VolunteerDisplay";

export default function HomeVolunteers() {
  const [token, setToken] = useState(null);

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    console.log("data lat and long", data);

    if (!data) {
      setToken(null);
    } else {
      setToken(data.full_name);
      setLat(data.user_lat);
      setLong(data.user_long);
    }
  }, []);
  // console.log("check this out!!!!", lat, long);
// const loadingLocation = !(lat)|| !(long) 
  return (
    <div>
      <MasterNavbar headerName={token} />

      {lat && long && (
        <VolunteerDisplay headerName={token} lat={lat} long={long} />
      )}
    </div>
  );
}
