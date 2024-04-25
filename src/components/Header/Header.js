import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header (){
  return(
    <header className="header">
      <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
        <SearchBar />
        <button>cart</button>
      </div>
    </header>
  );
}

export default Header;

