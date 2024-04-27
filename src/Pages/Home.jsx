import React from 'react';
import Banner from '../Components/Banner';
import SliderTestimonial from '../Components/SliderTestimonial';
import CraftItems from '../Components/CraftItems';
import ArtAndCraftcategory from '../Components/ArtAndCraftcategory';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <ArtAndCraftcategory></ArtAndCraftcategory>
      <SliderTestimonial></SliderTestimonial>
    </div>
  );
};

export default Home;
