import React from 'react'
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ( { items } ) => {

    return (
        <div className="CardContainer">
            <div className="CardItem">
                    {items.map((item) => {
                        return <Item item={item} key={item.id}/>
                    })}
            </div>
        </div>
    )
}

export default ItemList
