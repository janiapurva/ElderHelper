import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerRequestList from "./VolunteerRequestList";

export default function VolunteerRequestItem(props) {
 
  const [listItem, setListItem] = useState([]);
  //console.log('Hello', props.sessionID)
  const sessionID = {sessionID: props.sessionID};
  //console.log("sessionID - userreqitem line11", sessionID);
   const sessionIDTOUSE = sessionID.sessionID
   console.log("sessionIDTOUSE - VOLEreqitem line14", sessionIDTOUSE);

{/* <p>{makeRequestList}</p> */}

  useEffect(() => {


    axios
      .get("http://localhost:8000/volunteerRequests"     

      
     )
      .then((res) => {
        console.log('inside VOLReqItem after succsu call - line 31', res)

        setListItem(res.data);
      })
      .catch((err) => {
        console.log("error - userReqItem.jsx -36", err);
      });
  }, [sessionIDTOUSE]);


  //   const makeRequestList = listItem.map((response) => {
  //     console.log('response.requestID', response.id)
  //     return (
  //     < VolunteerRequestList
  //       key={response.id}
  //       requestID={response.id}
  //       posted_by={response.posted_by}
  //       date_of_request={response.date_of_request}
  //       task_description={response.task_description}
  //       task_postal_code={response.task_postal_code}
  //       date_posted={response.date_posted}
  //       fullilled_by_volunter={response.fullilled_by_volunter}
  //       status={response.status}
  //       sessionIDTOUSE={sessionIDTOUSE}
        
  //     />
  //   );
  //   //}
  // });

  return (
    // <p>{makeRequestList}</p>
    //<div> HI </div>
    < VolunteerRequestList
    listItem={listItem}
    sessionID={sessionIDTOUSE}
     />


  );
}
