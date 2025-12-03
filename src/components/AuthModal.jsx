import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ onClose, isLogin: defaultLogin }) => {
  const [isLogin, setIsLogin] = useState(defaultLogin);

  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Restore scroll when modal closes (on unmount)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-50 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white p-6 rounded-lg relative w-96 max-h-[90vh] overflow-y-auto"
        onClick={handleModalClick}
      >
        <div
          className="absolute -top-1 right-5.5 text-4xl text-black cursor-pointer"
          onClick={onClose}
        >
          &times;
        </div>

        <div className="my-5 border-b pb-1.5">
          <ul className="flex gap-5 items-center uppercase">
            <li
              onClick={() => setIsLogin(true)}
              className={`${isLogin ? "font-bold" : ""}`}
            >
              Login
            </li>
            <li
              onClick={() => setIsLogin(false)}
              className={`${!isLogin ? "font-bold" : ""}`}
            >
              Register
            </li>
          </ul>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthModal;
