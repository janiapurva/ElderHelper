import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerRequestItem from "./VolunteerRequestItem";

export default function VolunteerRequestList(props) {
  const [listItem, setListItem] = useState([]);

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
      <VolunteerRequestItem
        key={response.id}
        posted_by={response.posted_by}
        date_of_request={response.date_of_request}
        task_description={response.task_description}
        task_postal_code={response.task_postal_code}
        date_posted={response.date_posted}
      />
    );
    //}
  });

  return (
    <p>{makeRequestList}</p>
    // <div> HI </div>
  );
}
