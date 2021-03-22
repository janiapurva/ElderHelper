import React, { useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export default function ContactCard(props) {

  const [contact, setContact] = useState(null);

  console.log("props.sessionID - contact card", props);

  const sessionID = props.sessionID;

  //make call to backend to get data to populate card below
  axios
    .post("http://localhost:8000/usersRelatives", { sessionID })
    .then((res) => {
      console.log(
        "inside contact data received to populate info:",
        res.data

        //setContact after check

        

      );

    })
    .catch((err) => {
      console.error("login error LOGIN JSX: ", err);
    });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img />
      <Card.Body>
        <Card.Title>John Doe</Card.Title>
        <Card.Text>
          <p>Name: Son</p>
          <p>Ph: 5666-666-6666</p>
        </Card.Text>

        <Button variant="primary">Send text</Button>
      </Card.Body>
    </Card>
  );
}
