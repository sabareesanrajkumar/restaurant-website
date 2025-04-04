import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Cart.css';
import eventEmitter from '../EventEmitter/EventEmitter';
import { CartContext } from '../Cart/CartProvider';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const toggleCart = () => setIsOpen((prev) => !prev);
    eventEmitter.on('toggleCart', toggleCart);

    return () => {
      eventEmitter.off('toggleCart', toggleCart);
    };
  }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="cart-overlay">
      <div className="cart-modal">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - INR{item.price} x {item.quantity} = INR
                {item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
        <div className="cart-actions">
          <button onClick={() => eventEmitter.emit('toggleCart')}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </div>,
    document.getElementById('cart-root')
  );
};

export default Cart;
