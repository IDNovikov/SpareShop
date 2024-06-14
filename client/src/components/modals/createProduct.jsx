import React, { useContext } from "react";
import { useState } from 'react';
import { Dropdown, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from "../..";



const CreateProduct= () => {
    const {product} = useContext(Context)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Add product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form>
            <Dropdown className="mt-2">
                <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.types.map(type => 
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    )}
                    </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.brands.map(brand => 
                        <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                    )}
                    </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                <Dropdown.Toggle>Choose color</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.colors.map(color => 
                        <Dropdown.Item key={color.id}>{color.name}</Dropdown.Item>
                    )}
                    </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                <Dropdown.Toggle>Choose size</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.sizes.map(size => 
                        <Dropdown.Item key={size.id}>{size.name}</Dropdown.Item>
                    )}
                    </Dropdown.Menu>
                    </Dropdown>
            <Form.Control className="mt-2" placeholder="Write name of product"/>
            <Form.Control className="mt-2" placeholder="Write price of product" type="number"/>
            <Form.Label className="mt-2">Add image 1</Form.Label>
            <Form.Control  placeholder="Add image 1" type="file"/>
            <Form.Label className="mt-2">Add image 2</Form.Label>
            <Form.Control  placeholder="Add image 2" type="file"/>
            <Form.Label className="mt-2">Add image 3</Form.Label>
            <Form.Control  placeholder="Add image 3" type="file"/>
            <Form.Label className="mt-2">Add image 4</Form.Label>
            <Form.Control  placeholder="Add image 4" type="file"/>
            <Form.Label className="mt-2">Add image 5</Form.Label>
            <Form.Control  placeholder="Add image 5" type="file"/>
            <hr/>
        </Form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateProduct