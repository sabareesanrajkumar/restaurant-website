import React, { useContext } from 'react';
import './Menu.css';
import MealItemForm from './MealItems/MealItemForm';
import { CartContext } from '../Cart/CartProvider';

const Menu = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const items = [
    { id: 1, title: 'Briyani', price: 200 },
    { id: 2, title: 'Fried rice', price: 250 },
    { id: 3, title: 'Meals', price: 130 },
  ];
  return (
    <div className="menu">
      <MealItemForm
        items={items}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Menu;
