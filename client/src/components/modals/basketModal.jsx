import React from "react";
import { useState } from 'react';
import { Form, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Basket from "../../assets/basket.svg"

const BasketModal = () => {
  

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
    <Image style={{background:"white", borderRadius:'50%', padding:6}} width={40} height={40} src={Basket} onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping cart</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            



        </Modal.Body>
        
        
        
        <Modal.Footer>
        <Button variant="secondary" >
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasketModal