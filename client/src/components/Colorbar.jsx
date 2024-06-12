import React, { useContext } from "react"
import {observer} from "mobx-react-lite"
import { ListGroup } from "react-bootstrap"
import { Context } from ".."



const Colorbar = observer(() => {

    const {product} = useContext(Context)

    return (
        <div>
  <ListGroup>
        {product.colors.map(color => 
            <ListGroup.Item 
            slyle ={{cursor : 'pointer'}}
            active={color.id === product.selectedColors.id}//нужно сделать множественный выбор
            onClick = {() => product.setSelectedColors(color)}
            key = {color.id}> {color.name} </ListGroup.Item>
        )
        }
    </ListGroup>
        </div>
    )
})

export default Colorbar