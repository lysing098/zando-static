import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import { addToWishlist } from "../wishlist/wishlistSlice";
import toast from "react-hot-toast";

const Card = ({
  imageUrl,
  title,
  discount,
  originalPrice,
  id,
  code,
  price,
  size,
  color,
  quantity,
}) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const discountValue = parseFloat(discount.replace("%", "").replace("-", ""));
  const discountedPrice = (originalPrice * (1 - discountValue / 100)).toFixed(
    2
  );

  // Determine which image to show safely
  const currentImage =
    hovered && imageUrl.length > 1 ? imageUrl[1] : imageUrl[0];

  const handleAddToWishlist = () => {
    dispatch(
      addToWishlist({
        id,
        title,
        code,
        originalPrice,
        price: discountedPrice,
        discount,
        imageUrl,
        size: null,
        color: null,
        quantity,
        allColors: color,
        allSizes: size,
      })
    );

    // ✅ Show success toast
    toast.success("Added to wishlist successfully!");
  };

  return (
    <div className="w-90 hover:cursor-pointer transition-transform duration-200 ">
      {/* Image section */}
      <div
        className="relative h-72 overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <NavLink to={`/product/${id}`}>
          <img
            src={currentImage}
            alt={title}
            className="w-full h-full object-cover transition duration-300"
          />
          <p className="bg-red-500 px-3 py-1 font-semibold rounded-md text-white absolute top-2 left-2">
            -{discount}%
          </p>
        </NavLink>
      </div>

      {/* Description section */}
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <p className="text-red-500 font-semibold">US ${discountedPrice}</p>
            <p className="line-through text-gray-500">US ${originalPrice}</p>
          </div>
          <FaRegHeart
            className="hover:cursor-pointer"
            onClick={handleAddToWishlist}
          />
        </div>
        <p className="capitalize line-clamp-1 text-sm mt-1">{title}</p>
      </div>
    </div>
  );
};

export default Card;
