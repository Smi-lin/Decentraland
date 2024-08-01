import React, { useEffect, useState } from "react";

const MarketPlace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("land")) || [];
    setItems(storedItems);
  }, []);

  const handleDeleteItem = (itemId) => {
    const confirmed = window.confirm(
      "Are you sure you want to Buy this item?"
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
                className="bg-white p-4 rounded-lg shadow-lg w-[35rem] max-h-[40rem] overflow-auto border"
              >
                <div className="flex justify-between gap-[3rem]">
                {imageUrl && <img src={imageUrl} alt={name} className="mt-4 w-[20rem] h-[15rem]" />}
                 <div className="mt-8 text-[1.2rem]">
                 <p className="font-bold">Name: {name}</p>
                  <p>X: {x}</p>
                  <p>Y: {y}</p>
                  <p>Size: {size}</p>
                  <p>Token URI: {tokenURI}</p>
                 
                 </div>
               
                </div>
                <div>
                <p className="text-1.5xl"><span className="font-bold text-[2rem]">Description:</span> {description}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleDeleteItem(id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded mr-[15rem]"
                  >
                    Buy
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