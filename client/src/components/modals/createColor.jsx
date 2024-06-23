import React from "react";
import { useState } from 'react';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createColor } from "../../http/productAPI";


const CreateColor = () => {
  const [value, setValue] = useState()
  const addColor = () => {
    createColor({name: value}).then(data => setValue(""))
    handleClose()
  }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Add color
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form>
            <Form.Control 
                                    value={value}
                                    onChange={e=>setValue(e.target.value)}
            placeholder="Write new color"/>
        </Form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addColor}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateColor