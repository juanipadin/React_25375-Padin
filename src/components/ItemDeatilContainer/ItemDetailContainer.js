import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react'

import './ItemDetailContainer.css'

/* FIREBASE */
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    const itemDataFiltered = items.filter((data) => {
        return data.id === params.id
    })

    useEffect(() =>{
        const getProducts = async ()=> {
            const q = query(collection(db, "ecommerce"));
            const docs = []

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {docs.push({...doc.data(), id : doc.id})})
        setItems(docs)
        setIsLoading(false)
        }
        getProducts()
    },[])
    return (
            <div className='cardContent'>
                {isLoading
                ?
                <div className="loading">
                        <Dimmer active inverted>
                            <Loader size='massive'>Cargando...</Loader>
                        </Dimmer>
                </div> 
                :
                itemDataFiltered.map((data) => {
                    return <ItemDetail item={data} key={data.id}/>
                })}
            </div>
    )
}

export default ItemDetailContainer
