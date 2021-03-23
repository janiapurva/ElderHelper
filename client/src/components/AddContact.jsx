import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import RequestBox from "./RequestBox";
import { Button } from "react-bootstrap";
import ContactCard from "./ContactCard";

export default function AddContact(props) {
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
    evt.preventDefault();

    console.log("props", props.sessionID);

    const sessionID = props.sessionID;

    const newContact = {
      full_name: fullName,
      phone_number: phone,
      email_address: email,
      elder_id: sessionID,
    };

    //     console.log('newUser', newUser)
    //     {full_name: "hi", phone_number: "hi", email_address: "hi", elder_id: 7}
    // elder_id: 7
    // email_address: "hi"
    // full_name: "hi"
    // phone_number: "hi"

    axios.post("http://localhost:8000/addContact", { newContact }).then((res) => {
      console.log(
        "inside front end - AddContact.js - consloe log res",
        res.data
      );
    });
  };

  return (
    <Form className="add-contact" onSubmit={onSubmit}>
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
  );
}
