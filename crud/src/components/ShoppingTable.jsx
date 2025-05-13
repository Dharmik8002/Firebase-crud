import React, { useContext } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import CrudContext from "../context/CrudContext";
import { Link } from "react-router-dom";

const ShoppingTable = () => {
  const context = useContext(CrudContext);
  const {
    allItems,
    fetchEditHandal,
    deleteProducts,
    selectedItem,
    getSingleProductView,
    search,
    setSearch,
  } = context;

  const allItemsFilter = allItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-blue-100 to-purple-100 p-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-white bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white "
            />
            <h2 className="text-2xl font-bold text-center drop-shadow-lg">
              React Firebase CRUD
            </h2>
            <Link to="/additems" style={{ textDecoration: "none" }}>
              <button className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-4 py-2 rounded-pill hover:bg-purple-100 transition shadow-lg cursor-pointer">
                <FiPlus />
                Add Product
              </button>
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {allItemsFilter.length > 0 ? (
              <table className="min-w-full table-auto text-sm text-left text-gray-700">
                <thead className="bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-white text-xs uppercase tracking-wider shadow">
                  <tr>
                    <th className="px-6 py-3">S.No.</th>
                    <th className="px-6 py-3">Product Image</th>
                    <th className="px-6 py-3">Product Name</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Details</th>
                    <th className="px-6 py-3">Size</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Edit</th>
                    <th className="px-6 py-3">View</th>
                    <th className="px-6 py-3">Delete</th>
                  </tr>
                </thead>

                {allItemsFilter.map((item, index) => {
                  const { name, image, price, details, size, date } = item;
                  return (
                    <tbody
                      key={index}
                      className="bg-white divide-y divide-gray-100"
                    >
                      <tr className="hover:bg-purple-50 transition">
                        <td className="px-6 py-4 font-bold text-purple-700">
                          {index + 1}.
                        </td>
                        <td className="px-6 py-4">
                          <img
                            src={image}
                            alt="Product"
                            className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 shadow-sm"
                          />
                        </td>
                        <td className="px-6 py-4 text-gray-800 font-semibold">
                          {name}
                        </td>
                        <td className="px-6 py-4 text-green-600 font-bold">
                          ₹{price}
                        </td>
                        <td className="px-6 py-4 text-pink-600">{details}</td>
                        <td className="px-6 py-4 text-black">{size}</td>
                        <td className="px-6 py-4 text-gray-500">{date}</td>
                        <td className="py-4">
                          <Link
                            to="/edititems"
                            style={{ textDecoration: "none" }}
                          >
                            <button
                              onClick={() => fetchEditHandal(item)}
                              className="flex items-center gap-2 bg-green-100 text-green-600 hover:bg-green-200 px-3 py-2 rounded-pill text-xs font-semibold shadow cursor-pointer"
                              style={{ textDecoration: "none" }}
                            >
                              <FiEdit size={14} />
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td className="px-4 py-4">
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => getSingleProductView(item.id)}
                            className="flex items-center gap-2 bg-green-100 text-green-600 hover:bg-green-200 px-3 py-2 rounded-pill text-xs font-semibold shadow cursor-pointer"
                          >
                            <FaEye size={14} />
                            View
                          </button>
                        </td>
                        <td className="py-4">
                          <button
                            onClick={() => deleteProducts(item)}
                            className="flex items-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 px-3 py-2 rounded-pill text-xs font-semibold shadow cursor-pointer"
                          >
                            <FiTrash2 size={14} />
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            ) : (
              // ✅ Moved outside the <table>
              <h4 className="text-center font-bold text-black py-6">
                Product Not Found
              </h4>
            )}
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedItem?.name || "Loading..."}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              {selectedItem ? (
                <div className="card mx-auto" style={{ width: "18rem" }}>
                  <img
                    src={selectedItem.image}
                    className="card-img-top h-[300px]"
                    alt={selectedItem.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{selectedItem.name}</h5>
                    <p className="card-text">Price: ₹{selectedItem.price}</p>
                    <p className="card-text">Details: {selectedItem.details}</p>
                    <p className="card-text">Size: {selectedItem.size}</p>
                    <p className="card-text">Date: {selectedItem.date}</p>
                  </div>
                </div>
              ) : (
                <p>Loading product...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingTable;
