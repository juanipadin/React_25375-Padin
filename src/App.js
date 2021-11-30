import React, { Component } from 'react';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDeatilContainer/ItemDetailContainer';

/* COMPONENTS */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemCount stock={7} initial={0}/>
        <ItemListContainer category='Bicicleta'/>
        <ItemListContainer category='Casco de Bicilceta'/>
        <ItemListContainer category='Zapatillas para Bicicletas'/>
        <ItemDetailContainer category='Kit de Reparación de Bicicleta'/>
      </div>
    )
  }
}

export default App;
