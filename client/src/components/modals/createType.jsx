import React from "react";
import { useState } from 'react';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createType } from "../../http/productAPI";


const CreateType = () => {
const [value, setValue] = useState()
const addType = () => {
  createType({name: value}).then(data => setValue(""))
  handleClose()
}


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Add type
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form>
            <Form.Control 
            value={value}
            onChange={e=>setValue(e.target.value)}
            placeholder="Write new type"/>
        </Form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addType}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateType