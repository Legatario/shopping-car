import React, {useState, useEffect} from 'react';
import './products.css';
import fetchProduts from '../../api/fechProduts';
import ProductsCard from '../ProductsCard/ProductsCard';

function Products(){

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchProduts().then((res) =>{

      setProducts(res);
    });
    
  }, []);
  console.log(products);

  return(
    <section className="products container">
      {
        products.map((product) =>
          <ProductsCard key={product.id} data={{product}} />
        )
      }
    </section>
  );
}

export default Products;
