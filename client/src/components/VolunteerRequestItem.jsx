import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerRequestList from "./VolunteerRequestList";

export default function VolunteerRequestItem(props) {
  const [listItem, setListItem] = useState([]);
  //console.log('Hello', props.sessionID)
  const sessionID = { sessionID: props.sessionID };
  //console.log("sessionID - userreqitem line11", sessionID);
  const sessionIDTOUSE = sessionID.sessionID;
  //console.log("sessionIDTOUSE - VOLEreqitem line14", sessionIDTOUSE);
  const sessionIDForAcceptedReqs = { sessionID: props.sessionID };
  const [acceptedRequestList, SetacceptedRequestList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/volunteerRequests")
      .then((res) => {
        console.log("inside VOLReqItem after succsu call - line 31", res);

        setListItem(res.data);
      })
      .catch((err) => {
        console.log("error - userReqItem.jsx -36", err);
      });
  }, [sessionIDTOUSE]);

  return (
    <VolunteerRequestList
      listItem={listItem}
      sessionID={sessionIDTOUSE}
    />
  );
}
