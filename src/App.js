import React, { Component } from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDeatilContainer/ItemDetailContainer';

/* COMPONENTS */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Hola, esto es una prueba del uso de la prop "greeting".'}/>
        <ItemDetailContainer category='Kit de Reparación de Bicicleta'/>
      </div>
    )
  }
}

export default App;
