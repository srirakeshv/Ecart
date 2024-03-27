import React, { useState } from "react";
import { Bell, Headset, Megaphone, Download } from "lucide-react";
import "tailwindcss/tailwind.css";

const NavbarVerticalMenu = () => {
  const [hoverMenu1, setHoverMenu1] = useState(null);

  return (
    <div className="absolute top-[53px] right-14 z-10 bg-white shadow-md shadow-slate-700 rounded-md min-w-44 font-ubuntu">
      <ul className="flex flex-col">
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu1 === "Notify" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu1("Notify")}
          onMouseLeave={() => setHoverMenu1(null)}
        >
          <Bell size={20} strokeWidth={1} />
          notification preferences
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu1 === "customercare"
              ? "bg-gray-100 cursor-pointer"
              : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu1("customercare")}
          onMouseLeave={() => setHoverMenu1(null)}
        >
          <Headset size={20} strokeWidth={1} />
          24x7 Customer Care
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu1 === "ad" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu1("ad")}
          onMouseLeave={() => setHoverMenu1(null)}
        >
          <Megaphone size={20} strokeWidth={1} />
          Advertise
        </li>
        <li
          className={`flex gap-2 items-center px-3 py-2 ${
            hoverMenu1 === "app" ? "bg-gray-100 cursor-pointer" : "bg-white"
          }`}
          onMouseEnter={() => setHoverMenu1("app")}
          onMouseLeave={() => setHoverMenu1(null)}
        >
          <Download size={20} strokeWidth={1} />
          Download App
        </li>
      </ul>
    </div>
  );
};

export default NavbarVerticalMenu;
