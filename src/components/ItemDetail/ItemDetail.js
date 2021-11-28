import React from 'react'
import './ItemDetail.css'

const ItemDetail = ( {item} ) => {
    return (
        <div className="ItemDetail">
            <h3>{item.title}</h3>
            <img src= {item.thumbnail} alt="foto de producto"/>
            <h4>AR$ {Number(item.price).toLocaleString()}</h4>
        </div>
    )
}

export default ItemDetail
