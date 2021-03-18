import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "../components/RequestBox.scss"
import { Form,Button } from 'react-bootstrap'

  function RequestBox (){
    const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }


  return(
    <Form className = "requestBox" >
  <Form.Group controlId="exampleForm.ControlInput1" className = "requestBox">
    
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Day of Request</Form.Label>
    <Form.Control as="select" size="sm">
      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wenesday</option>
      <option>Thursday</option>
      <option>Friday</option>
      <option>Saturday</option>
      <option>Sunday</option>

    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Request Description</Form.Label>
    <div>
      <Button variant="outline-success" onClick={SpeechRecognition.startListening}>Start</Button> {' '}
      <Button variant="outline-dark" onClick={resetTranscript}>Reset</Button>{' '}
      {/* <p>{transcript}</p> */}
    </div>
    <Form.Control as="textarea" rows={3} value ={transcript}/>
    <Form.Label>Postal Code</Form.Label>
    <Form.Control as="textarea" rows={1} />
  </Form.Group>
  <Button variant="outline-info">Submit</Button>

</Form>
    
  )

}
export default RequestBox;