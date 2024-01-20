"use client";

import { useState, useEffect, useContext } from "react";

import Image from "next/image";

import { CartContext } from "@/CartContext/CartContext";

const BurgerDetails = ({ modal, setModal, burger }) => {
  // burger size state
  const [size, setSize] = useState("small");
  // burger doug state
  const [doug, setDoug] = useState("Traditional");
  // burger souce state
  const [additionalSouce, setAddItionalSouce] = useState([]);
  // burger souce price state
  const [additionalSoucePrice, setAddItionalSoucePrice] = useState(0);
  // price state
  const [price, setPrice] = useState(0);
  // set the price based on the burger size
  useEffect(() => {
    size === "small"
      ? parseFloat(setPrice(burger.priceSm) + additionalSoucePrice).toFixed(2)
      : size === "medium"
      ? parseFloat(setPrice(burger.priceMd) + additionalSoucePrice).toFixed(2)
      : size === "large"
      ? parseFloat(setPrice(burger.priceLg) + additionalSoucePrice).toFixed(2)
      : null;
  }, [
    size,
    burger.priceSm,
    burger.priceMd,
    burger.priceLg,
    additionalSoucePrice,
  ]);

  // set additional souce price
  useEffect(() => {
    if (additionalSouce.length > 0) {
      const newItem = additionalSouce.reduce((a, b) => {
        return a + b.price;
      }, 0);
      setAddItionalSoucePrice(newItem);
    } else {
      setAddItionalSoucePrice(0);
    }
  }, [additionalSouce, setAddItionalSoucePrice]);

  return (
    <div>
      <div className="">
        {/* burger */}
        <div>
          <Image
            src={burger.image}
            width={450}
            height={450}
            alt="burger"
            priority={1}
          />
        </div>
        {/* details */}
        <div className="bg-indigo-500">
          <div>
            <div>
              {/* name */}
              <div className="font-semibold">
                <h2 className="capitalize text-3xl mb-1">{burger.name}</h2>
              </div>
              {/* size & doug text */}
              <div>
                <span>
                  {size === "small"
                    ? "25"
                    : size === "medium"
                    ? "30"
                    : size === "large"
                    ? "35"
                    : null}
                </span>
                <span> {doug} Doug</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BurgerDetails;
