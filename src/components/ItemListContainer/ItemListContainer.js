import React, { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <div><ItemCount stock={7} initial={0}/></div>
            <ItemList category='Bicicletas'/>
            <ItemList category='Cascos de Ciclismo Profesional'/>
            <ItemList category='Asientos de Bicicletas'/>

        </div>
    )
}

export default ItemListContainer
