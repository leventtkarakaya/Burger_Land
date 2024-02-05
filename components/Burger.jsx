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
      <div className="px-4 py-2 group xl:py-4 xl:px-2 rounded-xl">
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
          className="flex items-center justify-between mb-6 text-red-400"
        >
          {/* price => hidden (sm) - visible (lg) */}
          <div
            onClick={openModal}
            className="hidden text-xl font-semibold lg:flex"
          >
            Başlayan {burger.priceSm}
          </div>
          {/* btn => hidden (sm) - visible (lg  ) */}
          <button
            onClick={openModal}
            className="text-sm font-semibold text-white rounded-lg hidden-btn lg:flex gradient btn-sm"
          >
            Terçih {burger.priceSm}
          </button>
          {/* btn => visible (sm) - hidden (lg) */}
          <button
            onClick={openModal}
            className="w-full px-3 text-sm btn btn-sm gradient lg:hidden"
          >
            Başlayan : {burger.priceSm}
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
          className="absolute z-30 duration-200 cursor-pointer right-2 top-2 hover:scale-110"
          onClick={closeModal}
        >
          <IoCloseOutline className="text-4xl text-red-600" />
        </div>
        <BurgerDetails burger={burger} setModal={setModal} />
      </Modal>
    </section>
  );
};
export default Buger;
