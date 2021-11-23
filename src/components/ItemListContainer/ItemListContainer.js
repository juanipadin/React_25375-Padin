import React, { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <div><ItemCount stock={7} initial={0}/></div>
            <ItemList />

        </div>
    )
}

export default ItemListContainer
