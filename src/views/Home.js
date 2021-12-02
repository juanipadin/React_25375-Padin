import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <div>
            <ItemListContainer categoryId={"Bicicletas"}/>
            <ItemListContainer categoryId={"Cadenas de Bicicletas"}/>
            <ItemListContainer categoryId={"Cascos de Bicicletas"}/>
        </div>
    )
}

export default Home
