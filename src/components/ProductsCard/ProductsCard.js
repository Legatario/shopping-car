import React from 'react';
import './ProductsCard.css';
import { PiHandbagBold } from 'react-icons/pi';

function ProductsCard(){
  return(
    <section className="product-card">
      <img src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" alt="product" className="card__image" ></img>
      <div className="card__infos">
        <h2 className="card__name">aple wath serie 64</h2>
        <div className="box__card--price"> 
          <h2 className="card__price">R$1200</h2>
        </div>
        <p className="card__description">asasas asasas asasoo asasas aspasoapsopasoa aa</p>
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
