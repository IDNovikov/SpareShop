import React, { useContext } from "react"
import {observer} from "mobx-react-lite"
import { ListGroup } from "react-bootstrap"
import { Context } from ".."



const Sizebar = observer(() => {

    const {product} = useContext(Context)

    return (
        <div>
  <ListGroup>
        {product.sizes.map(size => 
            <ListGroup.Item 
            slyle ={{cursor : 'pointer'}}
            active={size.id === product.selectedSizes.id}//нужно сделать множественный выбор
            onClick = {() => product.setSelectedSizes(size)}
            key = {size.id}> {size.name} </ListGroup.Item>
        )
        }
    </ListGroup>
        </div>
    )
})

export default Sizebar