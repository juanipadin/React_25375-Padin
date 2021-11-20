import React, { Component } from 'react';
import './App.css';

/* COMPONENTS */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Hola, esto es una prueba del uso de la prop "greeting".'}/>
      </div>
    )
  }
}

export default App;
