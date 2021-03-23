import React, { useState } from "react";

<<<<<<< HEAD
import Modal from "react-bootstrap/Modal";
import RequestBox from "./RequestBox";
import { Button } from "react-bootstrap";
import ContactCard from "./ContactCard";
=======
import Modal from 'react-bootstrap/Modal';
import RequestBox from './RequestBox'
import { Button } from 'react-bootstrap'
import ContactCard from "./ContactCard"



export default function PopupContact (props){


>>>>>>> master

export default function PopupContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="contact-button">
        My Contact
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>My contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<<<<<<< HEAD
          <ContactCard />
        </Modal.Body>
=======
          <ContactCard sessionID={props.sessionID} />
          </Modal.Body>
>>>>>>> master
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
