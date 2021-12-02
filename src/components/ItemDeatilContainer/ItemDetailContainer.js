import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../spinner/spinner';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${params.id}`)
                .then((response) => response.json())
                .then((json) => {setItems(json)})
                setIsLoading(false)
        }, 2000);
    },[])

    return (
            <div>
                {isLoading ? <Spinner/> :<ItemDetail item={items}/>}
            </div>
    )
}

export default ItemDetailContainer
