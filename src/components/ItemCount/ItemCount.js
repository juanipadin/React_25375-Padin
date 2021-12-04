import React, {useState} from 'react'

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
            <button onClick={sumItem}>Agregar Producto</button>
            <button onClick={removeItem}>Quitar Producto</button>
            { !changeButton && <button onClick={handleOnAdd}>Agregar</button>}
        </div>
    )
}

export default ItemCount
