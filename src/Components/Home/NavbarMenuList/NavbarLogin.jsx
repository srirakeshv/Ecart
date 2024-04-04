import React, { useState } from "react";
import {
  CircleUserRound,
  Package,
  Heart,
  Gift,
  CreditCard,
} from "lucide-react";
import "tailwindcss/tailwind.css";
// import { useNavigate } from "react-router-dom";

const NavbarLogin = ({ onClick }) => {
  const [hoverMenu, setHoverMenu] = useState(null); //hover setting
  // const navigate = useNavigate(); //navigating to another page

  return (
    <div className="absolute top-[50px] right-80 z-10 w-60 rounded-md shadow-sm shadow-slate-700 bg-white font-ubuntu">
      <ul className="flex flex-col">
        <li
          className={`flex justify-between items-center p-3 border-b-2 border-slate-300`}
        >
          <span>New customer</span>
          <span
            className="text-blue-700 font-semibold cursor-pointer"
            onClick={() => onClick("signup")}
          >
            Sign Up
          </span>
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Profile" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Profile")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <CircleUserRound strokeWidth={1} size={20} /> My Profile
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Orders" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Orders")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <Package strokeWidth={1} size={20} /> Orders
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Wishlist" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Wishlist")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <Heart strokeWidth={1} size={20} /> Wishlist
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Rewards" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Rewards")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <Gift strokeWidth={1} size={20} /> Rewards
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Gift" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Gift")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <CreditCard strokeWidth={1} size={20} /> Gift Cards
        </li>
      </ul>
    </div>
  );
};

export default NavbarLogin;
