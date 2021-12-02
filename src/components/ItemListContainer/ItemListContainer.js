import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({categoryId}) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}&limit=4`)
                .then((response) => response.json())
                .then((json) => { setItems(json.results) })
        }, 2000);
    },[categoryId])

    return (
        <div>
            <h1>{categoryId}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
