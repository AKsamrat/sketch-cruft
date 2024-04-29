import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Spinner from '../Components/Spinner';

const Mycraft = () => {
  const { user, loading, setLoading } = useContext(AuthContext);

  const [crafts, setCrafts] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  // console.log(displayData);
  const [control, setControl] = useState(false);
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://craft-server-sandy.vercel.app/craftDelete/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Craft has been deleted.',
                icon: 'success',
              });
              setControl(!control);
            }
          });
      }
    });
  };

  const handleJobsFilter = filter => {
    if (filter === 'Yes') {
      setDisplayData([...crafts].filter(data => data.customization === 'Yes'));
    } else if (filter === 'No') {
      setDisplayData([...crafts].filter(data => data.customization === 'No'));
    }
  };

  useEffect(() => {
    fetch(`https://craft-server-sandy.vercel.app/myCraft/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        toast(' My Craft  Data Loading');
        setCrafts(data);
        setLoading(false);
        setDisplayData(data);
      });
  }, [user, control]);
  return (
    <div className="my-10  px-5 md:px-[50px] lg:px-[80px] mx-auto ">
      <div className="flex justify-center items-center mb-4">
        <details className="dropdown dropdown-hover">
          {loading && <Spinner></Spinner>}
          <summary className="m-1 btn bg-[#FA8072] text-white px-6  flex justify-center items-center ">
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
                    to={`/craftsUpdate/${craft?._id}`}
                  >
                    <button
                      // data-aos="fade-right"
                      // data-aos-duration="1000"
                      type="button"
                      className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-[#e5948b] text-white mt-4 "
                    >
                      {' '}
                      <FaPencilAlt />
                    </button>
                    {/* <p>{area}sft</p> */}
                  </Link>
                  <Link
                    className="flex justify-between items-center"
                    onClick={() => handleDelete(craft?._id)}
                  >
                    <button
                      // data-aos="fade-right"
                      // data-aos-duration="1000"
                      type="button"
                      className="relative px-6 py-2 ml-4 overflow-hidden font-semibold rounded bg-[#FA8072] text-white mt-4 "
                    >
                      {' '}
                      <RiDeleteBin6Line />
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
