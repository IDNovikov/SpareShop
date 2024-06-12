import React, { useContext } from "react"
import {observer} from "mobx-react-lite"
import { ListGroup } from "react-bootstrap"
import { Context } from ".."



const Brandbar = observer(() => {

    const {product} = useContext(Context)

    return (
        <div>
  <ListGroup>
        {product.brands.map(brand => 
            <ListGroup.Item 
            slyle ={{cursor : 'pointer'}}
            active={brand.id === product.selectedBrands.id}//нужно сделать множественный выбор
            onClick = {() => product.setSelectedBrands(brand)}
            key = {brand.id}> {brand.name} </ListGroup.Item>
        )
        }
    </ListGroup>
        </div>
    )
})

export default Brandbar