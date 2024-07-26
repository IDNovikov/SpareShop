import React from "react";
import { useState, useContext } from 'react';
import { Form, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite"
import "./basketModal.css"
import { postBasket } from "../../http/basketAPI";

const OrderModal = observer((props) => {
  console.log(props)
  const [productsID, setProductsID] = useState()
  const [certiID, setCertiID] = useState("no")
  const [totalCost, setTotalCost] = useState("")
  const [delivery, setsetDelivery] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [payment, setPayment] = useState("")
  const [name, setName] = useState("")
  const [adress, setAdress] = useState("")

  const addProduct = () => {
    const formData = new FormData()
    formData.append('productsId', productsID)
    formData.append('certificateUniqId', certiID)
    formData.append('totalCost', totalCost)
    formData.append('typeOfDelivery', delivery)
    formData.append('phoneNumber', phone)
    formData.append('email', email)
    formData.append('payment', payment)
    formData.append('name', name)
    formData.append('adress', adress)
    console.log(formData)
    postBasket(formData).then(data => alert("Happy"))
  }

  function addData (props) {
    let preBasketId = new Array
    props.basket.basket.map(product => preBasketId.push(String(product.id)))

    console.log(JSON.stringify(preBasketId))
  }
  addData(props)


  return (
    <div className="modalDiv">
    <div className="modalCraft" style={{display:"flex", flexDirection:"column"}}>
    <Button variant="primary" onClick={()=>props.setModal(false)}>Go back</Button>
    
    
    {/* <Form.Control 
            value={name}
            onChange={e=> setName(e.target.value)}
             className="mt-2" placeholder="Write name"/> */}


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
    
    </div>
  </div>
  );
})

export default OrderModal