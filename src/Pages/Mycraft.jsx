import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Mycraft = () => {
  const { user } = useContext(AuthContext);

  const [crafts, setCrafts] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const handleJobsFilter = filter => {
    if (filter === 'Yes') {
      setDisplayData([...crafts].filter(data => data.customization === 'Yes'));
    } else if (filter === 'No') {
      setDisplayData([...crafts].filter(data => data.customization === 'No'));
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myCraft/${user?.email}`)
      .then(res => res.json())
      .then(data => setCrafts(data));
  }, []);
  return (
    <div className="my-10  px-5 md:px-[50px] lg:px-[80px] mx-auto ">
      <div className="flex justify-center items-center mb-4">
        <details className="dropdown dropdown-hover">
          <summary className="m-1 btn bg-[#23BE0A] text-white px-6  flex justify-center items-center ">
            <p>Sort By Customize </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </summary>

          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter('Yes')}>
              <a>Yes</a>
            </li>
            <li onClick={() => handleJobsFilter('No')}>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {displayData?.map(craft => (
          <div key={craft._id}>
            <div
              className="card  shadow-xl border-2 border-slate-200 rounded-2xl p-4 h-full relative overflow-hidden"
              // data-aos="zoom-in-up"
              // data-aos-duration="700"
            >
              <figure className="bg-[#F3F3F3] rounded-2xl">
                <img
                  // data-aos-duration="1000"
                  // data-aos="flip-left"
                  className="w-[390px]  h-72 py-3 rounded-3xl p-2 overflow-hidden "
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
    </div>
  );
};

export default Mycraft;
