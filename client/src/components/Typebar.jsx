import React, { useContext } from "react"
import {observer} from "mobx-react-lite"
import { ListGroup } from "react-bootstrap"
import { Context } from ".."



const Typebar = observer(() => {

    const {product} = useContext(Context)

    return (
        <div>
  <ListGroup>
        {product.types.map(type => 
            <ListGroup.Item 
            slyle ={{cursor:"pointer"}}
            active={type.id === product.selectedTypes.id}//нужно сделать множественный выбор+включение или выключение
            onClick = {() => product.setSelectedTypes(type)}
            key = {type.id}> {type.name} </ListGroup.Item>
        )
        }
    </ListGroup>
        </div>
    )
})

export default Typebar