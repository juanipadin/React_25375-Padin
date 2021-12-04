import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import {Link} from 'react-router-dom'


const ItemDetail = ( {item} ) => {
    const [changeButton, setChangeButton] = useState(false);

    const onAdd = (quantity) =>{
        setChangeButton(true)
        alert(`Ud. Agregó a su Carrito la cantidad de ${quantity} productos`)
    }

    return (
        <div className="ItemDetail">
            <h3>{item.title}</h3>
            <img src= {item.thumbnail} alt="foto de producto"/>
            <h4>AR$ {Number(item.price).toLocaleString()}</h4>
            <div>
                {!changeButton && <ItemCount stock={7} initial={0} onAdd={onAdd} changeButton={changeButton}/>}
                {changeButton && <Link to='/cart'><button>Finalizar la Compra</button></Link>}
            </div>
            
        </div>
    )
}

export default ItemDetail
