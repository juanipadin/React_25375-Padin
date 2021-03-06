import React, { Component } from 'react';
import './App.css';

import ItemDetailContainer from './components/ItemDeatilContainer/ItemDetailContainer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

/* COMPONENTS */
import NavBar from './components/NavBar/NavBar';

/* VIEWS */
import Category from './views/Category';
import Home from './views/Home';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer';

class App extends Component{
  render() {
    return (
      <div className="App">
      <CartContextProvider>
        <Router>
            <NavBar/>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:categoryId" element={<Category/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/form" element={<Form/>}/>
                </Routes>
      <Footer/>
        </Router>
      </CartContextProvider>
      </div>
    )
  }
}

export default App;
