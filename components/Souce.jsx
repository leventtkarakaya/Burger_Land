/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Image from "next/image";

import { IoMdCheckmark } from "react-icons/io";

const Souce = ({ souce, souceAdditional, setSouceAdditional }) => {
  // checked state
  const [isChecked, setIsChecked] = useState(false);
  // handle checkbox
  const handleCheckbox = () => {
    return setIsChecked(!isChecked);
  };
  // handle souce
  const handleSouce = () => {
    if (isChecked) {
      const newSouce = new Set([...souceAdditional, { ...souce }]);
      setSouceAdditional(Array.from(newSouce));
    } else {
      const newSouces = souceAdditional.filter((souceObject) => {
        return souceObject.name !== souce.name;
      });
      setSouceAdditional(newSouces);
    }
  };
  useEffect(() => {
    handleSouce();
  }, [isChecked]);
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
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
      {/* chackmark icon */}
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-0 right-0 mt-1 mr-2`}
      >
        <IoMdCheckmark className="text-xl text-red-400" />
      </div>
    </div>
  );
};
export default Souce;
