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

    // console.log("props", props.sessionID);

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

    axios
      .post("http://localhost:8000/usersAddContact", { newContact })
      .then((res) => {
        console.log(
          "inside front end - AddContact.js - consloe log res",
          res.data
        );

        // setTimeout(() => {
        //   console.log("inside Set timout")
        //   return <Alert variant="success">Contact Saved ✅ !</Alert>;

        // }, 2000);
      });

    setTimeout(() => {
      props.setActive("one");
    }, 2000);

    // alert("Contact Saved")

    // setTimeout(() => {
    //   props.setActive("one");
    // }, 3000);

    // history.push("/homeUsers");
  };

  return (
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
  );
}
