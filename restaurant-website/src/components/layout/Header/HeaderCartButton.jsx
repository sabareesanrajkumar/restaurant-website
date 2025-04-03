import React, { useState } from 'react';
import eventEmitter from '../../EventEmitter/EventEmitter';

const HeaderCartButton = () => {
  const openCart = () => {
    eventEmitter.emit('toggleCart');
  };
  return (
    <>
      <button className="header-cart-button" onClick={openCart}>
        Cart
      </button>
    </>
  );
};

export default HeaderCartButton;
