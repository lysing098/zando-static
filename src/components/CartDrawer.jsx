import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { NavLink } from "react-router";

const CartDrawer = ({ CartOpen, CartClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // 🚀 Lock body scroll when cart is open
  useEffect(() => {
    if (CartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [CartOpen]);

  if (!CartOpen) return null;

  // 🧮 Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalDiscount = cart.reduce(
    (acc, item) => acc + (item.originalPrice - item.price) * item.quantity,
    0
  );
  const deliveryFee = cart.length > 0 ? 3.99 : 0; // flat fee for example
  const totalToPay = subtotal + deliveryFee;

  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-50"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
      onClick={CartClose}
    >
      <div
        className={`fixed top-0 right-0 h-full bg-white transform transition-transform duration-300 ease-in-out
          w-full sm:w-[90%] md:w-[28rem] lg:w-[32rem] 
          ${CartOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between p-4 border-b border-b-gray-200 font-bold text-xl">
          <p>Cart</p>
          <button onClick={CartClose} aria-label="Close cart drawer">
            <IoMdClose className="h-6 w-6 text-gray-600 cursor-pointer" />
          </button>
        </div>

        {/* Main content area with scrollable cart and fixed summary */}
        <div className="flex flex-col h-[calc(100%-64px)]">
          {/* 🛍️ Scrollable cart items */}
          <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <Cart key={index} {...item} CartClose={CartClose} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
                  Your bag is empty
                </h1>
                <p className="text-center mb-3 text-sm sm:text-base">
                  Check out our latest arrivals & stay up-to-date with the latest
                  <br /> styles
                </p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                  Start shopping
                </h3>
                <button className="w-full text-center py-3 bg-black text-white font-semibold cursor-pointer mb-3">
                  <NavLink to="/">Shop women</NavLink>
                </button>
                <button className="w-full text-center py-3 bg-black text-white font-semibold cursor-pointer mb-3">
                  <NavLink to="/">Shop men</NavLink>
                </button>
              </div>
            )}
          </div>

          {/* 🧾 Fixed Cart Summary */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between py-1 text-sm">
                <p>Subtotal</p>
                <p>US ${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between py-1 text-sm text-green-600">
                <p>You saved</p>
                <p>-US ${totalDiscount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <p>Delivery Fee</p>
                <p>US ${deliveryFee.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-bold text-lg py-2 border-t mt-2">
                <p>Total to pay</p>
                <p>US ${totalToPay.toFixed(2)}</p>
              </div>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg mt-2 hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
