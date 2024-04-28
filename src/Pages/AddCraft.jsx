import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const AddCraft = () => {
  const { user } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const handleAddCraft = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const photo = form.photo.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userName = user?.displayName;
    const email = user?.email;
    const newCraft = {
      name,
      subCategory,
      description,
      price,
      rating,
      customization,
      photo,
      processingTime,
      stockStatus,
      email,
      userName,
    };
    console.log(newCraft);
    fetch('https://craft-server-sandy.vercel.app/craft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCraft),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success',
            text: 'Craft Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <section className="p-6 bg-gray-100 text-gray-900">
        <form
          onSubmit={handleAddCraft}
          noValidate=""
          action=""
          className="container  mx-auto "
        >
          <fieldset className="p-6 lg:p-20 rounded-md shadow-sm bg-[#F4F3F0]">
            <div className="py-2 ">
              <p className="font-bold text-center text-2xl md:text-4xl mb-4">
                Add New Craft
              </p>
              <p className="text-xs text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.{' '}
                <br />
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 space-y-4">
              <div className="col-span-full sm:col-span-3 mt-4">
                <label htmlFor="name" className="text-lg">
                  Item Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Item name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="chef" className="text-lg">
                  Subcategory Name
                </label>
                <select
                  name="subCategory"
                  id="brand"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2 "
                  type="text"
                  placeholder="Select option"
                >
                  <option value="Landscape Painting" selected>
                    Landscape Painting
                  </option>
                  <option value="Portrait Drawing" selected>
                    Portrait Drawing
                  </option>
                  <option value="Watercolor Painting" selected>
                    Watercolor Painting
                  </option>
                  <option value="Oil Painting" selected>
                    Oil Painting
                  </option>
                  <option value="Charcoal Sketching" selected>
                    Charcoal Sketching
                  </option>
                  <option value="Cartoon Drawing" selected>
                    Cartoon Drawing
                  </option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-lg">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-lg">
                  Price
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="Price  "
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="city" className="text-lg">
                  Rating
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="brand">Customization</label>
                <select
                  name="customization"
                  id="brand"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2 "
                  type="text"
                  placeholder="Select option"
                >
                  <option value="Yes" selected>
                    Yes
                  </option>
                  <option value="No" selected>
                    No
                  </option>
                </select>
              </div>
              <div className="col-span-full ">
                <label htmlFor="image" className="text-sm">
                  Image Url
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder=" Url"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Processing Time
                </label>
                <input
                  name="processingTime"
                  type="text"
                  placeholder="Processing time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="brand">Stock Status</label>
                <select
                  name="stockStatus"
                  id="brand"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                  type="text"
                  placeholder="Select Status"
                >
                  <option value="In Stock" selected>
                    In Stock
                  </option>
                  <option value="Made To Order" selected>
                    Made To Order
                  </option>
                </select>
              </div>
            </div>
            <button className="btn bg-[#FA8072] mt-12 w-full font-bold text-xl text-white">
              Add Craft
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddCraft;
