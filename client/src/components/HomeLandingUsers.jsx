import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomeLandingUsers(props) {
  console.log("props in HomeLandingUsers", props.sessionID);
  const [countOfUserReqeusts, setcountOfUserReqeusts] = useState();

  const sessionID = props.sessionID;

  useEffect(() => {
    axios.post("http://localhost:8000/requests", { sessionID }).then((res) => {
      setcountOfUserReqeusts(res.data[0].count);
    });
  }, [sessionID]);

  return (
    <div className="volunteer-landing">
      <h1>
        Welcome {props.headerName}!
        <br /> You have made {countOfUserReqeusts} request(s)
      </h1>
    </div>
  );
}
