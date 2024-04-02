import React, { useState } from "react";
import NavbarLogin from "../Home/NavbarMenuList/NavbarLogin";
import {
  UserRound,
  ShoppingCart,
  Store,
  EllipsisVertical,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "tailwindcss/tailwind.css";
import NavbarVerticalMenu from "../Home/NavbarMenuList/NavbarVerticalMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleMenuClick = (menuText) => {
    setSelectedMenu(menuText);
  };

  return (
    <nav className="bg-white flex justify-center relative font-ubuntu">
      <div className="max-w-7xl w-full flex justify-between items-center px-2">
        <img
          className="w-12 h-12 cursor-pointer"
          src={`${process.env.PUBLIC_URL}/Asset/Logo/Logo.png`}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <ul className="flex items-center gap-7">
          <li
            className="p-3"
            onMouseEnter={() => setHover("Login")}
            onMouseLeave={() => setHover(null)}
            onClick={() => navigate("/login")}
          >
            <span
              className={`p-2 flex gap-1 items-center rounded-md ${
                hover === "Login"
                  ? "bg-blue-700 text-slate-50 cursor-pointer"
                  : "text-slate-950"
              }`}
            >
              <UserRound />
              Login
              {hover === "Login" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </span>
            {hover === "Login" ? (
              <NavbarLogin onClick={handleMenuClick} />
            ) : null}
          </li>
          <li
            className={`flex items-center gap-2 cursor-pointer`}
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart />
            Cart
          </li>
          <li
            className={`flex items-center gap-2 cursor-pointer`}
            onClick={() => navigate("/ProductPage")}
          >
            <Store />
            Become a Seller
          </li>
          <li
            className={`p-2 rounded-md border-2 ${
              hover === "Dot"
                ? " border-gray-200 bg-gray-100 cursor-pointer"
                : "border-white"
            }`}
            onMouseEnter={() => setHover("Dot")}
            onMouseLeave={() => setHover(null)}
          >
            <EllipsisVertical />
            {hover === "Dot" ? <NavbarVerticalMenu /> : null}
          </li>
        </ul>
      </div>
      {selectedMenu && (
        <div>
          {selectedMenu === "signup" && navigate("/signup")}
          {/* {selectedMenu === "Orders" && navigate("/orders")} */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
