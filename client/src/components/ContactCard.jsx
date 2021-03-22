import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from 'emailjs-com';
import { Card, Button } from "react-bootstrap";
import sendmail from "../sendmail";
import{ init, send } from 'emailjs-com';

init("user_8Wn7c8byh487oHW5iiqIT");

// var sendmail = require('../sendmail')({silent: true})

function ContactList(props) {

  const handleSubmitEmail = (evt) => {
    console.log('inside send emailhandle Sumit', props.sessionID)

    const templateParams = {
      from_name: 'PRANAV',
      to_name: 'Apurva',
      task_description: '',

    }
    

    // emailjs.send('service_y8qrvyb', 'template_c5mcfdw', templateParams)
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });


    console.log('inside send emailhandle Sumit AFTER sendmail')
  };

  return (
    <Card.Body>
      <Card.Title>{props.full_name}</Card.Title>
      <Card.Text>
        <p>{props.email_address}</p>
        <p>{props.phone_number}</p>
      </Card.Text>
      <Button onClick={handleSubmitEmail} variant="primary">
        Send Email
      </Button>
    </Card.Body>
  );
}

export default function ContactCard(props) {
  const [contact, setContact] = useState([]);

  console.log("props.sessionID - contact card", props);

  const sessionID = props.sessionID;

  useEffect(() => {
    //make call to backend to get data to populate card below
    axios
      .post("http://localhost:8000/usersRelatives", { sessionID })
      .then((res) => {
        console.log("inside contact data received to populate info:", res.data);
        //setContact after check
        //console.log("aaaaaaaaaaaaa", res.data);
        setContact(res.data);
      })
      .catch((err) => {
        console.error("login error LOGIN JSX: ", err);
      });
  }, []);

  const listOfContact = contact.map((person) => {
    console.log("AAAAAAAAAAA", person);

    return (
      <ContactList
        key={person.id}
        full_name={person.full_name}
        email_address={person.email_address}
        phone_number={person.phone_number}
      />
    );
  });

  console.log("this is list", listOfContact);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img />
      <Card.Body>{listOfContact}</Card.Body>
    </Card>
  );
}
