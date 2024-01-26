import { useState, useEffect, useContext } from "react";

import Image from "next/image";

import { CartContext } from "@/CreateContex/CreateContex";
import CrustSelections from "@/components/CrustSelections";
import SizeSelections from "./SizeSelections";
import Souce from "./Souce";

const BurgerDetails = ({ burger, modal, setModal }) => {
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
      const souce = souceAdditional.reduce((a, b) => {
        return a + b.price;
      });
      setSouceAdditionalPrice(souce);
    } else {
      setSouceAdditionalPrice(0);
    }
  }, [souceAdditional, souceAdditionalPrice]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8 mx-auto container">
      {/* top */}
      <div className="lg:flex-1 flex justify-center items-center">
        {/* burger image */}
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            src={burger.image}
            width={450}
            height={450}
            alt="burger"
            priority={1}
            className="burger-screen mx-auto relative"
          />
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col flex-1">
        <div>
          <div>
            {/* name */}
            <div className="font-semibold">
              <h2 className="capitalize text-3xl mb-1">{burger.name}</h2>
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
            <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
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
        <div>
          <button className="btn btn-lg gradient w-full  flex justify-center gap-x-2">
            <div>Sepete ekle:</div>
            <div> {price} TL</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BurgerDetails;
