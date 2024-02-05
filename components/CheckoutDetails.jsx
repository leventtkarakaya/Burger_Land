import React, { useState, useEffect, useContext, use } from "react";

import Image from "next/image";

import { CartContext } from "@/CreateContex/CreateContex";

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });
  // close modal after 5sc.
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        setModal(false);
        setCart([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [setCart, setModal, successMsg]);
  return (
    <>
      {successMsg ? (
        <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
          <h2 className="text-2xl font-semibold text-center">
            Bizi Seçtiginiz için Teşekkürler,<span>Sipariş verildi</span>
          </h2>
          <Image src={"/success-1.gif"} alt="burger" width={150} height={150} />
          <div>
            Sipraşin verilmesine <span>{count}</span> saniye
          </div>
        </div>
      ) : (
        <div className="h-full lg:gap-x-8 lg:px-8 lg:py-20">
          {/* title */}
          <h2>Alışveriş Sepeti Onay</h2>
          <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
            {/* box-1 */}
            <div className="flex-1 h-full px-8 overflow-y-auto lg:overflow-visible py4 lg:py-0 lg:px-0 ">
              {/* input wrapper */}
              <div className="flex flex-col h-full gap-10 lg:mt-10">
                {/* firstName & lastName*/}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Adınız"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Soyadınız"
                  />
                </div>
                {/* phone & email */}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Şifreniz"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="E-mail"
                  />
                </div>
                {/* Adress*/}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Adresiniz"
                  />
                </div>
              </div>
            </div>
            {/* box-2 */}
            <div className="flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
              <div className="flex flex-col h-full p-4 mb-4 border rounded-lg">
                <h3 className="pb-4 mb-4 text-base font-extrabold uppercase border-b">
                  Sipariş Listesi
                </h3>
                {/* items */}
                <div className="flex flex-col lg:overflow-hidden  overflow-y-scroll font-semibold scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-400 gap-y-4 h-[240px] py-2">
                  {cart.map((burger, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between text-[15px]"
                      >
                        <div className="flex gap-x-2">
                          <div className="capitalize">{burger.name}</div>
                          <div>{burger.amount > 1 && `x${burger.amount}`}</div>
                        </div>
                        <div>
                          {parseFloat(burger.price + burger.amount).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* place order btn */}
            <button
              className="w-full p-5 btn btn-lg gradient"
              onClick={() => {
                {
                  setSuccessMsg(true);
                }
              }}
            >
              Sipariş Veriniz
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutDetails;
