import React, { useState, useEffect } from "react";
import NavBar from "./NavBarLoggedOut";
import MasterNavbar from "./MasterNavbar";
import PopupButton from "./PopupButton";
import PopupContact from "./PopupContact";
import VolunteerDisplay from "./VolunteerDisplay";




export default function HomeVolunteers() {

  const [token, setToken] = useState(null);


  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("token"));
    
    
    if (!data){

      setToken(null);

    } else {

      setToken(data.full_name);
      
      

    }




  }, [])


  return (
    <div>
      <MasterNavbar headerName={token} />
      <VolunteerDisplay/>
      
    </div>
  );
}
