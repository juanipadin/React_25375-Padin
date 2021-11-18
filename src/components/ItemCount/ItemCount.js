import React, {useState} from 'react'

const stock = 10

const ItemCount = () => {

    const [counter, setCounter] = useState(0)
    
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
