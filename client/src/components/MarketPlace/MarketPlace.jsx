import React, { useEffect, useState } from "react";

const MarketPlace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("land")) || [];
    setItems(storedItems);
  }, []);

  const handleDeleteItem = (itemId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      try {
        const updatedItems = items.filter((item) => item.id !== itemId);
        localStorage.setItem("land", JSON.stringify(updatedItems));
        setItems(updatedItems);
        console.log("Item deleted.");
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-[3rem] font-bold mt-[5rem] text-center mb-[3rem]">
          MarketPlace
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {items.map(
            (
              { id, name, x, y, size, tokenURI, imageUrl, description },
              idx
            ) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-lg w-[20rem] max-h-[30rem] overflow-auto border"
              >
                <div>
                  <p className="font-bold">Name: {name}</p>
                  <p>X: {x}</p>
                  <p>Y: {y}</p>
                  <p>Size: {size}</p>
                  <p>Token URI: {tokenURI}</p>
                  <p>Description: {description}</p>
                  <img src={imageUrl} alt={name} className="mt-4 w-full"/>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleDeleteItem(id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-[5rem]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
