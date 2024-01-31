import Image from "next/image";

import { BiMinus, BiPlus } from "react-icons/bi";

import { IoCloseOutline } from "react-icons/io5";

const CartItem = ({ burger }) => {
  console.log(burger.souceAdditional);
  return (
    <div className="container select-none">
      <div className="flex py-2 mb-2 gap-x-4">
        {/* image */}
        <div className="flex items-center justify-center">
          <Image
            src={burger.image}
            alt="burger"
            width={90}
            height={90}
            priority={1}
          />
        </div>
        {/* pizza info */}
        <div className="flex flex-col flex-1 gap-y-1">
          {/* name */}
          <div className="text-lg font-bold capitalize">{burger.name}</div>
          <div className="flex flex-col gap-y-1 ">
            {/* crust */}
            <div className="capitalize font-medium text-[15px]">
              {burger.crust} Hamur
            </div>
            {/* size */}
            <div className="capitalize mb-2 font-medium text-[15px]">
              {burger.size}, paket
            </div>
            {/* controls */}
            <div className="flex items-center gap-x-2">
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white rounded-full gradient">
                <BiMinus />
              </div>
              <div className="font-semibold flex flex-1 max-w-[30px] justify-center items-center text-lg">
                {burger.amount}
              </div>
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white rounded-full gradient">
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        {/* remove item */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center self-end justify-center text-2xl text-orange-300 transition-all duration-100 cursor-pointer hover:scale-110">
            <IoCloseOutline />
          </div>
          {/* price */}
          <div>
            <span className="text-[17px] font-medium font-robotoCondensed">
              {parseFloat(burger.price * burger.amount).toFixed(2)} TL
            </span>
          </div>
        </div>
      </div>
      {/* souce */}
      <div className="flex flex-wrap">
        <div className="flex flex-wrap flex-1 gap-4 p-1 font-semibold ">
          Burger Sos :{" "}
          {burger.souceAdditional.length === 0 && "Sos Eklenmemiştir"}
          {burger.souceAdditional.map((souce, index) => {
            return (
              <div
                key={index}
                className="px-3 py-1 text-sm font-medium leading-none capitalize rounded-full gradient"
              >
                {souce.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
