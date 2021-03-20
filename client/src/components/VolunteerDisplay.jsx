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

  useEffect(() => {
    console.log("inside use");

    axios
      .get("http://localhost:8000/requests")

      .then((res) => {
        console.log("message 40 VDx", res.data);
        setListItem(res.data);
        // console.log("this is rsponse", res);
      })
      .catch((err) => {
        console.log("error - volunteerDijsplay.jsx -29", err);
      });
  }, []);
console.log('show me the stuff',listItem)
console.log(listItem)


  //
  // console.log('this is',requests)

  // console.log('this is state.listItem',state.listItem)

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
        />

        <LeafletMap 
        requesters ={listItem}
        
        />
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
      {/* <LeafletMap task_postal_code ={listItem}/> */}
      {/* {getpostalcode} */}
    </p>
  );
}
