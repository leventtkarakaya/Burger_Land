import Image from "next/image";

import { BiMinus, BiPlus } from "react-icons/bi";

import { IoCloseOutline } from "react-icons/io5";

const CartItem = ({ burger }) => {
  return (
    <div className="bg-indigo-600">
      <div>
        {/* image */}
        <div>
          {JSON.stringify(burger.name)}
          {/* <Image src={burger.image} width={90} height={90} alt="burger" /> */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
