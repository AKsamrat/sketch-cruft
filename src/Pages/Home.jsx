import React from 'react';
import Banner from '../Components/Banner';
import SliderTestimonial from '../Components/SliderTestimonial';
import CraftItems from '../Components/CraftItems';
import ArtAndCraftcategory from '../Components/ArtAndCraftcategory';
import Marketing from '../Components/Marketing';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <ArtAndCraftcategory></ArtAndCraftcategory>
      <SliderTestimonial></SliderTestimonial>
      <Marketing></Marketing>
    </div>
  );
};

export default Home;
