import React, { useState } from "react";
import logo from "../assets/ZANDO-NEW-LOGO-2025.png";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthModal from "./AuthModal";
import { NavLink } from "react-router";
import Notifiation from "./Notifiation";
import CartDrawer from "./CartDrawer";
import { useSelector } from "react-redux";
import { selectCartQuantity } from "../cartSlice/cartSlice";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isOpenCart,setIsOpenCart] = useState(false);
  const toggleCart = ()=>{
    setIsOpenCart(!isOpenCart);
  }
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };
  const handleSearch = () => {
    setIsSearch(true);
  };
  const closeSearch = () => {
    setIsSearch(false);
  };
  const handleMenu = () => {
    setIsOpenMenu(true);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
  };
  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };
  // AuthModal
  const [isAuth, setIsAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleAuth = (mode) => {
    setIsLogin(mode === "login");
    setIsAuth(true);
  };
  const closeModal = () => {
    setIsAuth(false);
  };

  const totalQuantity = useSelector(selectCartQuantity);

  return (
    <header className="sticky top-0 z-50 bg-white px-2">
      <div className="container mx-auto flex justify-between items-center py-3 hover:cursor-pointer relative">
        <GiHamburgerMenu className="xl:hidden w-7 h-7" onClick={handleMenu} />
        {/* Overlay + Slide Menu */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-900 ease-in-out ${
            isOpenMenu
              ? "bg-black/40 opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        >
          <div
            className={`h-full transition-all duration-700 ease-in-out
      ${isOpenMenu ? "w-full" : "w-0"} overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "hsla(0,0%,100%,.9)" }}
          >
            <div className="p-5">
              <div className="mb-5 text-4xl cursor-pointer" onClick={closeMenu}>
                &times;
              </div>
              <ul className="flex flex-col gap-5">
                <li className="font-bold text-4xl uppercase list-none">
                  Women
                </li>
                <li className="font-bold text-4xl uppercase list-none">Men</li>
                <li className="font-bold text-4xl uppercase list-none">Boys</li>
                <li className="font-bold text-4xl uppercase list-none">
                  Girls
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* nav */}
        <nav className="hidden xl:flex ">
          {/* Women */}
          <div className="relative group px-3 py-3 hover:bg-gray-400">
            <h1 className="uppercase font-bold">women</h1>
            <div className="fixed top-[64px] left-0 hidden group-hover:flex w-full bg-white shadow-md z-40">
              <div className="container mx-auto  py-10 flex gap-20">
                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">New In</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Shirts</li>
                    <li>Dresses</li>
                    <li>Skirts</li>
                    <li>Tops</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Clothing</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Bags</li>
                    <li>Jewelry</li>
                    <li>Sunglasses</li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Shoes</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Acessories</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">
                    Shop by collection
                  </h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 6 */}
                <div className="flex flex-col gap-3 text-red-500">
                  <h2 className="font-bold ">SALE</h2>
                  <ul className="text-sm  space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* men */}
          <div className="relative group px-3 py-3 hover:bg-gray-400">
            <h1 className="uppercase font-bold">men</h1>
            <div className="fixed top-[64px] left-0 hidden group-hover:flex w-full bg-white shadow-md z-40">
              <div className="container mx-auto  py-10 flex gap-20">
                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">New In</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Shirts</li>
                    <li>Dresses</li>
                    <li>Skirts</li>
                    <li>Tops</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Clothing</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Bags</li>
                    <li>Jewelry</li>
                    <li>Sunglasses</li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Shoes</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Acessories</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">
                    Shop by collection
                  </h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 6 */}
                <div className="flex flex-col gap-3 text-red-500">
                  <h2 className="font-bold ">SALE</h2>
                  <ul className="text-sm  space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Boy */}
          <div className="relative group px-3 py-3 hover:bg-gray-400">
            <h1 className="uppercase font-bold">boys</h1>
            <div className="fixed top-[64px] left-0 hidden group-hover:flex w-full bg-white shadow-md z-40">
              <div className="container mx-auto  py-10 flex gap-20">
                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">New In</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Shirts</li>
                    <li>Dresses</li>
                    <li>Skirts</li>
                    <li>Tops</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Clothing</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Bags</li>
                    <li>Jewelry</li>
                    <li>Sunglasses</li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Shoes</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Acessories</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">
                    Shop by collection
                  </h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 6 */}
                <div className="flex flex-col gap-3 text-red-500">
                  <h2 className="font-bold ">SALE</h2>
                  <ul className="text-sm  space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* girl */}
          <div className="relative group px-3 py-3 hover:bg-gray-400">
            <h1 className="uppercase font-bold">girls</h1>
            <div className="fixed top-[64px] left-0 hidden group-hover:flex w-full bg-white shadow-md z-40">
              <div className="container mx-auto  py-10 flex gap-20">
                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">New In</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Shirts</li>
                    <li>Dresses</li>
                    <li>Skirts</li>
                    <li>Tops</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Clothing</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Bags</li>
                    <li>Jewelry</li>
                    <li>Sunglasses</li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Shoes</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">Acessories</h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-gray-800">
                    Shop by collection
                  </h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>

                {/* Column 6 */}
                <div className="flex flex-col gap-3 text-red-500">
                  <h2 className="font-bold ">SALE</h2>
                  <ul className="text-sm  space-y-1">
                    <li>Heels</li>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Logo */}
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="w-20 md:w-28 md:ml-27 " />
        </NavLink>

        {/* Right side controls */}
        <div className="flex items-center">
          {/* Search */}
          <IoIosSearch
            className="text-xl mr-5 sm:hidden"
            onClick={handleSearch}
          />
          <div className="relative hidden sm:block" onClick={handleSearch}>
            <IoIosSearch className="absolute bottom-2.5 left-2 " />
            {/* <input
              type="text"
              placeholder="Search"
              className="mr-5 border outline-none pl-7 py-1 rounded"
            /> */}
            <div className="mr-5 border  px-10 py-1 rounded">Search</div>
          </div>
          {isSearch && (
            <div
              className="fixed inset-0 z-50 w-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              onClick={closeSearch}
            >
              <div
                className="bg-white w-full p-5 shadow-md"
                onClick={(e) => e.stopPropagation()} // prevent closing on inner click
              >
                {/* <div className=" mb-3 container mx-auto">
                  <h2 className="text-lg font-bold">Search</h2>
                  
                </div> */}
                <div className="container mx-auto flex justify-between items-center relative">
                  <input
                    type="text"
                    placeholder="What are searching for?"
                    className="w-full border-b  py-2  outline-none"
                  />
                  <IoIosSearch className="absolute right-10" />
                  <button
                    onClick={closeSearch}
                    className="text-gray-600 text-xl px-2 rounded-full absolute right-1 top-1 hover:bg-gray-300 hover:cursor-pointer"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Icons */}
          <div className="flex items-center gap-5 mr-5">
            <IoMdNotificationsOutline
              className="text-xl"
              onClick={() => setShowNotification(!showNotification)}
            />
            <NavLink to={"/wishlist"}>
              <FaRegHeart className="text-xl" />
            </NavLink>
            <div className="relative" onClick={()=>setIsOpenCart(!isOpenCart)}>
              <RiShoppingBagLine className="text-xl" />
              <span className="absolute -top-2 left-2 py-0.5 px-1 rounded-full bg-red-500 text-white text-xs">
                {totalQuantity}
              </span>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <FaRegUser className="text-xl lg:hidden" onClick={handleAuth} />
            {isAuth && <AuthModal onClose={closeModal} isLogin={isLogin} />}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className="border px-3 py-1 rounded"
                onClick={() => handleAuth("login")}
              >
                login
              </button>
              <button
                className="border px-3 py-1 rounded bg-black text-white"
                onClick={() => handleAuth("register")}
              >
                register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notifiation
        isOpen={showNotification}
        toggleNotification={toggleNotification}
      />
      <CartDrawer CartOpen={isOpenCart} CartClose={toggleCart}/>
    </header>
  );
};

export default Header;
