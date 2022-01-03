import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { Dimmer, Loader } from 'semantic-ui-react'

/* FIREBASE */
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

     useEffect(() =>{

        const getProducts = async ()=> {
        if(params.categoryId){
                const q = query(collection(db, "ecommerce"), where('category', '==', params.categoryId));
                const docs = []
    
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {docs.push({...doc.data(), id : doc.id})})
            setItems(docs)
            setIsLoading(false)
        }else {
                const q = query(collection(db, "ecommerce"));
                const docs = []
    
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {docs.push({...doc.data(), id : doc.id})})
            setItems(docs)
            setIsLoading(false)

        }
    }
    getProducts()
    },[params.categoryId])

    return (
        <div>
            {isLoading
            ?
            <div>
                <Dimmer active inverted>
                    <Loader size='massive'>Cargando...</Loader>
                </Dimmer>
            </div> 
            :
            <div><ItemList items={items}/></div>}
        </div>
    )
}

export default ItemListContainer
