import React from 'react';
import Products from '../../ManageInventory/Products/Products';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Stock from '../Stock/Stock';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Products></Products>
        <Stock></Stock>
        <ChooseUs></ChooseUs>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home;