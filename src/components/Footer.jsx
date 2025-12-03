import React from "react";
import { CiFacebook } from "react-icons/ci";
import {
  FaInstagram,
  FaPhone,
  FaQuestionCircle,
  FaRocketchat,
  FaShieldAlt,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto px-2">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 text-center md:text-left gap-4 justify-items-center md:justify-items-normal border-b pb-3">
          {/* Zando app qr */}
          <div>
            <h4 className="text-xl font-semibold uppercase mb-2">zando app</h4>
            <img
              src="https://zandokh.com/image/catalog/logo/qr_code_app.png"
              alt="zando qr"
              className="w-20 h-auto"
            />
          </div>
          {/* Loyalty */}
          <div>
            <h4 className="text-xl font-semibold uppercase mb-2">loyalty</h4>
            <div>
              <p className="uppercase">Membership & Benefits</p>
            </div>
          </div>
          {/* Follow us */}
          <div>
            <h4 className="text-xl font-semibold uppercase mb-2">follow us</h4>
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <CiFacebook className="text-2xl" />
                <p className="capitalize">Facebook</p>
              </div>
              <div className="flex  gap-2">
                <FaInstagram className="text-2xl" />
                <p className="capitalize">instagram</p>
              </div>
              <div className="flex  gap-2">
                <FaTiktok className="text-xl" />
                <p className="capitalize">tik tok</p>
              </div>
              <div className="flex  gap-2">
                <FaYoutube className="text-xl" />
                <p className="capitalize">youtube</p>
              </div>
            </div>
          </div>
          {/* customer service */}
          <div>
            <h4 className="text-xl font-semibold uppercase mb-2">
              customer service
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <FaQuestionCircle className="text-2xl" />
                <p className="">Online exchange policy</p>
              </div>
              <div className="flex  gap-2">
                <FaShieldAlt className="text-2xl" />
                <p className="capitalize">privacy policy</p>
              </div>
              <div className="flex  gap-2">
                <FaRocketchat className="text-xl" />
                <p className="">FAQs & guides</p>
              </div>
              <div className="flex  gap-2">
                <FaLocationDot className="text-xl" />
                <p className="">Find a store</p>
              </div>
            </div>
          </div>
          {/* contact us */}
          <div>
            <h4 className="text-xl font-semibold uppercase mb-2">contact us</h4>
            <div className="flex flex-col gap-2">
              <div className="flex  gap-2">
                <IoMail className="text-2xl" />
                <p className="">info@zandokh.com</p>
              </div>
              <div className="flex  gap-2">
                <FaPhone className="text-2xl" />
                <p className="capitalize">(+855) 081 999 716</p>
              </div>
              <div className="flex  gap-2">
                <FaPhone className="text-xl" />
                <p className="">(+855) 061 330 330</p>
              </div>
              <div className="flex  gap-2">
                <FaTelegram className="text-xl" />
                <p className="">Telegram</p>
              </div>
            </div>
          </div>
          {/* contact us */}
          <div>
            <h4 className="text-xl font-semibold uppercase mb-2">we accept</h4>
            <img
              src="https://zandokh.com/image/catalog/logo/web-footer/We-accept-payment%E2%80%93for-web-footer-1.png"
              alt="payment"
            />
          </div>
        </section>
        <section className="mt-5 mb-10 text-end">
          © 2015 - {new Date().getFullYear()} Zando. All rights reserved.
        </section>
      </footer>
    </>
  );
};

export default Footer;
