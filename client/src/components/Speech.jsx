import React from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from 'react-bootstrap'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()
  
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <>
      <Button variant="outline-success" onClick={SpeechRecognition.startListening}>Start</Button> {' '}
      <Button variant="outline-danger" onClick={SpeechRecognition.stopListening}>Stop</Button>{' '}
      <Button variant="outline-dark" onClick={resetTranscript}>Reset</Button>{' '}
      <p>{transcript}</p>
    </>
  )
}
export default Dictaphone