import { useState, useEffect, useContext } from "react";

import Image from "next/image";

import { CartContext } from "@/CreateContex/CreateContex";
import CrustSelections from "@/components/CrustSelections";
import SizeSelections from "./SizeSelections";
import Souce from "./Souce";

const BurgerDetails = ({ burger, modal, setModal }) => {
  const { isOpen } = useContext(CartContext);
  // size state
  const [size, setSize] = useState("small");
  // crust state
  const [crust, setCrust] = useState("Geneleksel");
  // souce state
  const [souceAdditional, setSouceAdditional] = useState([]);
  // souce price state
  const [souceAdditionalPrice, setSouceAdditionalPrice] = useState(0);
  // price state
  const [price, setPrice] = useState(0);
  // AddToCart
  const { AddToCart } = useContext(CartContext);

  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(burger.priceSm + souceAdditionalPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(burger.priceMd + souceAdditionalPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(burger.priceLg + souceAdditionalPrice).toFixed(2))
      : null;
  }, [souceAdditionalPrice, burger, size]);

  useEffect(() => {
    if (souceAdditional.length > 0) {
      const soucer = souceAdditional.reduce((a, b) => {
        return a + b.price;
      }, 0);
      setSouceAdditionalPrice(soucer);
    } else {
      setSouceAdditionalPrice(0);
    }
  }, [souceAdditional, setSouceAdditionalPrice]);

  return (
    <div className="container flex flex-col h-full mx-auto lg:flex-row lg:gap-x-8 md:p-8">
      {/* top */}
      <div className="flex items-center justify-center lg:flex-1">
        {/* burger image */}
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            src={burger.image}
            width={450}
            height={450}
            alt="burger"
            priority={1}
            className="relative mx-auto burger-screen"
          />
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 overflow-y-scroll h-[46vh] lg:h-[60vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            {/* name */}
            <div className="font-semibold">
              <h2 className="mb-1 text-3xl capitalize">{burger.name}</h2>
              {/* size & size text */}
              <div>
                <span>
                  {size === "small"
                    ? "150"
                    : size === "medium"
                    ? "200"
                    : size === "large"
                    ? "250"
                    : null}
                </span>
                <span>gr , {crust} Hamur</span>
              </div>
            </div>
            {/* size selections */}
            <SizeSelections burger={burger} size={size} setSize={setSize} />
            {/* crust selections */}
            <CrustSelections crust={crust} setCrust={setCrust} />
            {/* souces */}
            <div className="mb-4 text-xl font-semibold">Choose Souce</div>
            {/* Souce list */}
            <div className="flex flex-wrap justify-center flex-1 gap-2 py-1 lg:justify-start ">
              {burger.souce.length > 0 &&
                burger.souce.map((souce, index) => {
                  return (
                    <Souce
                      key={index}
                      souce={souce}
                      souceAdditional={souceAdditional}
                      setSouceAdditional={setSouceAdditional}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        {/* add to cart btn */}
        <div className="flex items-center h-full px-2 lg:items-end">
          <button
            onClick={() =>
              AddToCart(
                burger.id,
                burger.image,
                burger.name,
                price,
                souceAdditional,
                size,
                crust
              )
            }
            className="flex justify-center w-full btn btn-lg gradient gap-x-2"
          >
            <div>Sepete ekle:</div>
            <div> {price} TL</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BurgerDetails;
