import React from 'react';
import propTypes from 'prop-types';
import './ProductsCard.css';
import { PiHandbagBold } from 'react-icons/pi';

function ProductsCard({ data }){
  
  const { price, description, name, photo } = data.product;
  const formattedPrice = parseFloat(price).toFixed(2).replace(/\.00$/, '');

  return(
    <section className="product-card">
      <img src= {photo} alt="product" className="card__image" ></img>
      <div className="card__infos">
        <h2 className="card__name">{name}</h2>
        <div className="box__card--price">
          <span className="box__card--span">R$</span> 
          <h2 className="card__price">{formattedPrice}</h2>
        </div>
        <p className="card__description">
          {description}
        </p>
      </div>
      <button type="button" className="button__add-cart">
        <span> 
          <PiHandbagBold />
        </span> 
        Comprar
      </button>
    </section>
  );
}

export default ProductsCard;


ProductsCard.propTypes = {
  data : propTypes.shape({}),
}.isRequired;
