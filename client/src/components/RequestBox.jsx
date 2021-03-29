import axios from "axios";
import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../components/RequestBox.scss";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from "react-router";

export default function RequestBox(props) {
  let [description, setdescription] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [requestDate, setRequestDate] = useState();
  const [successfulForm, setSuccessfulForm] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [show, setShow] = useState(false);
  const handleDescription = (evt) => setdescription(evt.target.value);
  const handlePostalCode = (evt) => setPostalCode(evt.target.value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  useEffect(() => {
    setdescription(transcript);
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setHeader("Request Submitted ✅");

    const userIdFromState = props.sessionID;

    //format Request post date (timestamp):
    var reqDateRequired = requestDate;
    var requiredDateString =
      reqDateRequired.getFullYear() +
      "/" +
      ("0" + (reqDateRequired.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + reqDateRequired.getDate()).slice(-2) +
      " " +
      ("0" + reqDateRequired.getHours()).slice(-2) +
      ":" +
      ("0" + reqDateRequired.getMinutes()).slice(-2) +
      ":" +
      ("0" + reqDateRequired.getSeconds()).slice(-2);

    //format Request post date (timestamp):
    var reqDatePosted = new Date();
    var postedDateString =
      reqDatePosted.getFullYear() +
      "/" +
      ("0" + (reqDatePosted.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + reqDatePosted.getDate()).slice(-2) +
      " " +
      ("0" + reqDatePosted.getHours()).slice(-2) +
      ":" +
      ("0" + reqDatePosted.getMinutes()).slice(-2) +
      ":" +
      ("0" + reqDatePosted.getSeconds()).slice(-2);

    const newRequestObj = {
      posted_by: userIdFromState, //user_id we need from auth response
      date_of_request: requiredDateString, // from form
      task_description: description, //
      task_postal_code: postalCode,
      date_posted: postedDateString,
      fullilled_by_volunter: 1,
      status: "pending",
    };

    console.log("newRequestObj", newRequestObj);

    axios
      .post("http://localhost:8000/newRequest", { newRequestObj })
      .then((res) => {
        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.log("Error ReqBox 54", err);
      });
  };

  if (successfulForm) {
    return <Redirect to="/homeUsers" />;
  }

  return (
    <Form className="requestBox" onSubmit={handleSubmit}>
      <Form.Group
        controlId="exampleForm.ControlInput1"
        className="requestBox"
      ></Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Date of Request</Form.Label>
      </Form.Group>
      <DatePicker
        selected={requestDate}
        onChange={(date) => setRequestDate(date)}
        showTimeSelect
        dateFormat="Pp"
      />
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Request Description </Form.Label>
        <Form.Label>For Speech to Text press Start Button</Form.Label>
        <div>
          <Button
            variant="outline-success"
            onClick={SpeechRecognition.startListening}
          >
            Start
          </Button>{" "}
          <Button variant="outline-dark" onClick={resetTranscript}>
            Reset
          </Button>{" "}
        </div>
        <Form.Control
          as="textarea"
          value={description}
          onChange={handleDescription}
          rows={3}
        />
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          as="textarea"
          value={postalCode}
          onChange={handlePostalCode}
          rows={1}
        />
        <Button variant="success" type="submit" onClick={handleClose}>
          Submit
        </Button>{" "}
      </Form.Group>
    </Form>
  );
}
