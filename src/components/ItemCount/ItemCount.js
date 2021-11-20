import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial)
    
    const onAdd = ()=>{
        if (counter < stock){
            setCounter(counter + 1)
        }
    }
    const onRemove = ()=>{
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={onAdd}>Agregar Producto</button>
            <button onClick={onRemove}>Quitar Producto</button>
        </div>
    )
}

export default ItemCount
