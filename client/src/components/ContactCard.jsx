import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { Card, Button } from "react-bootstrap";
import { init } from "emailjs-com";

init("user_ORHKXu6tXES8JF25Fe5D2");

function ContactList(props) {
  const handleSubmitEmail = (evt) => {
    props.handlePop();
    props.handleClose();

    const userTestEmail = "elderhelperuser@gmail.com";
    const relativeTestEmail = "elderhelperrelative@gmail.com";

    const templateParams = {
      from_name: props.elder,
      to_name: props.relative,
      task_description: props.task_description,
      userTestEmail: userTestEmail,
      relativeTestEmail: relativeTestEmail,
    };

    emailjs.send("service_99jdjmc", "template_424a282", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <Card.Body>
      <Card.Title>{props.relative}</Card.Title>
      <Card.Text>
        <p>{props.email_address}</p>
        <p>{props.phone_number}</p>
        <p>{props.task_description}</p>
      </Card.Text>
      <Button onClick={handleSubmitEmail} variant="primary">
        Send Email
      </Button>
    </Card.Body>
  );
}

export default function ContactCard(props) {
  const [contact, setContact] = useState([]);

  const sessionID = props.sessionID;

  useEffect(() => {
    axios
      .post("http://localhost:8000/usersRelatives", { sessionID })
      .then((res) => {
        setContact(res.data);
      })
      .catch((err) => {
        console.error("login error LOGIN JSX: ", err);
      });
  }, []);

  const listOfContact = contact.map((person) => {
    return (
      <ContactList
        key={person.id}
        relative={person.relative}
        phone_number={person.phone_number}
        email_address={person.email_address}
        elder={person.elder}
        relative={person.relative}
        task_description={person.task_description}
        handlePop={props.handlePop}
        setActive={props.setActive}
        handleClose={props.handleClose}
      />
    );
  });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img />
      <Card.Body>{listOfContact}</Card.Body>
    </Card>
  );
}
