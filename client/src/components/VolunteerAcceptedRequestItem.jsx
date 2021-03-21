import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerAcceptedRequestList from "./VolunteerAcceptedRequestList";

export default function VolunteerRequestItem(props) {
  const [listItem, setListItem] = useState([]);
  console.log('Hello inside VOLReqItemAccptedReq ', props.sessionID)
  const sessionID = { sessionID: props.sessionID };
  //console.log("sessionID - userreqitem line11", sessionID);
  const sessionIDTOUSE = sessionID.sessionID;
  //console.log("sessionIDTOUSE - VOLEreqitem line14", sessionIDTOUSE);
  const [acceptedRequestList, SetacceptedRequestList] =useState([])
  
  /* <p>{makeRequestList}</p> */
  // }
  // let returnObjForAcceptedVolRequests = {
  //   sessionIDTOUSE:sessionIDTOUSE
  // };
  
  console.log('VOLACC - returnObjForAcceptedVolRequests', {sessionIDTOUSE})
 


  //Volubteer accepted requests
  useEffect(() => {
    axios
      .post("http://localhost:8000/volunteerAcceptedRequests", {
        sessionID: props.sessionID
      })
      .then((res) => {
        console.log("inside VOLReqItem after succsu call - line 31", res);

        SetacceptedRequestList(res.data);
        console.log('acceptedRequestList', acceptedRequestList)
      })
      .catch((err) => {
        console.log("error - userReqItem.jsx -36", err);
      });
  }, [sessionIDTOUSE]);

  return (
    // <p>{makeRequestList}</p>
    // <div> HI </div>
    <VolunteerAcceptedRequestList acceptedRequestList={acceptedRequestList} sessionID={sessionIDTOUSE} />
  );
}
