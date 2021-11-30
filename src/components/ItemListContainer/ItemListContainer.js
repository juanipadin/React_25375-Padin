import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({category}) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${category}&limit=4`)
                .then((response) => response.json())
                .then((json) => {console.log(json.results); setItems(json.results)})
        }, 2000);
    },[category])

    return (
        <div>
            <h1>{category}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
