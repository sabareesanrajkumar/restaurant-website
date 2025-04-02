import React from 'react';
import './MealItemForm.css';

const mealItemForm = () => {
  return (
    <div>
      <form className="meals-form">
        <p>Amount</p>
        <input placeholder="Nos." type="number" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default mealItemForm;
