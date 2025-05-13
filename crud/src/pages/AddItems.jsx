import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CrudContext from "../context/CrudContext";

const AddItems = () => {
  const context = useContext(CrudContext);

  const { shopping, setShopping, addProduct } = context;

  const onChangeItem = (e) => {
    setShopping({
      ...shopping,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-b border-gray-200 px-8 py-8 rounded-xl w-80 lg:w-96">
          <div className="flex space-x-2 items-center mb-4">
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
            <h1 className="text-center text-black text-xl  font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="name"
              className="p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 px-2 py-2 w-full lg:w-[20em] placeholder:text-black outline-none "
              placeholder="Product name"
              value={shopping.name}
              onChange={onChangeItem}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className="p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 px-2 py-2 w-full lg:w-[20em] placeholder:text-black outline-none "
              placeholder="Product Price"
              value={shopping.price}
              onChange={onChangeItem}
            />
          </div>
          <div>
            <input
              type="text"
              name="image"
              className="p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 px-2 py-2 w-full lg:w-[20em] placeholder:text-black outline-none "
              placeholder="Product Image url"
              value={shopping.image}
              onChange={onChangeItem}
            />
          </div>
          <div>
            <input
              type="text"
              name="details"
              className="p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 px-2 py-2 w-full lg:w-[20em] placeholder:text-black outline-none "
              placeholder="Product details"
              value={shopping.details}
              onChange={onChangeItem}
            />
          </div>
          <div>
            <input
              type="text"
              name="size"
              className="p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 px-2 py-2 w-full lg:w-[20em] placeholder:text-black outline-none "
              placeholder="Product details"
              value={shopping.size}
              onChange={onChangeItem}
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" w-full col-span-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition shadow-md cursor-pointer"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
