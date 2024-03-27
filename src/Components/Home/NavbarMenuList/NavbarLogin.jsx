import React, { useState } from "react";
import {
  CircleUserRound,
  Package,
  Heart,
  Gift,
  CreditCard,
} from "lucide-react";

const NavbarLogin = () => {
  const [hoverMenu, setHoverMenu] = useState(null);

  return (
    <div className="absolute top-[50px] right-80 z-10 w-60 rounded-md shadow-sm shadow-slate-700 bg-white">
      <ul className="flex flex-col">
        <li
          className={`flex justify-between items-center p-3 border-b-2 border-slate-300`}
        >
          <span>New customer</span>
          <span className="text-blue-500">Sign Up</span>
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Profile" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Profile")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <CircleUserRound size={20} /> My Profile
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Orders" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Orders")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <Package size={20} /> Orders
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Wishlist" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Wishlist")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <Heart size={20} /> Wishlist
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Rewards" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Rewards")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <Gift size={20} /> Rewards
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu === "Gift" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu("Gift")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <CreditCard size={20} /> Gift Cards
        </li>
      </ul>
    </div>
  );
};

export default NavbarLogin;
