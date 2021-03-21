import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerDisplayList from "./VolunteerDisplayList";
import LeafletMap from "./LeafletMap";
import RequestMap from "./RequestMap";
export default function VolunteerDisplay(props) {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/requests")

      .then((res) => {
        setListItem(res.data);
        console.log("hi from line 34", res);
      })
      .catch((err) => {
        console.log("error - volunteerDijsplay.jsx -29", err);
      });
  }, []);
  console.log("show me the money", listItem);
  console.log("this message");

  const makeRequestList = listItem.map((response) => {
    console.log("this is response", response);
    return (
      <div>
        <VolunteerDisplayList
          key={response.id}
          posted_by={response.posted_by}
          date_of_request={response.date_of_request}
          task_description={response.task_description}
          task_postal_code={response.task_postal_code}
          lat={response.lat}
          long={response.long}
          date_posted={response.date_posted}
          fullilled_by_volunterfullilled_by_volunter={
            response.fullilled_by_volunterfullilled_by_volunter
          }
        />

        {/* <LeafletMap 
        requesters ={listItem}
        
        /> */}
      </div>
    );
    //}
  });
  // const getpostalcode = listItem.map((response) => {
  //   return (
  //     <div>
  //       <LeafletMap task_postal_code={response.task_postal_code}
  //       task_description={response.task_description} />
  //     </div>
  //   );
  // });

  return (
    <p>
      {makeRequestList}
      <LeafletMap
        centername={props.headerName}
        centerlat={props.lat}
        centerlong={props.long}
      />
      <RequestMap
        centername={props.headerName}
        centerlat={props.lat}
        centerlong={props.long}
      />
    </p>
  );
}
