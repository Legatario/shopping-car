import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';
import CartButton from '../CartButton/CardButton';

function Header (){
  return(
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;

