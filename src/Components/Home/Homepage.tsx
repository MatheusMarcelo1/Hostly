import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Features from './Features';


function Homepage() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Features/>
        <Footer />
      </div>
    );
  }
  
  export default Homepage;