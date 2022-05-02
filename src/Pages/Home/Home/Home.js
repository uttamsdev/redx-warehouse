import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Stock from '../Stock/Stock';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Stock></Stock>
        <Contact></Contact>
    </div>
  )
}

export default Home;