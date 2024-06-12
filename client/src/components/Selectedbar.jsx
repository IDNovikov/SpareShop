import React, { useContext } from "react"
import {observer} from "mobx-react-lite"
import { ListGroup } from "react-bootstrap"
import { Context } from ".."



const Selectedbar = observer(() => {

    const {product} = useContext(Context)

    return (
        <div>
  
    {product.selectedBrands? <ListGroup>Multi Selected is not working!!!</ListGroup>
    :
    <ListGroup>
        {product.selectedBrands.map(brand => 
            <ListGroup.Item 
            slyle ={{cursor : 'pointer'}}
            onClick = {() => product.setSelectedBrands(null)}
            key = {brand.id}> {brand.name} </ListGroup.Item>
        )
        }
    </ListGroup>
}
        </div>
    )
})

export default Selectedbar