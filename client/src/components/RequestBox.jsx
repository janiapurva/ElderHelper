import axios from "axios";
import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../components/RequestBox.scss";
import { Form, Button } from "react-bootstrap";

import DatePicker from "react-datepicker";
import Modal from "react-bootstrap/Modal";
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from "react-router";

export default function RequestBox(props) {


  // const [day, setday] = useState("");
  const [description, setdescription] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [requestDate, setRequestDate] = useState();
  const [successfulForm, setSuccessfulForm] = useState("");

  const { transcript, resetTranscript } = useSpeechRecognition();

  const [show, setShow] = useState(false);

  const handleDescription = (evt) => setdescription(evt.target.value);
  const handlePostalCode = (evt) => setPostalCode(evt.target.value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log("Hi - in req submit");
    // console.log('props.user_id - RequestBox.jsx', props.sessionID)
    //get user ID from state
    const userIdFromState = props.sessionID;

    //format Request post date (timestamp):
    var reqDateRequired = requestDate;
    var requiredDateString =
      reqDateRequired.getUTCFullYear() +
      "/" +
      ("0" + (reqDateRequired.getUTCMonth() + 1)).slice(-2) +
      "/" +
      ("0" + reqDateRequired.getUTCDate()).slice(-2) +
      " " +
      ("0" + reqDateRequired.getUTCHours()).slice(-2) +
      ":" +
      ("0" + reqDateRequired.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + reqDateRequired.getUTCSeconds()).slice(-2);

    //format Request post date (timestamp):
    var reqDatePosted = new Date();
    var postedDateString =
      reqDatePosted.getUTCFullYear() +
      "/" +
      ("0" + (reqDatePosted.getUTCMonth() + 1)).slice(-2) +
      "/" +
      ("0" + reqDatePosted.getUTCDate()).slice(-2) +
      " " +
      ("0" + reqDatePosted.getUTCHours()).slice(-2) +
      ":" +
      ("0" + reqDatePosted.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + reqDatePosted.getUTCSeconds()).slice(-2);

    const newRequestObj = {
      posted_by: userIdFromState, //user_id we need from auth response
      date_of_request: requiredDateString, // from form
      task_description: description, //
      task_postal_code: postalCode,
      date_posted: postedDateString,
      fullilled_by_volunter: 1,
      status: "pending",
    };

    // console.log('newRequest - REQBOXs', newRequest)

    axios
      .post("http://localhost:8000/newRequest", { newRequestObj })
      .then((res) => {
        setSuccessfulForm(true);
      })
      .catch((err) => {
        console.log("Error ReqBox 54", err);
      });

    // return <Redirect to="/homeUsers" />;
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
        <Form.Label>Request Description</Form.Label>
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
          {/* <p>{transcript}</p> */}
        </div>
        {/* <Form.Control as="textarea" rows={3} value={transcript} /> */}
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
        <Button variant="success" type="submit">
          Submit
        </Button>{" "}
      </Form.Group>
    </Form>
  );
}
// export default RequestBox;
