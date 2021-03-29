import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerRequestList from "./VolunteerRequestList";

export default function VolunteerRequestItem(props) {
  const [listItem, setListItem] = useState([]);
  const sessionIDTOUSE = props.sessionID;

  useEffect(() => {
    axios
      .get("http://localhost:8000/volunteerRequests")
      .then((res) => {
        setListItem(res.data);
      })
      .catch((err) => {
        console.log("error - userReqItem.jsx -36", err);
      });
  }, [sessionIDTOUSE]);

  return (
    <VolunteerRequestList listItem={listItem} sessionID={sessionIDTOUSE} />
  );
}
