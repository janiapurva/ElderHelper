import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Card,Button } from 'react-bootstrap'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()
  

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <Button variant="outline-success" onClick={SpeechRecognition.startListening}>Start</Button> {' '}
      <Button variant="outline-danger" onClick={SpeechRecognition.stopListening}>Stop</Button>{' '}
      <Button variant="outline-dark" onClick={resetTranscript}>Reset</Button>{' '}
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone