import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from ".."
import { Row } from "react-bootstrap"
import Productitem from "./Productitem"

const Productlist = observer(() => {
    const {product} = useContext(Context)

return(
    <Row className="d-flex">
        {product.products.map(product =>
            <Productitem key={product.id} product={product} />
            )
        }
    </Row>
)

    })

    export default Productlist