import React from "react";
import { useState, useContext } from 'react';
import { Form, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Context } from "../..";
import BasketItem from "./basketItem";
import { observer } from "mobx-react-lite"
import Nav from 'react-bootstrap/Nav';
import {SHOP_ROUTE } from "../../utils/consts"
import { checkCertificate } from "../../http/certificateAPI";
import { useNavigate, useLocation } from "react-router-dom";
import "./basketModal.css"

const OrderModal = observer((props) => {
  const {basket} = useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()

  
  return (
    <div className="modalDiv">
    <div className="modalCraft" style={{display:"flex", flexDirection:"column"}}>
    <Button variant="primary" onClick={()=>navigate(-1)}>
    Go back
  </Button>
    <Form>
      {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
    <Form.Check
      inline
      label=<span><h2>Pickup</h2><p></p><h5>Saint-P</h5></span>
      name="group1"
      type={type}
      id={`inline-${type}-1`}
    />
    <Form.Check
            inline
            label="Deliver by courier"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
    <Form>
          <Form.Control 
            
            
          placeholder="1"/>
      </Form>
      <Form>
          <Form.Control 
            
           
          placeholder="2"/>
      </Form>
    <h2> {basket.basket.length}</h2>
    </div>
  </div>
  );
})

export default OrderModal