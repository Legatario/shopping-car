import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Prodectjs';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="body__container">
      <main>
        <Header />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
