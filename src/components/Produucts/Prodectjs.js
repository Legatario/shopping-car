import React, {useState, useEffect} from 'react';
import './products.css';
import fetchProduts from '../../api/fechProduts';

function Products(){

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchProduts().then((res) =>{

      setProducts(res);

    });

  }, [products]);

  return(
    <section className="products container">
      {
        products.map((product) => <p key={product.id}>{product.name}</p>)
      }
    </section>
  );
}

export default Products;
