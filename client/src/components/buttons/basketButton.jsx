import React from "react";
import {useContext } from 'react';
import {Image} from "react-bootstrap";
import Basket from "../../assets/basket.svg"
import { Context } from "../..";
import { observer } from "mobx-react-lite"


const BasketButton = observer(() => {
  
  const {basket} = useContext(Context)

let sum = 0
const cost = (basket) => {
basket.basket.map(product => sum+=Number(product.price))
}
cost(basket)


  return (
  <>
    {sum===0 ? 
    
    <Image style={{background:"white", borderRadius:'50%', padding:6}} width={50} height={50} src={Basket}/>
    : 
    <div className="trashBox">
    <Image style={{background:"white", borderRadius:'50%', padding:6}} width={50} height={50} src={Basket} />
    <div className="counter" style={{width:"30px", height:"30px", position:"absolute", top:"40px",  color:"white", backgroundColor:"red", borderRadius:"100%", textAlign:"center"}}>{basket.basket.length}</div>
    </div>    
    }
    </>
  );
})

export default BasketButton