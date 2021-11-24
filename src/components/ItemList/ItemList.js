import React, { useEffect , useState} from 'react'
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        const timer = setTimeout(() => {
            fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((json) => setItems(json))
        }, 2000);
        return () => clearTimeout(timer)
    },[])

    return (
        <div className='CardContainer'>
            <h1>CardContainer</h1>
            <div className='CardItem'>
                {items.map((item) => {
                    return <Item data={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default ItemList