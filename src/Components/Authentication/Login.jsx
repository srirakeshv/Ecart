import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import TextField from "@mui/material/TextField";
import TransitionsSnackbar from "../Snackbar/SnackBar2";
import countryCurrencyMapping from "../../ArrayList/CountryCurrency";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";

const Login = () => {
  const [number, setNumber] = useState(""); //collecting number and upadating
  const [countryCode, setCountryCode] = useState(""); //setting country code
  const [userLocation, setUserLocation] = useState(null); //finding and setting user location
  const [phoneCode, setPhoneCode] = useState(""); //phone code of country
  const [active, setActive] = useState(false); //setting phone code active
  const [valid, setValid] = useState(""); //checking valid or not
  const [defaultActive, setDefaultActive] = useState(true); //setting default page false
  const [otpActive, setOtpActive] = useState(false); // setting otp page active

  //fetching user location for updating the price rates of the products
  useEffect(() => {
    const fetchUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          // console.log("User location:", {
          //   latitude: position.coords.latitude,
          //   longitude: position.coords.longitude,
          // });
        },
        (error) => {
          console.error("Error fetching user location:", error);
        }
      );
    };

    fetchUserLocation();
  }, []);

  //api call for converting current location to get iso code and the symbol of the currency
  useEffect(() => {
    myLocation();
  });

  const myLocation = async () => {
    try {
      if (userLocation) {
        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${userLocation.latitude}&lon=${userLocation.longitude}&apiKey=29b0964341b1449f8eb4a30a193fae10`
        );
        const data = await response.json();
        // console.log("country", data);
        const countrycode = data.features[0].properties.country_code;
        const concode = countrycode.toUpperCase();
        setCountryCode(concode);
        // console.log(countryCode);
        if (countryCode) {
          for (const country in countryCurrencyMapping) {
            if (country === countryCode) {
              // console.log(countryCurrencyMapping[country]);
              const cod = countryCurrencyMapping[country].phoneCode;
              setPhoneCode(cod);
            }
          }
        } else {
          console.log("no country");
        }
      }
    } catch (error) {
      console.log("Erroe", error);
    }
  };

  //checking the input value length for updating the active status
  useEffect(() => {
    setActive(number.length === 0 ? false : true);
  }, [number]);

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validNumber = isPossiblePhoneNumber(phoneCode + number);
    setValid(validNumber);
    if (validNumber) {
      setDefaultActive(false); // Set defaultActive to false only if validNumber is true
      setOtpActive(true); // Set otpActive to true
    }
    // console.log(valid);
  };

  return (
    <div
      className="flex justify-center font-ubuntu p-3 bg-grey1"
      style={{ minHeight: "87vh" }}
    >
      <div className="max-w-5xl w-full flex">
        <div className="bg-blue-600 w-2/4 p-8">
          <p className="text-2xl text-white font-semibold">Login</p>
          <p className="text-xl text-gray-300 mt-5">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/Asset/Signup/cart.png`}
            alt="CART"
          />
        </div>
        <div className="w-full bg-white p-8">
          {defaultActive && (
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="relative">
                <TextField
                  id="standard-basic"
                  label="Enter Mobile number"
                  variant="standard"
                  className="w-full"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  InputProps={{
                    style: { paddingLeft: active ? "40px" : "" },
                  }}
                />
                {active && (
                  <span className="absolute bottom-[5.6px] left-2">
                    {phoneCode}
                  </span>
                )}
              </div>
              <button className="bg-orange-500 w-full p-2 text-white text-xl mt-8">
                Request OTP
              </button>
            </form>
          )}{" "}
          {otpActive && (
            <div className="flex flex-col items-center mt-5">
              <p className="max-w-60 w-full text-center">
                Please enter the OTP sent to {number}.{" "}
                <span
                  className="text-blue-600 font-medium cursor-pointer"
                  onClick={() => {
                    setOtpActive(false);
                    setDefaultActive(true);
                  }}
                >
                  Change
                </span>
              </p>
              <form className="w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-red-600 text-white"
                />
                <button className="bg-blue-600 p-3 text-white w-full">
                  Verify
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* <TransitionsSnackbar
        set={valid ? true : false}
        setNumber={number ? number : "no"}
      /> */}
    </div>
  );
};

export default Login;
