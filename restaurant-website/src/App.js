import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Meals from './components/Meals/Meals';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevCart) => {
      return prevCart
        .map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  return (
    <div className="App">
      <Header />
      <Cart cartItems={cartItems} />
      <Meals />
      <Menu
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
    </div>
  );
}

export default App;
