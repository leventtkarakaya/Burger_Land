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
  const [crust, setCrust] = useState("Tradtional");
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
    <div>
      {/* top */}
      <div>
        {/* burger image */}
        <div>
          <Image
            src={burger.image}
            width={450}
            height={450}
            alt="burger"
            priority={1}
          />
        </div>
      </div>
      {/* details */}
      <div className="bg-indigo-600">
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
                <span>gr , {crust} crust</span>
              </div>
            </div>
            {/* size selections */}
            <SizeSelections />
            {/* crust selections */}
            <CrustSelections />
            {/* souces */}
            <div>Choose Souce</div>
            {/* Souce list */}
            <div>
              {burger.souce.length > 0 &&
                burger.souce.map((souce, index) => {
                  return <Souce key={index} burger={souce} />;
                })}
            </div>
          </div>
        </div>
        {/* add to cart btn */}
        <div>
          <button>
            <div>Şunun için sepete ekle:</div>
            <div>Tl {price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BurgerDetails;
