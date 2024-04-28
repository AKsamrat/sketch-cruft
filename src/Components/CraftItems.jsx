import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { toast } from 'react-toastify';

const CraftItems = () => {
  const [crafts, setCrafts] = useState(null);
  const [cardNumber, setCardNumber] = useState(6);
  console.log(cardNumber);
  const handleShowLess = () => {
    setCardNumber(6);
  };
  const handleShowAll = () => {
    setCardNumber(crafts.length);
    console.log(crafts.length);
  };

  useEffect(() => {
    fetch('https://craft-server-sandy.vercel.app/allCraft')
      .then(res => res.json())
      .then(data => {
        toast(' Craft Item Data Loading');
        setCrafts(data);
      });
  }, []);
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center mt-6">
        Craft Items
      </h2>
      <p className="text-center my-3">
        Here is all hot craft item which is dont show yet in <br /> market
        place. please find your craft make it in your own
      </p>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-[50px] lg:px-[80px] mx-auto ">
          {crafts?.length > ` ${cardNumber}`
            ? crafts
                ?.slice(0, 6)
                .map(craft => <ProductCard key={craft._id} craft={craft} />)
            : crafts?.map(craft => (
                <ProductCard key={craft._id} craft={craft} />
              ))}
        </div>
        {` ${cardNumber}` < 7 ? (
          <div onClick={handleShowAll} className="mt-10 flex justify-center">
            <button className="text-white bg-[#FA8072] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
              <FaAngleDoubleDown />
            </button>
          </div>
        ) : (
          <div onClick={handleShowLess} className="mt-10 flex justify-center">
            <button className="text-white bg-[#FA8072] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
              <FaAngleDoubleUp />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CraftItems;
