import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "tailwindcss/tailwind.css";

const ProductsListItem = () => {
  const [input, setInput] = useState(""); //updating the input
  const [array, setArray] = useState([]);

  //handlechange event for input tag
  const handleChange = (e) => {
    let Input = e.target.value;
    setInput(Input);
  };

  //handleclick event for search option
  const handleClick = async () => {
    try {
      setInput("");
      const categoryName = input.toLowerCase();
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data);
      setArray(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    console.log(array);
  }, [array]);

  return (
    <div className="bg-grey1 p-3 flex flex-col items-center font-ubuntu">
      <div className="relative max-w-7xl w-full">
        <input
          type="text"
          className="w-full p-2 px-5 rounded-full focus:outline-none"
          onChange={handleChange}
          value={input}
        />
        <Search
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          size={20}
          color="blue"
          onClick={handleClick}
        />
      </div>
      <div className="mt-2 max-w-7xl w-full bg-white flex flex-col flex-wrap py-3">
        {array.map((ar, index) => (
          <div
            className="h-96 flex gap-3 items-center justify-between border-gray-300 p-3"
            key={index}
            style={{
              borderBottomWidth: index === array.length - 1 ? "0px" : "0.1px",
            }}
          >
            <img className="w-44" src={ar.image} alt={ar.category} />
            <div className="flex flex-col gap-1">
              <p>{ar.title}</p>
              <p className="font-semibold self-start">&#36; {ar.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListItem;
