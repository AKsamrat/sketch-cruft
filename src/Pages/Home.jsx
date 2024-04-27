import React from 'react';
import Banner from '../Components/Banner';
import SliderTestimonial from '../Components/SliderTestimonial';
import CraftItems from '../Components/CraftItems';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <SliderTestimonial></SliderTestimonial>
      <p>This is home page</p>
    </div>
  );
};

export default Home;
