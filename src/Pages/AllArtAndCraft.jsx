import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllArtAndCraft = () => {
  const [crafts, setCrafts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/allCraft')
      .then(res => res.json())
      .then(data => setCrafts(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto my-10 px-5 md:px-[50px] lg:px-[80px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="*:text-xl font-bold">
              <th>Item Name</th>
              <th>Image</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {crafts?.map(craft => (
              <tr className="hover" key={craft._id}>
                <th>{craft.name}</th>

                <th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={craft.photo} alt="" />
                    </div>
                  </div>
                </th>
                <td>{craft.subCategory}</td>
                <td>$ {craft.price}</td>
                <td>{craft.stockStatus}</td>
                <td>
                  <Link
                    to={`/craftDetails/${craft._id}`}
                    className="btn btn-primary"
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
