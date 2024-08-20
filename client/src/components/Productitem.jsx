import React, { useContext } from "react"
import { Button, Card, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import Heart from "../assets/Icon-button.svg"
import {useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from "../utils/consts"
import { Context } from "..";

const Productitem = ({product, admin}) => {
    const {basket} = useContext(Context)
    const navigate = useNavigate()
  
    const add = () =>{
        basket.addProduct(product)
    }

    let array 
   const set =()=>{
        let string = product.img
        let str = string.replace(/[\"\[\]\\\\s]/g, '')
        array = str.split(",")
    }
    
 set()
return(
    <Col className="md-3" >

        <Card className="d-flex mt-4" style={{width: 150, cursor:"pointer"}} border={"medium"}>
            <Image style={{position:"absolute", left:"75%"}} width={40} height={40} src={Heart}/>
                <Image width={150} height={150} onClick={()=> navigate(PRODUCT_ROUTE+'/'+ product.id)} src={process.env.REACT_APP_API_URL+ array[0]}/>
             
                <div>
                    <div>{product.name}</div>
                    <div>{product.price}$</div>
                    
                    {!admin ?
          <Button onClick={add}> Add to card</Button>
        : <></>}
                </div>
        </Card>

    </Col>
)

    }

    export default Productitem