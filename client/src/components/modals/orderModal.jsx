import React from "react";
import { useState, useContext } from 'react';
import { Form, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite"
import "./basketModal.css"
import { postBasket } from "../../http/basketAPI";
import FinishModal from "./finishModal";

const OrderModal = observer((props) => {
  console.log(props)

  const [finishModal, setFinishMadal] = useState(false)
  const [Data, setData] = useState("")
  const [delivery, setDelivery] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [payment, setPayment] = useState("")
  const [name, setName] = useState("")
  const [adress, setAdress] = useState("")

  const addProduct = () => {
    const formData = new FormData()
    formData.append('productsId', productsID)
    formData.append('certificateUniqId', props.certi.uniqId)
    formData.append('totalCost', props.amount)
    formData.append('typeOfDelivery', delivery)
    formData.append('phoneNumber', phone)
    formData.append('email', email)
    formData.append('payment', payment)
    formData.append('name', name)
    formData.append('adress', adress)
    console.log(formData)
    postBasket(formData).then(data => {setFinishMadal(true);
    setData(data)
    })
  }

  let productsID = new Array
  function addData (props) {
    props.basket.basket.map(product => productsID.push(String(product.id)))
    productsID = JSON.stringify(productsID)
  }
  addData(props)

  return (
    <div className="modalDiv">
    <div className="modalCraft" style={{display:"flex", flexDirection:"column"}}>

    {finishModal ?
      <FinishModal data={Data}/> :
      <>
        <Button variant="primary" onClick={()=>props.setModal(false)}>Go back</Button>
    <div><h2>Type of delivery</h2></div>
    <form style={{display:"flex", flexDirection:"column"}}>
      <div><input type="radio" value="pickup" id="pickup"
        onChange={(e)=>setDelivery(e.target.value)}
        name="delivery"/>
      <label for="pickup"><h2>Pickup</h2><p>Agias Zonis 59 Shop 2, Limassol</p></label>
      </div>
      <div>
      <input type="radio" value="courier" id="courier"
        onChange={(e)=>setDelivery(e.target.value)}
        name="delivery"/>
      <label for="courier"><h2>Deliver by courier</h2></label>
      </div>
    </form> 
    <Form>
          <Form.Control 
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="Recipient`s full name"/>
    </Form>
    <Form>
          <Form.Control 
          value={phone}
          onChange={e=>setPhone(e.target.value)}
          placeholder="Phone number"/>
    </Form>
    <Form>
          <Form.Control 
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="Email"/>
    </Form>
    <Form>
          <Form.Control 
          value={adress}
          onChange={e=>setAdress(e.target.value)}
          placeholder="Adress"/>
    </Form>

    <div><h2>Payment method</h2></div>
    <form style={{display:"flex", flexDirection:"column"}}>
      <div><input type="radio" value="card" id="card"
        onChange={(e)=>setPayment(e.target.value)}
        name="payment"/>
      <label for="card"><h2>By credit card</h2></label>
      </div>
      <div>
      <input type="radio" value="cash" id="cash"
        onChange={(e)=>setPayment(e.target.value)}
        name="payment"/>
      <label for="cash"><h2>Cash</h2></label>
      {/* <input type="radio" value="online" id="online"
        onChange={(e)=>setPayment(e.target.value)}
        name="payment"/>
      <label for="online"><h2>Online</h2></label> */}
      </div>
    </form> 
    <Button variant="primary" onClick={()=>addProduct()}>Get order</Button>
      </>
    }
    </div>
  </div>
  );
})

export default OrderModal