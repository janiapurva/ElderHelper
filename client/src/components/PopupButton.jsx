import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import RequestBox from "./RequestBox";
import { Button } from "react-bootstrap";

export default function DropDown(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="popupButton">
        Make a New Request
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Make a Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RequestBox sessionID={props.sessionID} />
        </Modal.Body>
      </Modal>
    </>
  );
}
