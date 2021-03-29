import axios from "axios";
import React, { useState, useEffect } from "react";
import UserRequestList from "./UserRequestList";

export default function UserRequestItem(props) {
  const [listItem, setListItem] = useState([]);
  const sessionID = { sessionID: props.sessionID };
  const sessionIDTOUSE = sessionID.sessionID;

  useEffect(() => {
    axios
      .post("http://localhost:8000/userPastRequests", {
        sessionID: sessionIDTOUSE,
      })
      .then((res) => {
        setListItem(res.data);
      })
      .catch((err) => {
        console.log("error - userReqItem.jsx - 19", err);
      });
  }, [sessionIDTOUSE]);

  const makeRequestList = listItem.map((response) => {
    return (
      <UserRequestList
        key={response.id}
        id={response.id}
        date_of_request={response.date_of_request}
        task_description={response.task_description}
        task_postal_code={response.task_postal_code}
        date_posted={response.date_posted}
        fullilled_by_volunter={response.fullilled_by_volunter}
        status={response.status}
      />
    );
    //}
  });

  return <UserRequestList listItem={listItem} sessionID={sessionIDTOUSE} />;
}
