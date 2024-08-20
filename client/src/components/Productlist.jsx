import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from ".."
import { Row } from "react-bootstrap"
import Productitem from "./Productitem"
import {Button} from "react-bootstrap";

const Productlist = observer((props) => {
    const {product} = useContext(Context)

return(
    <Row className="d-flex">
        {product.products.map(product => <div>
            <Productitem key={product.id} product={product} admin={props.prodDelete}/>
            {props.prodDelete ?
          <Button onClick={()=>props.prodDelete(product.id)}>Delete</Button>
        : <></>}
        </div>
            )
        }
    </Row>
)

    })

    export default Productlist