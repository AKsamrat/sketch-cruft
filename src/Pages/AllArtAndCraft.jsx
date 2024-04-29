import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from '../Components/Spinner';

const AllArtAndCraft = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [crafts, setCrafts] = useState(null);

  useEffect(() => {
    fetch('https://craft-server-sandy.vercel.app/allCraft')
      .then(res => res.json())
      .then(data => {
        setCrafts(data);
        setLoading(false);
        toast(' All Art & Craft Data Loaded');
      });
  }, []);

  return (
    <div>
      {loading && <Spinner></Spinner>}
      <div className="overflow-x-auto my-10  md:px-[50px] lg:px-[80px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="*:text-xl font-bold">
              <th>
                <div>Item Name</div>
              </th>
              <th>
                <div className="hidden lg:flex">Image</div>
              </th>
              <th>
                <div className="hidden lg:flex">Sub Category</div>
              </th>
              <th>
                <div className="hidden lg:flex">Price</div>
              </th>
              <th>
                <div className="hidden lg:flex">Stock Status</div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {crafts?.map(craft => (
              <tr className="hover" key={craft._id}>
                <th>{craft.name}</th>

                <th>
                  <div className="avatar hidden lg:flex">
                    <div className="mask mask-squircle w-12 h-12 ">
                      <img src={craft.photo} alt="" />
                    </div>
                  </div>
                </th>
                <td>
                  <div className="hidden lg:flex">{craft.subCategory}</div>
                </td>
                <td>
                  <div className="hidden lg:flex">$ {craft.price}</div>
                </td>
                <td>
                  <div className="">{craft.stockStatus}</div>
                </td>
                <td>
                  <Link
                    to={`/craftDetails/${craft._id}`}
                    className="btn  bg-[#FA8072] text-white"
                  >
                    {' '}
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
