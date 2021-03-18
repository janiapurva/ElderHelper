import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../components/RequestBox.scss";
import { Form, Button } from "react-bootstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function RequestBox() {
  const [day, setday] = useState("");
  const [description, setdescription] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const onSubmit = (evt) => {
    
    evt.preventDefault();

    console.log(
      day,
      description,
      postalCode
    )



    // const newRequest = {      
    //   posted_by: id,//user_id we need from auth response
    //   date_of_request: date_of_request, // from form
    //   task_description: task_description, //
    //   task_postal_code: task_postal_code,
    //   date_posted: Date.now(),
    //   status: 'pending'
    // };


  }

  return (
    <Form className="requestBox">
      <Form.Group
        controlId="exampleForm.ControlInput1"
        className="requestBox"
      ></Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Date of Request</Form.Label>
      </Form.Group>
      <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
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
        <Form.Control as="textarea" rows={3} value={setdescription(transcript)} />
        <Form.Label>Postal Code</Form.Label>
        <Form.Control as="textarea" rows={1} value={setPostalCode(transcript)} />
      </Form.Group>

      
    </Form>
  );
}
export default RequestBox;
