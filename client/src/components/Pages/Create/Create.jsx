import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    x: "",
    y: "",
    description: "",
    size: "",
    tokenURI: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmLand = async () => {
    try {
      const lands = JSON.parse(localStorage.getItem("land")) || [];
      const newLand = { ...formData, id: Date.now(), imageUrl: file ? URL.createObjectURL(file) : '' };

      lands.push(newLand);
      localStorage.setItem("land", JSON.stringify(lands));

      setFormData({
        name: "",
        x: "",
        y: "",
        description: "",
        size: "",
        tokenURI: "",
        imageUrl: "",
      });
      setFile(null);
      console.log("Land created successfully!");
      navigate("/marketplace");

      setTimeout(() => {
        const updatedLand = JSON.parse(localStorage.getItem("land")) || [];
        const updatedLandList = updatedLand.filter(
          (land) => land.id !== newLand.id
        );

        localStorage.setItem("land", JSON.stringify(updatedLandList));
        console.log("Land deleted successfully after 10 minutes.");
      }, 10 * 60 * 1000);
    } catch (error) {
      console.error("Error creating Land:", error);
    }
  };

  const cancelLand = () => {
    setShowConfirmation(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center mt-[2rem]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Land</h2>

        <form onSubmit={handleSubmit}>
          {/* Label Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Label Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter land name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* X Coordinate */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="x"
            >
              X Coordinate
            </label>
            <input
              id="x"
              name="x"
              type="number"
              placeholder="Enter X coordinate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.x}
              onChange={handleChange}
              required
            />
          </div>

          {/* Y Coordinate */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="y"
            >
              Y Coordinate
            </label>
            <input
              id="y"
              name="y"
              type="number"
              placeholder="Enter Y coordinate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.y}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              cols="30"
              required
              rows="8"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
              placeholder="Enter your Land Description..."
            ></textarea>
          </div>

          {/* Size */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="size"
            >
              Size
            </label>
            <input
              id="size"
              name="size"
              type="number"
              placeholder="Enter size"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.size}
              onChange={handleChange}
              required
            />
          </div>

          {/* Token URI */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tokenURI"
            >
              Token URI
            </label>
            <input
              id="tokenURI"
              name="tokenURI"
              type="text"
              placeholder="Enter token URI"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.tokenURI}
              onChange={handleChange}
              required
            />
          </div>

          {/* Upload Image */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="file"
            >
              Upload Image
            </label>
            <input
              id="file"
              type="file"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleFileChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Land
            </button>
          </div>
        </form>
      </div>

      {showConfirmation && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
          <p className="mb-4">Are you sure you want to create this Land?</p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={confirmLand}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Yes
            </button>
            <button
              onClick={cancelLand}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              No
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Create;