import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import RequestBox from "./RequestBox";
import { Button } from "react-bootstrap";

export default function DropDown(props) {
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState("Make a Request");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="popupButton">
      New Request
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RequestBox sessionID={props.sessionID} setHeader={setHeader} />
        </Modal.Body>
      </Modal>
    </>
  );
}
