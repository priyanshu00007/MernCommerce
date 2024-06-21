import React from 'react';
import Hero from '../Components/Hero/hero';
import Popular from '../Components/Popular/Popular'; // Import the Popular component
import Offers from '../Components/offers/Offers'; // Import the Popular component
import Newcollections from '../Components/Newcollections/Newcollections';
import Newsletter from "../Components/newsLetter/Newsletter"

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular /> {/* Use the Popular component */}
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    </div>
  );
};

export default Shop;
