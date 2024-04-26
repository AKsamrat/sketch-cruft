import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Mycraft = () => {
  const { user } = useContext(AuthContext);

  const [crafts, setCrafts] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/myCraft/${user?.email}`)
      .then(res => res.json())
      .then(data => setCrafts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  px-5 md:px-[50px] lg:px-[80px] mx-auto my-10">
      {crafts?.map(craft => (
        <div key={craft._id}>
          <div
            className="card  shadow-xl border-2 border-slate-200 rounded-2xl p-6 h-full relative overflow-hidden"
            // data-aos="zoom-in-up"
            // data-aos-duration="700"
          >
            <figure className="bg-[#F3F3F3] rounded-2xl">
              <img
                // data-aos-duration="1000"
                // data-aos="flip-left"
                className="w-[370px]  h-72 py-3 rounded-3xl p-2 overflow-hidden "
                src={craft?.photo}
                alt="Shoes"
              />
              <div className="badge badge-secondary absolute top-8 right-10">
                {craft?.stockStatus}
              </div>
            </figure>
            <div className=" ">
              <div className="py-3">
                <div
                  className="rating flex gap-2 overflow-hidden"
                  // data-aos="fade-left"
                  // data-aos-duration="1000"
                >
                  {craft?.rating > 4 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {craft?.rating > 3 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {craft?.rating > 2 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}

                  {craft?.rating > 1 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {craft?.rating > 0 && (
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                  )}
                  {craft?.rating}
                </div>
              </div>
              <h2
                className="card-title text-2xl font-bold pb-3 overflow-hidden"
                // data-aos="fade-left"
                // data-aos-duration="1000"
              >
                {craft?.name}
              </h2>
              <h2 className="mb-3">
                {' '}
                <span className="font-bold  ">Customize</span> :{' '}
                {craft?.customization}
              </h2>

              <hr />
              <div className="card-actions justify-between items-center my-4">
                <div
                  className="badge badge-outline overflow-hidden"
                  // data-aos="fade-right"
                  // data-aos-duration="1000"
                >
                  {craft?.subCategory}
                </div>
                <div className="flex items-center gap-2">
                  <p
                    className="font-bold text-2xl text-orange-400 overflow-hidden"
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
                  >
                    ${craft?.price}
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <Link
                  className="flex justify-between items-center"
                  to={`/details/ ${craft?._id}`}
                >
                  <button
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                    type="button"
                    className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-gray-800 text-[#AD8B00] mt-4 "
                  >
                    {' '}
                    Update
                  </button>
                  {/* <p>{area}sft</p> */}
                </Link>
                <Link
                  className="flex justify-between items-center"
                  to={`/details/ ${craft?._id}`}
                >
                  <button
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                    type="button"
                    className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-gray-800 text-[#AD8B00] mt-4 "
                  >
                    {' '}
                    Delete
                  </button>
                  {/* <p>{area}sft</p> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mycraft;
