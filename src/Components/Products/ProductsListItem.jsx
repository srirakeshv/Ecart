import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "tailwindcss/tailwind.css";
import SnackBar from "../Snackbar/SnackBar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Skeleton from "@mui/material/Skeleton";
import countryCurrencyMapping from "../../ArrayList/CountryCurrency";

const ProductsListItem = () => {
  const [input, setInput] = useState(""); //updating the input
  const [array, setArray] = useState([]); //setting array to map the result of api call when onclick
  const [defaultArray, setDefaultArray] = useState([]); //setting array to map the result of api call in default
  const [active, setActive] = useState(false); //displaying the default array when the search is not typed
  const [showSnackBar, setShowSnackBar] = useState(false); //snackbar for showing error
  const [hover, setHover] = useState(null); //hover setting for the div
  const [loading, setLoading] = useState(true); //setting the skeleton before loading api contents
  const [loading1, setLoading1] = useState(true); //setting the skeleton before loading api contents
  const [userLocation, setUserLocation] = useState(null); //finding and setting user location
  const [countryCode, setCountryCode] = useState(""); //setting and updating country code
  const [symbol, setSymbol] = useState(""); //setting dynamic symbols for different locations
  const [curency, setCurrency] = useState(""); //setting dynamic currency based on location
  const [convertingPrice, setConvertingPrice] = useState(""); //setting the price of currency based on location equal to 1 dollar

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
      // console.log(data);
      myLocation();
      exchangeCurrency();
      setTimeout(() => {
        setLoading1(false);
      }, 3000);
      setArray(data); //setting fetched data to setarray
      setActive(true);
      setShowSnackBar(data.length === 0);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    // console.log(array);
    array.length === 0 ? setActive(false) : setActive(true); //checking for default display
  }, [array]);

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
              const cur = countryCurrencyMapping[country].code;
              const sy = countryCurrencyMapping[country].symbol;
              setCurrency(cur);
              setSymbol(sy);
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

  //api call gives rate for all currencies equal to 1 dollar
  useEffect(() => {
    exchangeCurrency();
  });

  const exchangeCurrency = async () => {
    try {
      if (curency) {
        const response = await fetch(`https://open.er-api.com/v6/latest/USD`);
        const data = await response.json();
        // console.log("hi", data);
        const updatedprice = data.rates[curency]; //passing the currency which we get using loaction
        setConvertingPrice(updatedprice);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  //for default call of the products in case no input in search bar
  useEffect(() => {
    defaultCall();
  });

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

  //default call api when page is loaded
  const defaultCall = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log("p", data);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
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
        <div className="mt-2 max-w-7xl w-full flex gap-4">
          <div className="mt-2 w-96 bg-white"></div>
          <div className="mt-2 bg-white flex flex-col flex-wrap py-3">
            {array.map((ar, index) => (
              <div
                className={`min-h-96 flex gap-8 items-center justify-between border-gray-300 p-3 px-5 cursor-pointer`}
                key={index}
                style={{
                  borderBottomWidth:
                    index === array.length - 1 ? "0px" : "0.1px",
                }}
                onMouseEnter={() => setHover(ar.id)}
                onMouseLeave={() => setHover(null)}
              >
                <div className="relative h-full">
                  {loading1 ? (
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={210}
                      height={280}
                    />
                  ) : (
                    <img
                      className="w-44 mt-6"
                      src={ar.image}
                      alt={ar.category}
                    />
                  )}
                  <FavoriteIcon
                    fontSize="small"
                    className="absolute top-0 right-0 z-10 text-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-3 self-start flex-1">
                  {loading1 ? (
                    <Skeleton
                      variant="text"
                      className="w-full flex-1"
                      animation="wave"
                      sx={{ fontSize: "1rem" }}
                    />
                  ) : (
                    <p
                      className={`text-lg font-semibold ${
                        hover === ar.id ? "text-blue-600" : "text-black"
                      }`}
                    >
                      {ar.title}
                    </p>
                  )}
                  {loading1 ? (
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={50}
                      height={30}
                    />
                  ) : (
                    <p
                      className={`flex gap-1 items-center justify-center p-1 rounded-md text-white w-16 ${
                        ar.rating.rate >= 3.5
                          ? "bg-green-700"
                          : ar.rating.rate < 3.5 && ar.rating.rate >= 2.5
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    >
                      {ar.rating.rate}
                      <StarBorderIcon fontSize="small" />
                    </p>
                  )}
                  {loading1 ? (
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={370}
                      height={270}
                    />
                  ) : (
                    <p>{ar.description}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1 self-start flex-1">
                  {loading1 ? (
                    <Skeleton
                      variant="text"
                      className=""
                      animation="wave"
                      width={100}
                      sx={{ fontSize: "3rem" }}
                    />
                  ) : (
                    <p className="font-medium self-start text-2xl">
                      {symbol} {(ar.price * convertingPrice).toFixed(2)}
                    </p>
                  )}
                  {loading1 ? (
                    <Skeleton
                      variant="text"
                      className="w-full flex-1"
                      animation="wave"
                      width={200}
                      sx={{ fontSize: "1rem" }}
                    />
                  ) : (
                    <p className="text-sm">Free delivery</p>
                  )}
                  {loading1 ? (
                    <Skeleton
                      variant="text"
                      className="w-full"
                      animation="wave"
                      width={200}
                      sx={{ fontSize: "1rem" }}
                    />
                  ) : (
                    <p className="text-sm text-green-600 font-semibold">
                      Save extra with combo offers
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
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
                {loading ? (
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={210}
                    height={190}
                  />
                ) : (
                  <div className="w-28 flex justify-center items-center">
                    <img
                      className="w-full h-full"
                      src={def.image}
                      alt={def.title}
                    />
                  </div>
                )}
                <div className="flex flex-col items-center gap-1 w-full">
                  {loading ? (
                    <Skeleton
                      variant="text"
                      className="w-full"
                      animation="wave"
                      sx={{ fontSize: "1rem" }}
                    />
                  ) : (
                    <p className="text-sm text-center">{def.title}</p>
                  )}
                  {loading ? (
                    <Skeleton
                      variant="text"
                      className="w-full"
                      animation="wave"
                      sx={{ fontSize: "1rem" }}
                    />
                  ) : (
                    <p className="font-semibold">
                      {symbol} {(def.price * convertingPrice).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <SnackBar open={showSnackBar} />
    </div>
  );
};

export default ProductsListItem;
