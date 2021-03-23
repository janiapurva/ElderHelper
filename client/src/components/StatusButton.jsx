import React, { useState } from "react";

import Badge from 'react-bootstrap/Badge';
export default function StatusButton(){
  return(
    <>
  <h3>
  <Badge pill variant="success">
    Accepted
  </Badge>{' '}
  </h3>
  <h3>
  <Badge pill variant="danger">
    Not Fullfiled
  </Badge>{' '}
  </h3>
  <h3>
  <Badge pill variant="warning">
    Pending
  </Badge>{' '}
  </h3>
  
</>

  )
}