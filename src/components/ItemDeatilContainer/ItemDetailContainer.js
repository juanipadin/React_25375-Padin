import React, { useEffect , useState} from 'react'
/* import './ItemList.css' */
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ( { category } ) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${category}&limit=1`)
                .then((response) => response.json())
                .then((json) => {console.log(json.results); setItems(json.results)})
        }, 2000);
    },[category])

    return (
        <div className='CardContainer'>
            <div className='CardItem'>
                {items.map((item) => {
                    return <ItemDetail item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default ItemDetailContainer
