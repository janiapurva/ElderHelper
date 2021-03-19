import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
export default function VolunteerDisplayList(props) {
  
  
  
  
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
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
          <td>1</td>
          <td>props.fullname</td>
          <td>props.date_posted/</td>
          <td>props.task_description</td>
          <th>n3W 7O5</th>
          <th>Sept 10 2001</th>
          <Button variant="outline-success">Accept</Button>{" "}
        </tr>
      </tbody>
    </Table>
  );
}
