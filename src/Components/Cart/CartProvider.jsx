import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [symbol, setSymbol] = useState(""); // Add symbol state
  const [price, setPrice] = useState(""); // Add price state

  const addToCart = (item, symbol, price) => {
    setCartItems([...cartItems, item]);
    setSymbol(symbol); // Set symbol
    setPrice(price); // Set price
  };

  return (
    <CartContext.Provider value={{ cartItems, symbol, price, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
