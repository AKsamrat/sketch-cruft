import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CraftDetails = () => {
  const { id } = useParams();
  const [crafts, setCrafts] = useState(null);

  useEffect(() => {
    fetch(`https://craft-server-sandy.vercel.app/singleCraft/${id}`)
      .then(res => res.json())
      .then(data => setCrafts(data));
  }, []);
  return (
    <div className="mb-10">
      <div className="hero min-h-screen mt-8 space-y-3">
        <div className="hero-content flex-col lg:flex-row text-left gap-12">
          <div className=" rounded-lg  bg-[#F3F3F3] p-3 lg:p-5 w-[400px] lg:w-[800px] ">
            <img
              className="h-[400px]  lg:h-[500px] w-full lg:w-full"
              src={crafts?.photo}
              alt=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl lg:text-5xl font-bold">{crafts?.name}</h1>
            <p className="py-6 "> {crafts?.description}</p>
            <hr />
            <div className=" py-5">
              <p className="my-2">
                {' '}
                <span className="font-bold">Sub Category</span> :{' '}
                {crafts?.subCategory}
              </p>
              <p className="font-bold flex justify-center items-center">
                Review:
                <div className="rating flex gap-2">
                  {crafts?.rating > 4 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {crafts?.rating > 3 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {crafts?.rating > 2 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}

                  {crafts?.rating > 1 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {crafts?.rating > 0 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {crafts?.rating}
                </div>
              </p>
            </div>
            <hr />
            <div className="flex items-center gap-4 justify-between py-4">
              <p className="">
                <span className="font-bold">Customization :</span>{' '}
                {crafts?.customization}
              </p>
              <p className="">
                <span className="font-bold">Processing Time :</span>{' '}
                {crafts?.processingTime}
              </p>
            </div>
            <hr />
            <div className="mt-10 flex justify-between">
              <a
                href="#_"
                className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  {crafts?.stockStatus}
                </span>
              </a>
              <p className="text-4xl font-medium text-red-600">
                {' '}
                ${crafts?.price}.00
              </p>
            </div>
            <div className="space-y-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
