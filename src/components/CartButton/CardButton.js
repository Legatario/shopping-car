import React from 'react';
import './CardButton.css';

import { TiShoppingCart } from 'react-icons/ti';


function CartButton() {
  return(
    <button type="button" className="cart__button">
      <TiShoppingCart />
      <span className="cart-status">  0 </span>
    </button>
  );
}

export default CartButton;
