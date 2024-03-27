import React from "react";
import MenuBar1 from "../../../ArrayList/MenuBarList";
import { ChevronDown, ChevronUp } from "lucide-react";
import "tailwindcss/tailwind.css";

const MenuBar = () => {
  return (
    <div
      className="p-2 font-ubuntu"
      style={{ maxWidth: "100vw", minHeight: "10vh" }}
    >
      <div className="bg-white w-full h-full">
        <div className="max-w-7xl w-full h-full flex gap-12 justify-center items-center">
          {MenuBar1.map((menu, index) => (
            <div key={index} className="flex flex-col gap-2 items-center pt-2">
              <div className="w-22 h-20">
                <img
                  src={`${process.env.PUBLIC_URL}${menu.imageurl}`}
                  alt={menu.Menuname}
                  className="w-full h-full"
                />
              </div>
              <p className={`p-2 flex items-center gap-1 font-medium`}>
                {menu.Menuname}
                <ChevronDown size={20} strokeWidth={2} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
