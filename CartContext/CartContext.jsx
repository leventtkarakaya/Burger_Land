"use client";

import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  // cart total state
  const [cartTotal, setCartTotal] = useState(0);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        setCart,
        itemAmount,
        setItemAmount,
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CardProvider;
