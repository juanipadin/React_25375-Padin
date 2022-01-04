import React, {useState} from 'react'

const ItemCount = ({stock, initial, changeButton, onAdd}) => {

    const [counter, setCounter] = useState(initial)
    
    const sumItem = ()=>{
        if (counter < stock){
            setCounter(counter + 1)
        }
    }
    const removeItem = ()=>{
        if (counter > 1){
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
            <button type="button" className="btn btn-primary btn-sm" onClick={removeItem}>-</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={sumItem}>+</button>
            { !changeButton && <button type="button" className="btn btn-info btn-sm" onClick={handleOnAdd}>Agregar</button>}
        </div>
    )
}

export default ItemCount
