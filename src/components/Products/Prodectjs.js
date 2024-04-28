import React, {useState, useEffect} from 'react';
import './products.css';
import fetchProduts from '../../api/fechProduts';
import ProductsCard from '../ProductsCard/ProductsCard';
import Loading from '../Loading/Loading';

function Products(){

  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {

    fetchProduts().then((res) =>{

      setProducts(res);
      setloading(false);
    });
    
  }, []);
  console.log(products);

  return(
    (loading && <Loading />) || (
      <section className="products container">
        {
          products.map((product) =>
            <ProductsCard key={product.id} data={{product}} />
          )
        }
      </section>
    )
  );
}

export default Products;
