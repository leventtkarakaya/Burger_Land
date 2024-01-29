"use client";

import { useContext } from "react";

import { CartContext } from "@/CreateContex/CreateContex";

import CartTop from "./CartTop";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";

const CartMobile = () => {
  const { isOpen, cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white w-full h-full fixed left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}
    >
      {/* Top */}
      <CartTop />
      {/* cart items */}
      <div>
        {cart.map((burger, index) => {
          return <CartItem key={index} burger={burger} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};

export default CartMobile;
