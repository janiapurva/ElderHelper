import React, { useState, useEffect } from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function HomeLandingUsers(props) {
  console.log("props in HomeLandingUsers", props.sessionID);
  const [countOfUserReqeusts, setcountOfUserReqeusts] = useState();

  const sessionID = props.sessionID;

  useEffect(() => {
    axios.post("http://localhost:8000/requests", { sessionID }).then((res) => {
      console.log(
        "inside front end - HOMELANDINGUSERS.js - consloe log res...want to set token",
        res.data[0].count
      );
      setcountOfUserReqeusts(res.data[0].count);
    });
  }, [sessionID]);

  // console.log(props)

  return (
    <div className="volunteer-landing">
      <h1>
        Welcome {props.headerName}!
        <br /> You have made {countOfUserReqeusts} requests
      </h1>
    </div>
  );
}
