"use client";
// state
import { useState } from "react";
// image
import Image from "next/image";
// modal
import Modal from "react-modal";
// icons
import { IoCloseOutline } from "react-icons/io5";
//components
import BurgerDetails from "./BurgerDetails";
// modal bind
Modal.setAppElement("body");
// modal style
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Burger = ({ burger }) => {
  // modal state
  const [modal, setModal] = useState(false);
  // open & close modal
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-x l">
      <Image
        onClick={openModal}
        src={burger.image}
        width={270}
        height={270}
        alt="burger"
        priority={1}
        className="lg:group-hover:translate-y-3 duration-300 transition-all h-full md:max-h-[15rem] burger-screen lg:max-h-[20rem] cursor-pointer"
      />
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {burger.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6 ">
        {burger.description}
      </div>
      {/* price & btn */}
      <div
        onClick={openModal}
        className="mb-6 flex items-center justify-between text-red-200"
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
      {/* modal */}
      <Modal
        isOpen={modal}
        style={modalStyles}
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
        {/* burger details */}
        <BurgerDetails burger={burger} modal={modal} setModal={setModal} />
      </Modal>
    </div>
  );
};
export default Burger;
