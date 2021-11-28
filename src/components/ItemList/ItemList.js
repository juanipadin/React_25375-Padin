import React, { useEffect , useState} from 'react'
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ( { category } ) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${category}&limit=4`)
                .then((response) => response.json())
                .then((json) => {console.log(json.results); setItems(json.results)})
        }, 2000);
    },[category])

    return (
        <div className='CardContainer'>
            <h2>{category}</h2>
            <div className='CardItem'>
                {items.map((item) => {
                    return <Item item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default ItemList
