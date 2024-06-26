import React from "react";
import "tailwindcss/tailwind.css";
import ProductList from "../../../ArrayList/ProductList";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
  const navigate=useNavigate()
  //shuffling the arraylist
  const shufflearray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArray = shufflearray(ProductList[0].Products); //passing as argument
  const randomGeneratedArray = shuffledArray.slice(0, 5); //slicing required number of products

  return (
    <div className="py-3 px-4 font-ubuntu">
      <div className="bg-white py-3">
        <p className="text-3xl font-semibold pl-3 pb-2">Mobiles</p>
        <div className="flex gap-2 flex-wrap justify-between bg-white px-3 py-3">
          {randomGeneratedArray.map((product, index) => (
            <div
              key={index}
              className="cursor-pointer p-2 rounded-lg flex flex-col items-center border-gray-300 basis-60"
              style={{ borderWidth: "0.1px" }}
              onClick={()=>navigate("/ProductPage")}
            >
              <img
                src={`${process.env.PUBLIC_URL}${product.ImageUrl}`}
                alt={product.Mobilename}
                className="w-44"
              />
              <p className="mt-3">
                {product.Mobilename} {product.Modelname}
              </p>
              <p className="font-semibold">&#8377; {product.Price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
