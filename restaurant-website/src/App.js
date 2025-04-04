import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Meals from './components/Meals/Meals';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

import { CartProvider } from './components/Cart/CartProvider';

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
      <CartProvider>
        <Cart />
        <Menu />
      </CartProvider>
    </div>
  );
}

export default App;
