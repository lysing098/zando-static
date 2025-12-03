import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Notifiation = ({ isOpen, toggleNotification }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-opacity-50 "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={toggleNotification}
    >
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg z-40 
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between px-4 pt-4 pb-3 border-b border-b-gray-200 font-bold text-xl">
          <p>Notification</p>
          <button onClick={toggleNotification} aria-label="Close cart drawer">
            <IoMdClose className="h-6 w-6 text-gray-600 cursor-pointer " />
          </button>
        </div>

        <div className="px-4">
          <div className="flex flex-col gap-4 mt-5 border-b-1 pb-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <FaRegBell />
              <p>👋 Welcome to Zando!</p>
            </div>
            <img
              src="https://zandokh.com/image/catalog/banner/2024/zando-free-cash-voucher/5-usd-register-gift-4.png"
              alt=""
            />
            <p>
              Register your account and get an instant $5 Off Voucher. Contact
              our customer service for more info. Happy Shopping!
            </p>
            <button className="font-bold bg-black w-full py-2 text-white hover:bg-gray-600">
              Register Now
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-5 border-b-1 pb-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <FaRegBell />
              <p>🎉 Pchum Ben, Big Offers!</p>
            </div>
            <img
              src="https://zandokh.com/image/catalog/banner/2025/ZANDO/Augst/Pchum%20Ben/80OFFPB_Main_ProductBanner_Mobile%20(2160x1066)-1.jpg"
              alt=""
            />
            <p>Celebrate the holiday with up to 80% OFF on ZANDO APP!</p>
            <div className="flex items-center gap-3">
              <button className="font-bold bg-black w-full py-2 text-white uppercase hover:bg-gray-600">
                shop women
              </button>
              <button className="font-bold bg-black w-full py-2 text-white uppercase hover:bg-gray-600">
                shop men
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifiation;
