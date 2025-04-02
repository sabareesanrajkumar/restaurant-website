import React from 'react';
import './Header.css';
import mealsImage from '../../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Eternal nectar</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="restaurant" />
      </div>
    </>
  );
};

export default Header;
