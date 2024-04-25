const fetchProduts = async () =>{

  const res = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC');
  const data = await res.json();

  return data.result;
};

export default fetchProduts;
