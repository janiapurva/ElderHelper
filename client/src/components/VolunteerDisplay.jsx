import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerDisplayList from "./VolunteerDisplayList";
import LeafletMap from "./LeafletMap";
export default function VolunteerDisplay(props) {
  const [listItem, setListItem] = useState([]);
  //console.log("this is response line 14", state.listItem["0"]);

  // setRequests(state => ({
  //   request: {
  //     ...state.requests,
  //     listItem:res
  //   },
  // }))

  // setRequests(newRequests) {
  //   setRequests({ requests.listItem: [...requests, newRequests]})
  // }

  // axios.post("http://localhost:8000/requests").then((res) => {
  //   console.log("message", res);
  //   setData(res.data);
  //   // console.log("this is rsponse", res);
  // });
  // console.log("in volunteer display", props);
  useEffect(() => {
    axios
      .get("http://localhost:8000/requests")

      .then((res) => {
        setListItem(res.data);
      })
      .catch((err) => {
        console.log("error - volunteerDijsplay.jsx -29", err);
      });
  }, []);

  const makeRequestList = listItem.map((response) => {
    return (
      <div>
        <VolunteerDisplayList
          key={response.id}
          posted_by={response.posted_by}
          date_of_request={response.date_of_request}
          task_description={response.task_description}
          task_postal_code={response.task_postal_code}
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
        volunteerPosition={props.latlong}
      />
    </p>
  );
}
