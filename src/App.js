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
        <ItemListContainer />
      </div>
    )
  }
}

export default App;
