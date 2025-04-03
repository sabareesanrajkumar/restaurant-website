import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Cart.css';
import eventEmitter from '../EventEmitter/EventEmitter';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <ul>
          <li>Item 1 - INR 200</li>
          <li>Item 2 - INR 350</li>
          <li>Item 3 - INR 150</li>
        </ul>
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
