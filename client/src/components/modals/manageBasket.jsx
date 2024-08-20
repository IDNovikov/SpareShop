import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import {Button, Row, Col} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import {fetchBaskets, deleteBasket  } from "../../http/basketAPI";


const ManageBasket = observer(() => {
  
  const [baskets, setBaskets] = useState([])

    const basketDelete = (id) => {
      deleteBasket(id).then(data=>{handleClose()
         window.location.reload()})
    }
   
    useEffect ( () => {
      fetchBaskets().then(data=>{setBaskets(data)})
    }, [])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Manage baskets
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete baskets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        {baskets.map(basket =>
                    <Row className="mt-4">
                            <Col md={4}>
                              <div>{basket.productsId}</div>
                            <div>{basket.productsId}</div>
                          <div>{basket.certificateUniqId}</div>
                          <div>{basket.totalCost}</div>
                          <div>{basket.typeOfDelivery}</div>
                          <div>{basket.phoneNumber}</div>
                          <div>{basket.email}</div>
                          <div>{basket.payment}</div>
                          <div>{basket.name}</div>
                           <div>{basket.adress}</div>
                              <Button variant="primary" className="mt-2" onClick={()=>basketDelete(basket.id)}>
       Delete
      </Button>
                            </Col>
                        </Row>
        )}
        
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
)

export default ManageBasket