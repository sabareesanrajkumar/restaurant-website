import React, { useState } from 'react';

const HeaderCartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsCartOpen(true)}>Cart</button>
    </>
  );
};

export default HeaderCartButton;
