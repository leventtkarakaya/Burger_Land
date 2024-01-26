import { useEffect, useState } from "react";

import Image from "next/image";

import { IoMdCheckmark } from "react-icons/io";

const Souce = ({ souce, souceAdditional, setSouceAdditional }) => {
  // checked state
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`${
        isChecked && "border-red-400"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        src={souce.image}
        width={70}
        height={70}
        alt="souce"
        priority={1}
      />
      {/* souce name */}
      <div className="text-sm capitalize text-center font-medium">
        {souce.name}
      </div>
      {/* checkbox */}
      <input type="checkbox" checked={isChecked} />
      {/* chackmark icon */}
      <div className={`${isChecked ? "opacity-100" : "opacity-0"}`}>
        <IoMdCheckmark className="text-xl text-red-400" />
      </div>
    </div>
  );
};
export default Souce;
