import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import {deleteCertificate, fetchCertificates  } from "../../http/certificateAPI";


const ManageCerti = observer(() => {
  
  const [certies, setCerties] = useState([])

    const certiDelete = (id) => {
      deleteCertificate(id).then(data=>handleClose())
    }
   
    useEffect ( () => {
      fetchCertificates().then(data=>{setCerties(data)})
    }, [])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" className="mt-2" onClick={handleShow}>
        Manage certies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete certies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        {certies.map(certi =>
                    <Row className="mt-4">
                            <Col md={4}>
                              <div>{certi.id}</div>
                              <div>{certi.uniqId}</div>
                              <div>{certi.recipient}</div>
                              <div>{certi.emailFrom}</div>
                              <div>{certi.emailTo}</div>
                              <div>{certi.amount}</div>
                              <div>{certi.note}</div>
                              <div>{certi.phone}</div>
                              <div>{certi.createdAt}</div>
                              <Button variant="primary" className="mt-2" onClick={()=>certiDelete(certi)}>
        Manage certies
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

export default ManageCerti