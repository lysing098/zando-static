import React, { useState } from "react";
import data from "../data/Product.json";
import { useParams } from "react-router";
import { LiaShareSquareSolid } from "react-icons/lia";
import { FaFacebookF, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlSocialTwitter } from "react-icons/sl";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartSlice/cartSlice";
import { addToWishlist } from "../wishlist/wishlistSlice";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();

  const product = data.products.find((item) => item.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0); // fixed typo
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const originalPrice = product.originalPrice;
  const discountValue = product.discount;
  const discountedPrice = (originalPrice * (1 - discountValue / 100)).toFixed(
    2
  );
  // Fix: check stock for selected size
  const outOfStock = product?.size?.[selectedSize]?.stock === 0;
  const stock = product?.size?.[selectedSize]?.stock;
  const [quantity, setQuantity] = useState(1);

  const handleMinuQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };
  const handlePlusQuantity = () => {
    if (quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        originalPrice: product.originalPrice,
        discount: product.discount,
        price: discountedPrice,
        code: product.code,
        color: product.colors[selectedColor],
        category: product.category,
        imageUrl: product.imageUrl[selectedImage],
        size: product.size[selectedSize]?.value,
        quantity,

        // ⭐ MUST INCLUDE THESE
        allSizes: product.size,
        allColors: product.colors,
      })
    );
    toast.success("Added to cart successfully!");
  };

  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        id: product.id,
        title: product.title,
        code: product.code,
        originalPrice: product.originalPrice,
        discount: product.discount,
        price: discountedPrice,
        category: product.category,
        imageUrl: product.imageUrl[selectedImage],
        size: product.size[selectedSize]?.value,
        color: product.colors[selectedColor],
        quantity,

        // ⭐ MUST INCLUDE THESE
        allSizes: product.size,
        allColors: product.colors,
      })
    );
    toast.success("Added to wishlist successfully!");
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center ">
        {/* image */}
        <div className="flex justify-center gap-5">
          {/* thumnail */}
          <div className="flex flex-col gap-2 justify-between">
            {product?.imageUrl.slice(0, 5).map((item, index) => (
              <img
                src={item}
                alt={`thumnail-${index}`}
                key={index}
                className={`w-20 h-20 object-cover cursor-pointer ${
                  selectedImage === index ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          {/* main image */}
          <img
            src={product.imageUrl[selectedImage]}
            alt={product.name}
            className="w-60 h-120 md:w-120 md:h-120 object-cover "
          />
        </div>
        {/* detail */}
        <div className="my-3">
          {/* price and shared */}
          <div className="flex justify-between items-center">
            {/* price & discount */}
            <div className="flex gap-2 text-lg ">
              <h4 className="text-red-500 font-bold">US ${discountedPrice} </h4>
              <p className="font-bold">-{discountValue}%</p>
              <p className="font-semibold line-through text-gray-600">
                US ${originalPrice}
              </p>
            </div>
            {/* Shared */}
            <div>
              <div className="relative group">
                <div className="bg-gray-500 px-2 py-1">
                  <LiaShareSquareSolid className="text-2xl" />
                </div>
                <div className="absolute right-10 top-10 bg-white px-7 py-4 shadow-lg hidden group-hover:flex gap-5 rounded-lg">
                  {/* Facebook */}
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center">
                    <FaFacebookF className="text-white text-xl" />
                  </div>
                  {/* Phone */}
                  <div className="w-12 h-12 bg-violet-400 rounded-full flex justify-center items-center">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  {/* Mail */}
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex justify-center items-center">
                    <MdOutlineMailOutline className="text-white text-xl" />
                  </div>
                  {/* Twitter */}
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex justify-center items-center">
                    <SlSocialTwitter className="text-white text-xl" />
                  </div>
                  {/* Telegram */}
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex justify-center items-center">
                    <PiTelegramLogoDuotone className="text-white text-xl" />
                  </div>
                  {/* WhatsApp */}
                  <div className="w-12 h-12 bg-green-400 rounded-full flex justify-center items-center">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* name */}
          <p className="capitalize my-2">{product.title}</p>
          {/* Color */}
          <div className="my-5">
            <p className="font-semibold pb-2">Color</p>
            <div className="flex items-center gap-3">
              {product?.colors?.map((color, index) => (
                <button
                  key={index}
                  className={`w-16 h-8 cursor-pointer uppercase flex justify-center items-center rounded 
          ${selectedColor === index ? "border-2 border-black" : "border"} `}
                  style={{ backgroundColor: color.toLowerCase() }} // button background
                  onClick={() => setSelectedColor(index)}
                ></button>
              ))}
            </div>
          </div>

          {/* size */}
          <div className="my-5">
            <p className="font-semibold pb-2">Size</p>
            <div className="flex items-center gap-3">
              {product?.size.map((item, index) => (
                <button
                  key={index}
                  className={`w-16 h-8 bg-gray-200 cursor-pointer uppercase flex justify-center items-center rounded 
                ${selectedSize === index ? "border-2 border-black" : ""} ${
                    item.stock === 0 ? "line-through text-gray-400" : ""
                  }`}
                  onClick={() => {
                    setSelectedSize(index);
                    setQuantity(1);
                  }}
                  disabled={item.stock === 0}
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>
          {/* Quantity */}
          <div className="my-5">
            <p className="font-semibold py-2">Quantity</p>
            <div className="flex gap-3">
              <button
                className="w-16 h-8 bg-gray-200 cursor-pointer text-2xl"
                onClick={handleMinuQuantity}
                disabled={outOfStock}
              >
                -
              </button>
              <p className="w-16 h-8 bg-gray-200 flex justify-center items-center">
                {quantity}
              </p>
              <button
                className="w-16 h-8 bg-gray-200 cursor-pointer text-2xl"
                onClick={handlePlusQuantity}
                disabled={outOfStock}
              >
                +
              </button>
            </div>
            {outOfStock && (
              <p className="text-red-500 mt-2">Out of stock for this size</p>
            )}
          </div>
          {/* add to bag */}
          <div className="my-5 flex items-center justify-between gap-2">
            <button
              className="w-[90%] bg-black py-3 text-white font-bold cursor-pointer"
              onClick={handleAddToCart}
              disabled={outOfStock}
            >
              Add to bag
            </button>

            <div className="py-3 px-3 bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <BiHeart className="text-2xl" onClick={handleAddToWishlist} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
