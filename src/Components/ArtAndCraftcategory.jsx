import React, { useContext, useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const ArtAndCraftcategory = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [crafts, setCrafts] = useState(null);
  useEffect(() => {
    fetch('https://craft-server-sandy.vercel.app/artAndCraftCategory')
      .then(res => res.json())
      .then(data => {
        toast(' Category data Loaded');
        setCrafts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center mt-6">
        Art and craft Category
      </h2>
      <p className="text-center my-3">
        Here is all hot craft item which is dont show yet in <br /> market
        place. please find your craft make it in your own
      </p>
      {loading && <Spinner></Spinner>}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-[50px] lg:px-[80px] mx-auto ">
          {crafts?.map(craft => (
            <CategoryCard key={craft._id} craft={craft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftcategory;
