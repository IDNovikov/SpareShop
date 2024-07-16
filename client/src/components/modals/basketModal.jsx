import React from "react";
import { useState, useContext } from 'react';
import { Form, Image, Row, InputGroup, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Basket from "../../assets/basket.svg"
import Trash from "../../assets/trash.svg"
import { Context } from "../..";
import { PRODUCT_ROUTE } from "../../utils/consts"
import BasketItem from "./basketItem";
import { observer } from "mobx-react-lite"
import Nav from 'react-bootstrap/Nav';
import {SHOP_ROUTE } from "../../utils/consts"
import { checkCertificate } from "../../http/certificateAPI";

const BasketModal = observer(() => {

  const [value, setValue] = useState()
  console.log(value)
  
  const checkCerti = () => {
    if (value){
      checkCertificate({uniqId:value}).then(data => console.log(data))
    }else{
      console.log("no certi")
    }
    
  
  }



  const {basket} = useContext(Context)
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const addToBasket = (product) =>{
    console.log("add"+product)
    basket.addProduct(product)
}

const deleteFromBasket = (id) =>{
  console.log("delete"+id)
    basket.deleteProduct(id)
}

let sum = 0
const cost = (basket) => {
basket.basket.map(product => sum+=Number(product.price))
}
cost(basket)


  return (
    <>
     
    {sum===0 ? 
    <>
    <Image style={{background:"white", borderRadius:'50%', padding:6}} width={50} height={50} src={Basket} onClick={handleShow}/>
 <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Shopping cart</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  The shooping cart is empty, look the something in our catalog
  
  </Modal.Body>
  <Modal.Footer>
    <div>
    <Nav.Link style={{color:"black"}}href={SHOP_ROUTE} onClick={handleClose}>MAGAZINE</Nav.Link>
      </div>
    
  </Modal.Footer>
</Modal>
    </>: 
    <>
    <div className="trashBox">
    <Image style={{background:"white", borderRadius:'50%', padding:6}} width={50} height={50} src={Basket} onClick={handleShow}/>
    <div className="counter" style={{width:"30px", height:"30px", position:"absolute", top:"40px",  color:"white", backgroundColor:"red", borderRadius:"100%", textAlign:"center"}}>{basket.basket.length}</div>
        </div>
    
    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Shopping cart</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Row className="d-flex">
  {basket.basket.map((product,ind) => {
    return <BasketItem key={ind} product={product} handleClose={handleClose} delete={deleteFromBasket} add={addToBasket} />
  })}
  </Row>
  </Modal.Body>
  <Modal.Footer>
    <div>
      <h2> Subtotal ({basket.basket.length})  ${sum}</h2>
      </div>
    
    <div>
      <h3> Gift certificate</h3>

      <Form>
            <Form.Control 
                                    value={value}
                                    onChange={e=>setValue(e.target.value)}
            placeholder="Code"/>
        </Form></div>
    
  <Button variant="primary" onClick={checkCerti}>
      Checkout
    </Button>
  </Modal.Footer>
</Modal>

    </>
    
}
    </>
  );
})

export default BasketModal