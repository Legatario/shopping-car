import React from 'react';
import propTypes from 'prop-types';
import './ProductsCard.css';
import { PiHandbagBold } from 'react-icons/pi';

function ProductsCard({ data }){

  const { price, description, name, photo } = data; 
  
  return(
    <section className="product-card">
      <img src= {photo} alt="product" className="card__image" ></img>
      <div className="card__infos">
        <h2 className="card__name">{name}</h2>
        <div className="box__card--price"> 
          <h2 className="card__price">{price}</h2>
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
