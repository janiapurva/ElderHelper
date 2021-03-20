import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function RequestTableData(props) {
  return (
    <tbody>
      <tr>
        <td>{props.requestID}</td>
        <td>{props.posted_by}</td>
        <td>{props.date_of_request}</td>
        <td>{props.task_description}</td>
        <td>{props.task_postal_code}</td>
        <td>{props.date_posted}</td>
        <td>{props.fullilled_by_volunter}</td>
        <td>{props.status}</td>
        <Button variant="success" type="submit">
          Accept
        </Button>{" "}
      </tr>
    </tbody>
  );
}

export default function VolunteerRequestList(props) {
  console.log("props VolDispList ", props);

  const [successfulForm, setSuccessfulForm] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("inside accept request");

    const volIdFromState = props.sessionIDTOUSE;
    console.log("volIdFromState", volIdFromState);

    const userIDFromReq = props.posted_by;
    const date_of_request = props.date_of_request;
    const task_description = props.task_description;
    const task_postal_code = props.task_postal_code;
    const date_posted = props.date_posted;
    const status = "Accepted";

    const updateRequestObjVolunteerAccept = {
      posted_by: userIDFromReq, //user_id we need from auth response
      date_of_request: date_of_request, // from form
      task_description: task_description, //
      task_postal_code: task_postal_code,
      date_posted: date_posted,
      fullilled_by_volunter: volIdFromState,
      status: "Accepted",
    };

    // console.log('update object to send back to db', updateRequestObjVolunteer)

    axios
      .post("http://localhost:8000/updateRequest", {
        updateRequestObjVolunteerAccept,
      })
      .then((res) => {
        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.log("Error ReqBox 54", err);
      });
  };

  return (
    <Form onSubmit={handleSubmit} className="volunteerPendingRequests">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Request #</th>
            <th>Posted by</th>
            <th>Date Requested</th>
            <th>Description</th>
            <th>Postal Code</th>
            <th>Date Posted</th>
            <th>Volunteer ID</th>
            <th>Status</th>
            <th>Accept Request</th>
          </tr>
        </thead>

        {props.listItem.map((response) => (
          <RequestTableData
           key={response.id}
            requestID={response.id}
            posted_by={response.posted_by}
            date_of_request={response.date_of_request}
            task_description={response.task_description}
            task_postal_code={response.task_postal_code}
            date_posted={response.date_posted}
            fullilled_by_volunter={response.fullilled_by_volunter}
            status={response.status}
            sessionIDTOUSE={props.sessionID}
          />
        ))}
      </Table>
    </Form>
  );
}
