import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export default function VolunteerRequestList(props) {
  console.log("props VolDispList ", props);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("inside accept request");


    const volIdFromState = props.sessionIDTOUSE;
    console.log('volIdFromState', volIdFromState)

    const userIDFromReq = props.posted_by;
    const date_of_request = props.date_of_request;
    const task_description = props.task_description;
    const task_postal_code = props.task_postal_code;
    const date_posted = props.date_posted;
    const status = "Accepted";

    const updateRequestObjVolunteer = {
      posted_by: userIDFromReq, //user_id we need from auth response
      date_of_request: date_of_request, // from form
      task_description: task_description, //
      task_postal_code: task_postal_code,
      date_posted: date_posted,
      fullilled_by_volunter: volIdFromState,
      status: "Accepted",
    };

    // console.log('update object to send back to db', updateRequestObjVolunteer)



  };

  return (
    <Form onSubmit={handleSubmit}>
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
      </Table>
    </Form>
  );
}
