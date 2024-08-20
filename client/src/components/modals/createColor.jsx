import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import { Form, Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createColor, fetchColors, deleteColor } from "../../http/productAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../..";


const CreateColor = observer(() => {

  const {product} = useContext(Context)
  
  const [show, setShow] = useState(false);
  const [value, setValue] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect ( () => {
    fetchColors().then(data=>product.setColors(data))
  }, [])
  
  const del = () => {
    let outData = JSON.stringify(product.selectedColors.id)
    deleteColor(outData).then(data => {
    })
    handleClose()
  }
  
  const addColor = () => {
    createColor({name: value}).then(data => setValue(""))
    handleClose()
  }


  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Manage color
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete and add color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Dropdown className="mt-2">
                <Dropdown.Toggle>{product.selectedColors.name||"Choose color"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.colors.map(color => 
                        <Dropdown.Item onClick={() => product.setSelectedColors(color)} key={color.id}>{color.name}</Dropdown.Item>
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
)
export default CreateColor