// state hooks
import React, { useState, useEffect, useContext } from "react";
// close image
import { IoCloseOutline } from "react-icons/io5";
// page
import CheckoutDetails from "./CheckoutDetails";
// React-modal
import Modal from "react-modal";
// CartContext(useContext)
import { CartContext } from "@/CreateContex/CreateContex";
// modal bind
Modal.setAppElement("body");
// Modal Style
const ModalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};
const CartBottom = () => {
  const { isOpen, setIsOpen, cart, cartTotal } = useContext(CartContext);
  // Modal state
  const [modal, setModal] = useState(false);
  // Open Modal
  const OpenModal = () => {
    setModal(true);
  };
  // Close Modal
  const CloseModal = () => {
    setModal(false);
  };
  return (
    <>
      {cart.length >= 1 ? (
        <div className="px-6 py-3 mt-auto lg:py-6">
          {/* Total price */}
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Toplam:</div>
            <div>{parseFloat(cartTotal).toFixed(2)} TL</div>
          </div>
          {/* btn */}
          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setIsOpen(!isOpen), OpenModal(true);
              }}
              className="flex justify-center font-semibold btn btn-lg gradient"
            >
              Onay
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 flex items-center justify-center w-full h-full -z-10">
          <div className="font-semibold">Sepetiniz Boş</div>
        </div>
      )}
      {/* Modal */}
      {modal && (
        <Modal
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:top-[50%] lg:left-[50%] lg:fixed outline-none"
          isOpen={OpenModal}
          onRequestClose={CloseModal}
          style={ModalStyle}
          contentLabel="Onay Modal"
        >
          {/* close modal icon */}
          <div className="absolute text-3xl text-red-500 transition-all duration-200 cursor-pointer top-2 right-2 hover:scale-110 ">
            <IoCloseOutline onClick={() => CloseModal()} />
          </div>
          <CheckoutDetails setModal={setModal} />
        </Modal>
      )}
    </>
  );
};

export default CartBottom;
