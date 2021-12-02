import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'


const ItemDetail = ( {item} ) => {
    return (
        <div className="ItemDetail">
            <h3>{item.title}</h3>
            <img src= {item.thumbnail} alt="foto de producto"/>
            <h4>AR$ {Number(item.price).toLocaleString()}</h4>
            <ItemCount stock={7} initial={0}/>
        </div>
    )
}

export default ItemDetail
