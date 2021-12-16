import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';

/* FIREBASE */
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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

/*     useEffect(()=>{
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}&limit=4`)
                .then((response) => response.json())
                .then((json) => { setItems(json.results) })
                setIsLoading(false)
        }, 2000);
    },[categoryId]) */

    return (
        <div>
            {isLoading ? <h2>Cargando...</h2> :<div><h1>Bicicletas</h1><ItemList items={items}/></div>}
        </div>
    )
}

export default ItemListContainer
