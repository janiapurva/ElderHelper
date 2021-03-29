import React, { useState, useEffect } from "react";
import MasterNavbar from "./MasterNavbar";
import SideBar from "./SideBar";

export default function HomeUsers() {
  const [token, setToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));

    if (!data) {
      setToken(null);
    } else {
      setToken(data.full_name);
      setSessionId(data.user_id);
    }
  }, []);

  return (
    <>
      <MasterNavbar headerName={token} />
      <SideBar sessionID={sessionId} headerName={token} />
    </>
  );
}
