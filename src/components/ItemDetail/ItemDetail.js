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
        <div>
            <Card>
                <Image src={item.thumbnail} wrapped ui={false} alt="Product Image" />
                <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Description>
                        UD$ {Number(item.price).toLocaleString()}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        {!changeButton && <ItemCount stock={7} initial={0} onAdd={onAdd} changeButton={changeButton}/>}
                        <Link to='/'><Button primary>Continuar mi Compra</Button></Link>
                        {changeButton && <Link to='/cart'><Button primary>Ir a mi Carrito</Button></Link>}
                </Card.Content>
        </Card>
        </div>
    )
}

export default ItemDetail
