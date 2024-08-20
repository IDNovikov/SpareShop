import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import { Form, Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createSize, fetchSizes, deleteSize } from "../../http/productAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const CreateSize = observer(() => {

  const {product} = useContext(Context)
  
  const [show, setShow] = useState(false);
  const [value, setValue] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect ( () => {
    fetchSizes().then(data=>product.setSizes(data))
  }, [])

  const del = () => {
    let outData = JSON.stringify(product.selectedSizes.id)
    deleteSize(outData).then(data => {
    })
    handleClose()
  }
  
  const addSize = () => {
    createSize({name: value}).then(data => setValue(""))
    handleClose()
  }





  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Manage size
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete and add size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <Dropdown className="mt-2">
                <Dropdown.Toggle>{product.selectedSizes.name||"Choose size"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.sizes.map(size => 
                        <Dropdown.Item onClick={() => product.setSelectedSizes(size)} key={size.id}>{size.name}</Dropdown.Item>
                    )}
                    </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="primary" onClick={del}>
           Delete
          </Button>
        <Form>
            <Form.Control 
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        placeholder="Write new size"/>
        </Form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addSize}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
)

export default CreateSize