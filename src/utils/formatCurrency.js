const formatCurrency = (price) => {
  const formattedPrice = parseFloat(price).toFixed(0);
  
  const parts = formattedPrice.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  

  return parts.join(',');
};


export default formatCurrency;
