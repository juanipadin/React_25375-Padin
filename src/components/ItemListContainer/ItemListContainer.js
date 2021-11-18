import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>Esto es una prueba del 'ItemListContainer'</p>
            <p><ItemCount /></p>
        </div>
    )
}

export default ItemListContainer
