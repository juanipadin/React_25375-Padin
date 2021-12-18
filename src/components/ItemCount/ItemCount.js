import React, {useState} from 'react'
import { Button } from 'semantic-ui-react'

const ItemCount = ({stock, initial, changeButton, onAdd}) => {

    const [counter, setCounter] = useState(initial)
    
    const sumItem = ()=>{
        if (counter < stock){
            setCounter(counter + 1)
        }
    }
    const removeItem = ()=>{
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    const handleOnAdd = () =>{
        onAdd(counter)
        setCounter(initial)
    }

    return (
        <div>
            <p>{counter}</p>
            <Button primary onClick={sumItem}>+</Button>
            <Button primary onClick={removeItem}>-</Button>
            { !changeButton && <Button primary onClick={handleOnAdd}>Agregar</Button>}
        </div>
    )
}

export default ItemCount
