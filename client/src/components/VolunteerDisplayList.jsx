import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function VolunteerDisplayList(props) {
  //get sessionID to insert into table and use in button on submit

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('Hello', props)
    const sessionID = { sessionID: props.sessionID };
    //console.log("sessionID - userreqitem line11", sessionID);
    // const sessionIDTOUSE = props.sessionID;
    // console.log("sessionIDTOUSE - userreqitem line11", sessionIDTOUSE);
    // //or this: works in RequestBox.jsx
    // const userIdFromState = props.sessionID;

    //on submit, we need to change the status column of the given request to 'accepted' (basically a copy of the userNewRequest route but with a twist)

    // //make object to update the request
    // const volunteerRequestUpdate = {
    //   posted_by: props.posted_by, //user_id we need from auth response
    //   date_of_request: props.date_of_request, // from form
    //   task_description: props.task_description, //
    //   task_postal_code: props.task_postal_code,
    //   date_posted: props.date_posted,
    //   fullilled_by_volunter: sessionIDTOUSE,
    // //   status: "accepted",
    // // };

    // console.log("LINE 33 volunteerRequestUpdate", volunteerRequestUpdate);

    // useEffect(() => {

    //   axios
    //   .post("http://localhost:8000/newRequest", { newRequestObj })
    //   .then((res) => {
    //     setSuccessfulForm(true);
    //   })
    //   .catch((err) => {
    //     console.log("Error ReqBox 54", err);
    //   });
    // }
    // ,[sessionIDTOUSE])

    // console.log('update req volunteer accept - REQBOXs', newRequest)

    //change the "add" button to "completed" button
  };

  return (
    <Table striped bordered hover variant="dark" onSubmit={handleSubmit}>
      <thead>
        <tr>
          <th>Request #</th>
          <th>Posted by</th>
          <th>Date Requested</th>
          <th>Description</th>
          <th>Postal Code</th>
          <th>Date Posted</th>
          <th>Accept</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.posted_by}</td>
          <td>{props.date_of_request}</td>
          <td>{props.task_description}</td>
          <th>{props.task_postal_code}</th>
          <th>{props.date_posted}</th>

          <Button type="button" onClick={handleSubmit} variant="outline-info">
            Accept
          </Button>
        </tr>
      </tbody>
    </Table>
  );
}
