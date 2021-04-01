import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import RequestBox from "./RequestBox";
import { Button } from "react-bootstrap";
import ContactCard from "./ContactCard";
import Alert from "react-bootstrap/Alert";

export default function AddContact(props) {
  const [pop, setPop] = useState(false);
  const [fullName, setfullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleFullNameChange = (evt) => {
    setfullName(evt.target.value);
  };
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const handlePhoneChange = (evt) => {
    setPhone(evt.target.value);
  };
  const onSubmit = (evt) => {
    setPop(true);

    evt.preventDefault();

    const sessionID = props.sessionID;

    const newContact = {
      full_name: fullName,
      phone_number: phone,
      email_address: email,
      elder_id: sessionID,
    };

    axios
      .post("http://localhost:8000/usersAddContact", { newContact })
      .then((res) => {
        console.log(
          "inside front end - AddContact.js - consloe log res",
          res.data
        );
      });

    setTimeout(() => {
      props.setActive("one");
    }, 2000);
  };

  return (
    <>
      <h1 className="dependent"> Add a New Contact</h1>
      <Form className="add-contact" onSubmit={onSubmit}>
        {pop && <Alert variant="success">Contact Saved!</Alert>}
        <Form.Group controlId="formBasicFullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="fullName"
            placeholder="Full Name"
            onChange={handleFullNameChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="PhoneNumber"
            placeholder="Phone Number"
            onChange={handlePhoneChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmailAdddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="emailAddress"
            placeholder="Email Address"
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
