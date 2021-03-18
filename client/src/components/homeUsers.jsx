import React, { useState, useEffect } from "react";
import NavBar from "./NavBarLoggedOut";
import MasterNavbar from "./MasterNavbar";
import PopupButton from "./PopupButton";
import PopupContact from "./PopupContact";





export default function HomeUsers() {

  const [token, setToken] = useState(null);


  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("token"));
    console.log('data',data)
    setToken(data.full_name);
    console.log('data',data.full_name)



  }, [])


  return (
    <div>
      <MasterNavbar headerName={token} />
      <PopupButton />
      <PopupContact />
    </div>
  );
}
