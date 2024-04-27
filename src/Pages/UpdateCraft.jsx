import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const UpdateCraft = () => {
  // const crafts = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const { user } = useContext(AuthContext) || {};

  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/craftUpdate/${id}`)
      .then(res => res.json())
      .then(data => setCrafts(data));
  }, []);

  const handleUpdateCraft = event => {
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
    fetch(`http://localhost:5000/updateCraftData/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCraft),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: 'success',
            text: 'Craft Updated Successfully',
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
          onSubmit={handleUpdateCraft}
          noValidate=""
          action=""
          className="container  mx-auto "
        >
          <fieldset className="p-6 lg:p-20 rounded-md shadow-sm bg-[#F4F3F0]">
            <div className="py-2 ">
              <p className="font-bold text-center text-2xl md:text-4xl">
                Update Craft
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
                  defaultValue={crafts?.name}
                  type="text"
                  placeholder="Item name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="chef" className="text-lg">
                  Subcategory Name
                </label>
                <input
                  defaultValue={crafts?.subCategory}
                  name="subCategory"
                  type="text"
                  placeholder="Sub Category"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-lg">
                  Description
                </label>
                <input
                  defaultValue={crafts?.description}
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
                  defaultValue={crafts?.price}
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
                  defaultValue={crafts?.rating}
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="brand">Customization</label>
                <select
                  defaultValue={crafts?.customization}
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
                  defaultValue={crafts?.photo}
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
                  defaultValue={crafts?.processingTime}
                  name="processingTime"
                  type="text"
                  placeholder="Processing time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 py-3 pl-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="brand">Stock Status</label>
                <select
                  defaultValue={crafts?.stockStatus}
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
            <button className="btn btn-secondary mt-12 w-full font-bold">
              Update Craft
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};
export default UpdateCraft;
