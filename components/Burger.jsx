"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";

import Modal from "react-modal";
import BurgerDetails from "./BurgerDetails";

Modal.setAppElement("body");

const ModalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};

const Buger = ({ burger }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <section>
      <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
        <Image
          onClick={openModal}
          src={burger.image}
          width={450}
          height={450}
          alt="burger"
          priority={1}
          className="h-full sm:h-[20rem] lg:group-hover:translate-y-3 duration-300 transition-all cursor-pointer"
        />
        {/* title */}
        <div>
          <h2
            onClick={openModal}
            className="text-xl font-bold capitalize cursor-pointer"
          >
            {burger.name}
          </h2>
        </div>
        {/* descriptions */}
        <div className="text-sm font-medium min-h-[60px] mb-6">
          {burger.description}
        </div>
        {/* price & btn */}
        <div
          onClick={openModal}
          className="mb-6 flex items-center justify-between text-red-400"
        >
          {/* price => hidden (sm) - visible (lg) */}
          <div
            onClick={openModal}
            className="hidden lg:flex text-xl font-semibold"
          >
            start at {burger.priceSm}
          </div>
          {/* btn => hidden (sm) - visible (lg  ) */}
          <button
            onClick={openModal}
            className="hidden-btn lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
          >
            choose {burger.priceSm}
          </button>
          {/* btn => visible (sm) - hidden (lg) */}
          <button
            onClick={openModal}
            className="btn btn-sm gradient lg:hidden w-full text-sm px-3"
          >
            Start at {burger.priceSm}
          </button>
        </div>
      </div>
      <Modal
        isOpen={modal}
        style={ModalStyle}
        onRequestClose={closeModal}
        contentLabel="Burger Land"
        className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] outline-none"
      >
        {/* close modal icons */}
        <div
          className="absolute right-2 top-2 z-30 hover:scale-110 cursor-pointer duration-200"
          onClick={closeModal}
        >
          <IoCloseOutline className="text-4xl text-red-600" />
        </div>
        <BurgerDetails burger={burger} />
      </Modal>
    </section>
  );
};
export default Buger;
