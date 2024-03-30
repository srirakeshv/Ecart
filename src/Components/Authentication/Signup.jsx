import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import TextField from "@mui/material/TextField";

const Signup = () => {
  const [number, setNumber] = useState(""); //collecting number and upadating

  //   const handleSubmit = () => {};

  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div
      className="flex justify-center font-ubuntu p-3 bg-grey1"
      style={{ minHeight: "87vh" }}
    >
      <div className="max-w-5xl w-full flex">
        <div className="bg-blue-600 w-2/4 p-8">
          <p className="text-2xl text-white font-semibold">
            Looks Like You're new here!
          </p>
          <p className="text-xl text-gray-300 mt-5">
            Signup with your mobile number to get started
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/Asset/Signup/cart.png`}
            alt="CART"
          />
        </div>
        <div className="w-full bg-white p-8">
          <form className="w-full">
            <TextField
              id="standard-basic"
              label="Enter Mobile number"
              variant="standard"
              className="w-full"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button className="bg-orange-500 w-full p-2 text-white text-xl mt-8">
              Continue
            </button>
          </form>
          <button className="mt-3 w-full p-2 text-xl text-blue-500 shadow-md shadow-slate-300">
            Existing user? Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
