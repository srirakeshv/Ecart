import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import TextField from "@mui/material/TextField";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import TransitionsSnackbar from "../Snackbar/SnackBar2";

const Signup = () => {
  const [number, setNumber] = useState(""); //collecting number and upadating
  const [hover, setHover] = useState(null); //setting hover status
  const [otp, setOtp] = useState(""); //otp updation
  const [valid, setValid] = useState(""); //checking valid or not

  const handleSubmit = (e) => {
    e.preventDefault();
    const validNumber = isPossiblePhoneNumber(number);
    setValid(validNumber);
    // console.log(valid);
  };

  useEffect(() => {
    console.log(number);
    // console.log(valid);
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
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="relative">
              <TextField
                id="standard-basic"
                label="Enter Mobile number"
                variant="standard"
                className="w-full"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {valid && (
                <p
                  className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-600 font-medium ${
                    hover === "change" ? "underline cursor-pointer" : ""
                  }`}
                  onMouseEnter={() => setHover("change")}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => {
                    setValid(false);
                    setNumber("");
                  }}
                >
                  change?
                </p>
              )}
            </div>
            {valid && (
              <div className="flex justify-between items-center mt-7 mb-2">
                <p className="text-sm">OTP sent to Mobile</p>
                <p
                  className={` text-blue-600 font-medium ${
                    hover === "resend" ? "underline cursor-pointer" : ""
                  }`}
                  onMouseEnter={() => setHover("resend")}
                  onMouseLeave={() => setHover(null)}
                >
                  Resend?
                </p>
              </div>
            )}
            {valid && (
              <TextField
                id="standard-basic"
                label="Enter OTP"
                variant="standard"
                className="w-full"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
            <button className="bg-orange-500 w-full p-2 text-white text-xl mt-8">
              {valid ? "Signup" : "Continue"}
            </button>
          </form>
          <button className="mt-3 w-full p-2 text-xl text-blue-600 shadow-md shadow-slate-300">
            Existing user? Log in
          </button>
        </div>
      </div>
      <TransitionsSnackbar />
    </div>
  );
};

export default Signup;
