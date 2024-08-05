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
import "./basketModal.css"
import {Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import OrderModal from "./orderModal";

const BasketModal = observer(() => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const {basket} = useContext(Context)

  const [value, setValue] = useState()
  const [certi, setCerti] = useState(0)
  const [modal, setModal] = useState(false)

  console.log(certi)

  const  checkCerti = () => {
    if (value){
      checkCertificate({uniqId:value}).then(data => {
        setCerti(JSON.parse(data))
      })
    }else{
      setValue("Wrong certificate`s ID")
    }

  }

const addToBasket = (product) =>{
    basket.addProduct(product)
}

const deleteFromBasket = (id) =>{
    basket.deleteProduct(id)
}

let sum = 0
const cost = (basket, certi) => {
  if (!certi){
    console.log(certi)
    basket.basket.map(product => sum+=Number(product.price))
  }else{
    basket.basket.map(product => sum+=Number(product.price))
    sum=sum-Number(certi.amount)
  }

}
cost(basket, certi)


  return (
  <div className="modalDiv" >
    <div className="modalCraft">
    {sum===0 ? 
  <>
<div>
<div>Shopping cart</div>
<div>The shooping cart is empty, look the something in our catalog</div>
<div><Nav.Link style={{color:"black"}}href={SHOP_ROUTE} >MAGAZINE</Nav.Link></div>
</div>
  </>
  : 
  <>   
  <div>Shopping cart</div>
<Row className="d-flex">
{basket.basket.map((product,ind) => {
  return <BasketItem key={ind} product={product} delete={deleteFromBasket} add={addToBasket} />
})}
</Row>
  <div>
    <h2> Subtotal ({basket.basket.length})  ${sum}</h2>
  </div>
  <div>
    <h3> Gift certificate</h3>
    {/* Нужно изменить кнопку. При вводе сертификата, она должна гореть красным если не правильно */}
    <Form> 
          <Form.Control 
            value={value}
            onChange={e=>setValue(e.target.value)}
            onBlur={checkCerti}
          placeholder="Code"/>
      </Form>
  </div>

  <Button variant="primary" onClick={()=>setModal(true)} >
    Checkout
  </Button>
  {modal &&
    <OrderModal basket={basket} certi={certi} setModal={setModal} amount={sum}/>
  }
  </>
}
        <button onClick={() => navigate(-1)}>Close</button>
    
    </div>
  </div>
  );
})

export default BasketModal

