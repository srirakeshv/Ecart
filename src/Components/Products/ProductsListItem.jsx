import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "tailwindcss/tailwind.css";
import SnackBar from "../Snackbar/SnackBar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Skeleton from "@mui/material/Skeleton";

const ProductsListItem = () => {
  const [input, setInput] = useState(""); //updating the input
  const [array, setArray] = useState([]); //setting array to map the result of api call when onclick
  const [defaultArray, setDefaultArray] = useState([]); //setting array to map the result of api call in default
  const [active, setActive] = useState(false); //displaying the default array when the search is not typed
  const [showSnackBar, setShowSnackBar] = useState(false); //snackbar for showing error
  const [hover, setHover] = useState(null); //hover setting for the div
  const [loading, setLoading] = useState(true); //setting the skeleton before loading apui contents
  const [userLocation, setUserLocation] = useState(null); //finding and setting user loaction

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
      setArray(data); //setting fetched data to setarray
      setActive(true);
      setShowSnackBar(data.length === 0);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    console.log(array);
    array.length === 0 ? setActive(false) : setActive(true); //checking for default display
  }, [array]);

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
          console.log("User location:", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
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
      // console.log(data);
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
                  <img className="w-44 mt-6" src={ar.image} alt={ar.category} />
                  <FavoriteIcon
                    fontSize="small"
                    className="absolute top-0 right-0 z-10 text-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-3 self-start flex-1">
                  <p
                    className={`text-lg font-semibold ${
                      hover === ar.id ? "text-blue-600" : "text-black"
                    }`}
                  >
                    {ar.title}
                  </p>
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
                  <p>{ar.description}</p>
                </div>
                <div className="flex flex-col gap-1 self-start flex-1">
                  <p className="font-medium self-start text-2xl">
                    &#36; {ar.price}
                  </p>
                  <p className="text-sm">Free delivery</p>
                  <p className="text-sm text-green-600 font-semibold">
                    Save extra with combo offers
                  </p>
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
                    <p className="font-semibold">&#36; {def.price}</p>
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
