import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Meals from './components/Meals/Meals';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
      <Menu />
      <Cart />
    </div>
  );
}

export default App;
