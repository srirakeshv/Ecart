import React from "react";
import {
  Store,
  Megaphone,
  Gift,
  BadgeHelp,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import "tailwindcss/tailwind.css";

const Footer = () => {
  //imagesarray for payment
  const imageArray = [
    "/Asset/Footer/visa.jpg",
    "/Asset/Footer/mastercard.jpg",
    "/Asset/Footer/rupay.png",
    "/Asset/Footer/discover.jpg",
  ];

  //menu items for footer section
  const menuItems = [
    {
      menuname: "ABOUT",
      menus: [
        "Contact Us",
        "About Us",
        "Careers",
        "Stories",
        "Press",
        "Corporate Information",
      ],
    },
    {
      menuname: "GROUP COMPANIES",
      menus: ["Comapany1", "Comapany2", "Company3", "Comapany4"],
    },
    {
      menuname: "HELP",
      menus: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"],
    },
    {
      menuname: "CONSUMER POLICY",
      menus: [
        "Cancellation & Returns",
        "Terms Of Use",
        "Security",
        "Privacy",
        "Sitemap",
        "EPR Compilance",
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 text-white flex flex-col items-center font-ubuntu py-3">
      <div className="max-w-7xl w-full p-3 flex flex-wrap justify-between gap-3 text-sm">
        {menuItems.map((menus, index) => (
          <ul className="basis-64" key={index}>
            <li className="text-gray-500 mb-3">{menus.menuname}</li>
            {menus.menus.map((item, index) => (
              <li key={index} className="font-medium">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="max-w-7xl w-full my-2 mb-3">
        <p className="text-center text-gray-500">Social</p>
        <div className="flex gap-2 items-center justify-center mt-2">
          <Instagram />
          <Youtube />
          <Facebook />
        </div>
      </div>
      <div
        className=" border-gray-500 w-full flex justify-center"
        style={{ borderTopWidth: "0.1px" }}
      >
        <div className="max-w-7xl w-full p-3">
          <div className="w-full flex items-center justify-between">
            <p className="flex gap-2 items-center text-sm">
              <Store color="yellow" size={13} strokeWidth={1} /> Become a seller
            </p>
            <p className="flex gap-2 items-center text-sm">
              <Megaphone color="yellow" size={13} strokeWidth={1} /> Advertise
            </p>
            <p className="flex gap-2 items-center text-sm">
              <Gift color="yellow" size={13} strokeWidth={1} /> Gift Cards
            </p>
            <p className="flex gap-2 items-center text-sm">
              <BadgeHelp color="yellow" size={13} strokeWidth={1} /> Help
            </p>
            <p className="text-sm">&copy; 2007 - 2024 Ecart.com</p>
            <div className="flex gap-1 items-center">
              {imageArray.map((image, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}${image}`}
                  alt="logo-bank"
                  className="w-10 h-6"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
