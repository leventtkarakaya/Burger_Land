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
    souceAdditional.sort((a, b) => a.name.localeCompare(b.name));
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
    const foundIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.price === price &&
        item.size === size &&
        JSON.stringify(item.souceAdditional) ===
          JSON.stringify(souceAdditional) &&
        item.crust === crust
    );
    if (foundIndex !== -1) {
      const newCart = [...cart];
      newCart[foundIndex].amount += 1;
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, AddToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
