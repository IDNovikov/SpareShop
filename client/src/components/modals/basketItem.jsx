import React from "react";
import { useState, useContext } from 'react';
import { Form, Image, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../utils/consts"

const BasketItem = (props) => {
    const navigate = useNavigate()

    const redirect = (id) => {
        navigate(PRODUCT_ROUTE+'/'+ id)
        props.handleClose()
      }

      let array 
    const set =()=>{
         let string = props.product.img
         let str = string.replace(/[\"\[\]\\\\s]/g, '')
         array = str.split(",")
     }

     set()
     const del = () => {
        props.delete(props.product.id)
     }

     const add = () => {
        props.add(props.product)
     }

    return (
        <Col  className="md-3" >
        <Card className="d-flex mt-4" style={{width: 150, cursor:"pointer"}} border={"medium"}>
        <Image width={150} height={150} onClick={()=> redirect(props.product.id) } src={process.env.REACT_APP_API_URL+array[0]}/>
        <Image style={{position:"absolute", left:"75%", background:'white'}} width={40} height={40} src={Trash} onClick={del}/>
        <div>
            <div>{props.product.name}</div>
            <div>{props.product.size}</div>
            <div>{props.product.price}$</div>
            <div>
            {/* <Button variant="outline-dark" onClick={add}>+</Button>
             <div> 0</div>
            <Button variant="outline-dark">-</Button> */}
            </div>
        </div>
        </Card>
        </Col>   
    )



}

export default BasketItem