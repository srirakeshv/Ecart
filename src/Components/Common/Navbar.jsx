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
import NavbarVerticalMenu from "../Home/NavbarMenuList/NavbarVerticalMenu";

const Navbar = () => {
  const [hover, setHover] = useState(null);

  return (
    <nav className="bg-white flex justify-center relative">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <img
          className="w-12 h-12"
          src={`${process.env.PUBLIC_URL}/Asset/Logo/Logo.png`}
          alt="logo"
        />
        <ul className="flex items-center gap-7">
          <li
            className="p-3"
            onMouseEnter={() => setHover("Login")}
            onMouseLeave={() => setHover(null)}
          >
            <span
              className={`p-2 flex gap-1 items-center rounded-md ${
                hover === "Login"
                  ? "bg-blue-500 text-slate-50 cursor-pointer"
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
            {hover === "Login" ? <NavbarLogin /> : null}
          </li>
          <li className={`flex items-center gap-2`}>
            <ShoppingCart />
            Cart
          </li>
          <li className={`flex items-center gap-2`}>
            <Store />
            Become a Seller
          </li>
          <li
            className={`bg-red-300 p-2`}
            onMouseEnter={() => setHover("Dot")}
            onMouseLeave={() => setHover(null)}
          >
            <EllipsisVertical />
            {hover === "Dot" ? <NavbarVerticalMenu /> : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
