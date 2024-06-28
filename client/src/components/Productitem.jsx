import React, { useEffect, useState } from "react"
import { Card, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import Heart from "../assets/Icon-button.svg"
import {useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from "../utils/consts"

const Productitem = ({product}) => {
    const navigate = useNavigate()
  
    let array 
   const set =()=>{
        let string = product.img
        let str = string.replace(/[\"\[\]\\\\s]/g, '')
        array = str.split(",")
    }
    
 set()
return(
    <Col className="md-3" onClick={()=> navigate(PRODUCT_ROUTE+'/'+ product.id)}>

        <Card className="d-flex mt-4" style={{width: 150, cursor:"pointer"}} border={"medium"}>
            <Image style={{position:"absolute", left:"75%"}} width={40} height={40} src={Heart}/>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL+ array[0]}/>
             
                <div>
                    <div>{product.name}</div>
                    <div>{product.price}$</div>
                </div>
        </Card>

    </Col>
)

    }

    export default Productitem