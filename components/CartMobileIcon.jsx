"use client";

import { useContext } from "react";
import { CartContext } from "@/CreateContex/CreateContex";
import { BsHandbagFill } from "react-icons/bs";

const CartMobileIcon = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-slate-700 w-[70px] h-[70px] rounded-full flex items-center justify-center text-white cursor-pointer fixed right-[4%] bottom-[3%] lg:hidden"
    >
      <BsHandbagFill className="text-4xl" />
      {/* amount */}
      <span className="absolute flex items-center justify-center w-5 h-5 text-white rounded-full bottom-3 right-3 gradient">
        {itemAmount}
      </span>
    </div>
  );
};

export default CartMobileIcon;
