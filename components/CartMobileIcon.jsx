"use client";

import { useContext } from "react";
import { CartContext } from "@/CreateContex/CreateContex";
import { BsHandbagFill } from "react-icons/bs";

const CartMobileIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div className="bg-slate-700 w-[70px] h-[70px] rounded-full flex items-center justify-center text-white cursor-pointer fixed right-[4%] bottom-[3%]">
      <BsHandbagFill className="text-4xl" />
      {/* amount */}
      <span className="absolute flex items-center justify-center w-5 h-5 text-white rounded-full bottom-3 right-3 gradient">
        3
      </span>
    </div>
  );
};

export default CartMobileIcon;
