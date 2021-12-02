import React, { Component } from 'react';
import './App.css';

import ItemDetailContainer from './components/ItemDeatilContainer/ItemDetailContainer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

/* COMPONENTS */
import NavBar from './components/NavBar/NavBar';

/* VIEWS */
import Category from './views/Category';
import Home from './views/Home';


/* VER EN LA LINEA 25 QUE MANDAR COMO PARÁMETRO */

class App extends Component{
  render() {
    return (
      <div className="App">
        <Router>
            <NavBar/>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:categoryId" element={<Category/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                </Routes>
        </Router>

        
        
      </div>
    )
  }
}

export default App;
