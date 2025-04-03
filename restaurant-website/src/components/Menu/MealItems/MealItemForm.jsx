import React from 'react';
import './MealItemForm.css';

const mealItemForm = (props) => {
  return (
    <>
      {props.items.map((item) => {
        const cartItem = props.cartItems.find(
          (cartItem) => cartItem.title === item.title
        );
        const quantity = cartItem ? cartItem.quantity : 0;
        return (
          <div className="menu-total" key={item.id}>
            <div className="menu--item">
              <h3>{item.title}</h3>
              <h4>INR - {item.price}</h4>
            </div>
            <div>
              <div>
                <form className="meals-form">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      props.removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      props.addToCart(item);
                    }}
                  >
                    +
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default mealItemForm;
