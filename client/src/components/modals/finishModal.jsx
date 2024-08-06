import React from "react";
import { useState, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import {SHOP_ROUTE } from "../../utils/consts"
import { observer } from "mobx-react-lite"
import { Context } from "../..";


const FinishModal = observer((props) => {

    const {basket} = useContext(Context)



  return (
    <>
    <div onClick={()=>basket.deleteBasket()}>
        <Nav.Link style={{color:"black"}}href={SHOP_ROUTE} >X</Nav.Link></div>
    <h2> Order # {props.data.id}</h2>
    <h2> Thank you for order! We will sent you an order confirmation email to {props.data.email} </h2>
    <h2>Recipient: {props.data.name}</h2>
    <h2>Phone: {props.data.phoneNumber}</h2>
    <h2>E-mail:: {props.data.email}</h2>
    <h2>Receiving address: {props.data.adress}</h2>
    <div onClick={()=>basket.deleteBasket()}><Nav.Link style={{color:"black"}}href={SHOP_ROUTE} >Okay</Nav.Link></div>
    </>
  );
})

export default FinishModal