import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "tailwindcss/tailwind.css";
import SnackBar from "../Snackbar/SnackBar";

const ProductsListItem = () => {
  const [input, setInput] = useState(""); //updating the input
  const [array, setArray] = useState([]); //setting array to map the result of api call when onclick
  const [defaultArray, setDefaultArray] = useState([]); //setting array to map the result of api call in default
  const [active, setActive] = useState(false);

  //handlechange event for input tag
  const handleChange = (e) => {
    let Input = e.target.value;
    setInput(Input);
  };

  //when enter key is pressed
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    handleClick();
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
      setActive(true);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    console.log(array);
    array.length === 0 ? setActive(false) : setActive(true);
  }, [array]);

  useEffect(() => {
    defaultCall();
  });

  //default call api when page is loaded
  const defaultCall = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      setDefaultArray(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
          onClick={handleSubmit}
        />
      </div>
      {active ? (
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
      ) : (
        <div className="mt-2 max-w-7xl w-full bg-white py-3 font-ubuntu p-3">
          <p className="text-2xl font-semibold py-3 px-2">All Items</p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {defaultArray.map((def, index) => (
              <div
                className="basis-72 h-80 rounded-lg border-gray-400 flex flex-col justify-between gap-3 items-center p-3 cursor-pointer"
                key={index}
                style={{ borderWidth: "0.1px" }}
              >
                <div className="w-28 flex justify-center items-center">
                  <img
                    className="w-full h-full"
                    src={def.image}
                    alt={def.title}
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-center">{def.title}</p>
                  <p className="font-semibold">&#36; {def.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <SnackBar />
    </div>
  );
};

export default ProductsListItem;
