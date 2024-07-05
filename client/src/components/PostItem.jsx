import React, { useEffect, useState } from "react"
import { Card, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import {useNavigate} from "react-router-dom"
import { POST_ROUTE } from "../utils/consts"

const PostItem = ({post}) => {
    const navigate = useNavigate()
  
    let array 
   const set =()=>{
        let string = post.img
        let str = string.replace(/[\"\[\]\\\\s]/g, '')
        array = str.split(",")
    }
    
 set()
return(
    <Col className="md-3" onClick={()=> navigate(POST_ROUTE+'/'+ post.id)}>

        <Card className="d-flex mt-4" style={{width: 150, cursor:"pointer"}} border={"medium"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL+ array[0]}/>
             
                <div>
                    <div><h2>{post.tittle}</h2></div>
                </div>
        </Card>

    </Col>
)

    }

    export default PostItem