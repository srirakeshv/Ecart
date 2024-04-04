import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import TextField from "@mui/material/TextField";
import { isPossiblePhoneNumber } from "libphonenumber-js";
import TransitionsSnackbar from "../Snackbar/SnackBar2";
import countryCurrencyMapping from "../../ArrayList/CountryCurrency";

const Signup = () => {
  const [number, setNumber] = useState(""); //collecting number and upadating
  const [hover, setHover] = useState(null); //setting hover status
  const [otp, setOtp] = useState(""); //otp updation
  const [valid, setValid] = useState(""); //checking valid or not
  const [countryCode, setCountryCode] = useState(""); //setting country code
  const [userLocation, setUserLocation] = useState(null); //finding and setting user location
  const [phoneCode, setPhoneCode] = useState(""); //phone code of country
  const [active, setActive] = useState(false); //setting phone code active

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validNumber = isPossiblePhoneNumber(phoneCode + number);
    setValid(validNumber);
    // console.log(valid);
  };

  useEffect(() => {
    console.log(number);
    // console.log(valid);
  }, [number]);

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
      <TransitionsSnackbar
        set={valid ? true : false}
        setNumber={number ? number : "no"}
      />
    </div>
  );
};

export default Signup;
