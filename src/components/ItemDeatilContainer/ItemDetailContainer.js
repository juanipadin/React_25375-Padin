import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const params = useParams()

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${params.id}`)
                .then((response) => response.json())
                .then((json) => {setItems(json)})
        }, 2000);
    },[])

    return (
            <div>
                {<ItemDetail item={items}/>}
            </div>
    )
}

export default ItemDetailContainer
