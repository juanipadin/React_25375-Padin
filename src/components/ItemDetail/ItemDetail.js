import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

import { Card, Image, Button } from 'semantic-ui-react'


const ItemDetail = ( {item} ) => {
    const [changeButton, setChangeButton] = useState(false);
    const {addToCart} = useCartContext();

    const onAdd = (quantity) =>{
        addToCart(item, quantity)
        setChangeButton(true)
    }

    return (
        <div className="mx-auto">
            <Card>
                <Image className="mx-auto" src={item.thumbnail} wrapped ui={false} alt="Product Image" />
                <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Description>
                        UD$ {Number(item.price).toLocaleString()}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        {!changeButton && <ItemCount stock={item.stock} initial={1} onAdd={onAdd} changeButton={changeButton}/>}
                        <Link to='/'><button type= "button" className="btn btn-success">Continuar mi Compra</button></Link>
                        {changeButton && <Link to='/cart'><Button primary>Ir a mi Carrito</Button></Link>}
                </Card.Content>
        </Card>
        </div>
    )
}

export default ItemDetail
