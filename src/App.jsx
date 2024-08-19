import Navbar from './components/pages/Navbar/Navbar';
import Hero from './components/pages/Hero';
import Product from './components/pages/Products/Product';
import AOS from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Footer from './components/pages/TopProducts/BookStore/Footer';



const App = () => {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
