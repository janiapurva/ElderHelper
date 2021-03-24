import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CustomizedRatings from "./CustomizedRatings";

function RequestTable(props) {
  return (
    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>{props.date_of_request}</td>
        <td>{props.task_description}</td>
        <td>{props.task_postal_code}</td>
        <td>{props.date_posted}</td>
        <td>{props.fullilled_by_volunter}</td>
        <td>{props.status}</td>
        <td>
          <CustomizedRatings id={props.id} />
        </td>
      </tr>
    </tbody>
  );
}
export default function UserRequestList(props) {
  console.log("userRequestList props", props);

  return (
    <Table className="elder-table" striped bordered hover variant="dark">
      <thead>
        <h4>Your Requests</h4>
        <tr>
          <th>Request #</th>

          <th>Date Requested</th>
          <th>Description</th>
          <th>Postal Code</th>
          <th>Date Posted</th>
          <th>Volunteer Name</th>
          <th>Status</th>
          <th>Rate your Volunteer</th>
          <th>Add to Volunteer to your Contacts?</th>
        </tr>
      </thead>
      {props.listItem.map((response) => (
        <RequestTable
          key={response.id}
          id={response.id}
          date_of_request={response.date_of_request}
          task_description={response.task_description}
          task_postal_code={response.task_postal_code}
          date_posted={response.date_posted}
          fullilled_by_volunter={response.fullilled_by_volunter}
          status={response.status}
        />
      ))}
    </Table>
  );
}
