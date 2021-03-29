import axios from "axios";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function RequestTablei(props) {
  console.log("props VolDispList LINE 8 VOL REQ JSX ", props);

  const [successfulForm, setSuccessfulForm] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let updateOfStatus = "accepted";

    const geti = () => {
      let returnObj = {};
      for (let i in props) {
        returnObj = {
          fullilled_by_volunter: props.sessionIDTOUSE,
          status: updateOfStatus,
          requestID: props.requestID,
        };
      }

      return returnObj;
    };

    let updateRequestObjVolunteerAccept = geti();

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
        <Button onClick={handleSubmit} variant="success" type="submit">
          Accept
        </Button>{" "}
      </tr>
    </tbody>
  );
}

export default function VolunteerRequestList(props) {
  return (
    <>
      <h1 className="open-requests">Open Requests</h1>
      <Table className="table-pending" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Request #</th>
            <th>Posted by</th>
            <th>Date Of Request</th>
            <th>Description</th>
            <th>Postal Code</th>
            <th>Date Posted</th>
            <th>Volunteer</th>
            <th>Status</th>
            <th>Accept Request</th>
          </tr>
        </thead>

        {props.listItem.map((response) => (
          <RequestTablei
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
    </>
  );
}
