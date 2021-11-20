import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <p><ItemCount stock={7} initial={0}/></p>
        </div>
    )
}

export default ItemListContainer
