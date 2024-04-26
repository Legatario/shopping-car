import React from 'react';
import './Header.css';
import CartButton from '../CartButton/CardButton';

function Header (){
  return(
    <header className="header">
      <div className="container__header">
        <div className="title">
          <h1 className="container__title">MKS</h1>
          <h2 className="container__subtitle">Sistemas</h2>
        </div>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;

