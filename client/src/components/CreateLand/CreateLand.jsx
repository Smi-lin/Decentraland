import React, { useState } from 'react';

const CreateLand = ({ createLand }) => {
  const [name, setName] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [size, setSize] = useState('');
  const [tokenURI, setTokenURI] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createLand(name, x, y, size, tokenURI);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Land</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Land Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter land name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="x">
              X Coordinate
            </label>
            <input
              id="x"
              type="number"
              placeholder="Enter X coordinate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={x}
              onChange={(e) => setX(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="y">
              Y Coordinate
            </label>
            <input
              id="y"
              type="number"
              placeholder="Enter Y coordinate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={y}
              onChange={(e) => setY(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
              Size
            </label>
            <input
              id="size"
              type="number"
              placeholder="Enter size"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokenURI">
              Token URI
            </label>
            <input
              id="tokenURI"
              type="text"
              placeholder="Enter token URI"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={tokenURI}
              onChange={(e) => setTokenURI(e.target.value)}
              required
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
    </div>
  );
};

export default CreateLand;
