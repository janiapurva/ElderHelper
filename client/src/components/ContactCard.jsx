import React, { useState } from "react";

import { Card,Button } from 'react-bootstrap'


export default  function ContactCard () {
return (
  
  <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src="images/elon-musk.jpg/100px100" />
  <Card.Body>
    <Card.Title>John Doe</Card.Title>
    <Card.Text>
      <h3>Son</h3>
    </Card.Text>
    <Card.Title>Ph-5666-666-6666</Card.Title>

    <Button variant="primary">Send text</Button>
  </Card.Body>
</Card>

)


}