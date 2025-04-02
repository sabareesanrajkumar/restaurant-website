import React, { useState } from 'react';
import './Menu.css';
import MealItemForm from '../Meals/MealItems/MealItemForm';

const Menu = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Briyani', price: 200 },
    { id: 2, title: 'Fried rice', price: 250 },
    { id: 1, title: 'Meals', price: 130 },
  ]);
  return (
    <div className="menu">
      {items.map((item) => {
        return (
          <div className="menu-total">
            <div className="menu--item">
              <h3>{item.title}</h3>
              <h4>INR - {item.price}</h4>
            </div>
            <div>
              <MealItemForm />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
