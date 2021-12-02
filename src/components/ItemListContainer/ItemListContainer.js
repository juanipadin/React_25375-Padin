import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({categoryId}) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}&limit=4`)
                .then((response) => response.json())
                .then((json) => { setItems(json.results) })
                setIsLoading(false)
        }, 2000);
    },[categoryId])

    return (
        <div>
            {isLoading ? <h2>Cargando...</h2> :<div><h1>{categoryId}</h1><ItemList items={items}/></div>}
        </div>
    )
}

export default ItemListContainer
