import React from "react";

const MarketPlace = () => {
  const categories = [
    {
      src: "https://images.pexels.com/photos/1097016/pexels-photo-1097016.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Road Bike",
    },
    {
      src: "https://images.pexels.com/photos/943500/pexels-photo-943500.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Mountain Bike",
    },
    {
      src: "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Commuter Bike",
    },
    {
      src: "https://images.pexels.com/photos/2387818/pexels-photo-2387818.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Gravel Bike",
    },
    {
      src: "https://images.pexels.com/photos/2994124/pexels-photo-2994124.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Electric Bike",
    },
    {
      src: "https://images.pexels.com/photos/3119957/pexels-photo-3119957.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fat Bike",
    },
    {
      src: "https://images.pexels.com/photos/20227336/pexels-photo-20227336/free-photo-of-road-in-the-middle-of-fields.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fixed Gear Bike",
    },
    {
      src: "https://images.pexels.com/photos/5589174/pexels-photo-5589174.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "BMX Bike",
    },
  ];

  return (
    <div className="container mt-16">
      <h2 className="font-light text-center text-2xl mb-4">
        Popular Categories
      </h2>
      <hr className="my-4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {categories.map((category, index) => (
          <div key={index} className="card-bike-category">
            <a href="#" className="d-block mb-4 h-100">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={category.src}
                alt={category.alt}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
