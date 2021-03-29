import axios from "axios";
import React, { useState, useEffect } from "react";
import VolunteerAcceptedRequestList from "./VolunteerAcceptedRequestList";

export default function VolunteerRequestItem(props) {
  const sessionID = { sessionID: props.sessionID };
  const sessionIDTOUSE = sessionID.sessionID;
  const [acceptedRequestList, SetacceptedRequestList] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/volunteerAcceptedRequests", {
        sessionID: props.sessionID,
      })
      .then((res) => {
        SetacceptedRequestList(res.data);
      })
      .catch((err) => {
        console.log("error - userReqItem.jsx -21", err);
      });
  }, [sessionIDTOUSE]);

  return (
    <VolunteerAcceptedRequestList
      acceptedRequestList={acceptedRequestList}
      sessionID={sessionIDTOUSE}
    />
  );
}
