import React, { useState } from "react";

import { Card,Button } from 'react-bootstrap'


export default  function ContactCard () {
return (
  
  <Card  style={{ width: '18rem' }}>
  <Card.Img />
  <Card.Body>
    <Card.Title>John Doe</Card.Title>
    <Card.Text>
      <p>Name: Son</p>
      <p>Ph: 5666-666-6666</p>
    </Card.Text>

    <Button variant="primary">Send text</Button>
  </Card.Body>
</Card>

)


}