import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import { Button } from 'semantic-ui-react'


const ItemDetail = ( {item} ) => {
    const [changeButton, setChangeButton] = useState(false);
    const {addToCart} = useCartContext();

    const onAdd = (quantity) =>{
        addToCart(item, quantity)
        setChangeButton(true)
        alert(`Ud. Agregó a su Carrito la cantidad de ${quantity} productos`)
    }

    return (
        <div className="ItemDetail">
            <h3>{item.title}</h3>
            <img src= {item.thumbnail} alt="foto de producto"/>
            <h4>UD$ {Number(item.price).toLocaleString()}</h4>
            <div>
                {!changeButton && <ItemCount stock={7} initial={0} onAdd={onAdd} changeButton={changeButton}/>}
                <Link to='/'><Button primary>Continuar mi Compra</Button></Link>
                {changeButton && <Link to='/cart'><Button primary>Terminar mi Compra</Button></Link>}
            </div>
            
        </div>
    )
}

export default ItemDetail
