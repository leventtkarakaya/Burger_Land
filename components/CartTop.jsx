import { useContext } from "react";

import { IoCloseOutline } from "react-icons/io5";

import { CartContext } from "@/CreateContex/CreateContex";

const CartTop = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between w-full h-20 px-10 border-b">
      {/* Shopping bag text */}
      <div className="font-semibold">Shopping Bag (2)</div>
      {/* close icom */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl transition-all duration-300 group-hover:scale-110 " />
      </div>
    </div>
  );
};

export default CartTop;
