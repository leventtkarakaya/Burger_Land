"use client";

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  // Cart Totol state
  const [cartTotal, setCartTotal] = useState(0);
  // Item Amount state
  const [itemAmount, setItemAmount] = useState(0);

  useEffect(() => {
    const newItem = cart.reduce((a, b) => {
      return a + b.amount;
    }, 0);
    setItemAmount(newItem);
  }, [setCartTotal, cart]);

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
  // remove item
  const removeItem = (id, price, crust) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price && item.crust === crust
    );
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };
  // increase amount
  const increaseAmount = (id, price) => {
    const increase = cart.findIndex(
      (item) => item.id === id && item.price === price
    );
    if (increase !== -1) {
      const newItem = [...cart];
      newItem[increase].amount += 1;
      setCart(newItem);
    }
  };
  // decrease amount
  const decreaseAmount = (id, price) => {
    const decrease = cart.findIndex(
      (item) => item.id === id && item.price === price
    );
    if (decrease !== -1) {
      const newCart = [...cart];
      if (newCart[decrease].amount > 1) {
        newCart[decrease].amount -= 1;
        setCart(newCart);
      }
    }
  };
  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        AddToCart,
        cart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CardProvider;
