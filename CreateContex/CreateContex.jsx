"use client";

import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
