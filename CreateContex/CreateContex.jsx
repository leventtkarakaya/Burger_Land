"use client";

import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  // add to cart
  const AddToCart = (id, image, name, price, souceAdditional, size, crust) => {
    // alphabetical sorting
    souceAdditional.sort((a, b) => a.name.localeCompare(b.name));
    // new item
    const newItem = {
      id,
      image,
      name,
      price,
      souceAdditional,
      size,
      crust,
      amount: 1,
    };
    setCart([...cart, newItem]);
  };
  console.log(cart);
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, AddToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
