import React, { useEffect } from "react";
import { useCart } from "./CartProvider";
import "tailwindcss/tailwind.css";

const Cart = () => {
  const { cartItems, symbol, price } = useCart();

  // useEffect(() => {
  //   console.log(symbol);
  //   console.log(price);
  // }, [symbol, price]);

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="bg-grey1 flex justify-center p-4 font-ubuntu"
    >
      <div className="max-w-6xl w-full flex flex-col gap-3">
        {cartItems.map((item, index) => (
          <div className="shadow-sm shadow-slate-300 bg-white rounded-md flex gap-3 p-3 py-5">
            <div className="w-40 h-40">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold text-xl">{item.title}</p>
              <p>
                {symbol} {(item.price * price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
