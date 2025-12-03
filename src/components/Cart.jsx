import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../cartSlice/cartSlice";
import { addToWishlist } from "../wishlist/wishlistSlice";
import { NavLink } from "react-router";
import toast from "react-hot-toast";

const Cart = ({
  id,
  title,
  originalPrice,
  discount,
  price,
  imageUrl,
  code,
  color,
  size,
  quantity,
  allSizes,
  allColors,
  CartClose,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      <div className="flex gap-2">
        {/* IMAGE */}
        <NavLink to={`/product/${id}`} onClick={CartClose}>
          <img
            src={imageUrl}
            alt={title}
            className="w-45 h-full object-cover cursor-pointer"
          />
        </NavLink>

        {/* DETAILS */}
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="capitalize line-clamp-1">{title}</p>
            <FaTrash
              className="cursor-pointer"
              onClick={() => dispatch(removeFromCart({ id, color, size }))}
            />
          </div>

          <p className="line-clamp-1">
            Code: {code} - {color}
          </p>

          {/* SIZE + COLOR SELECTS */}
          <div className="grid grid-cols-2 gap-3 mt-2">

            {/* SIZE */}
            <div>
              <label className="text-sm font-semibold">Size</label>
              <select
                className="w-full border rounded-lg px-2 py-1 mt-1 cursor-pointer uppercase"
                value={size}
                onChange={(e) =>
                  dispatch(
                    updateCartItem({
                      id,
                      oldColor: color,
                      oldSize: size,
                      newColor: color,
                      newSize: e.target.value,
                    })
                  )
                }
              >
                {allSizes?.map((s, i) => (
                  <option key={i} value={s.value} disabled={s.stock <= 0}>
                    {s.value} {s.stock <= 0 ? "(Out of stock)" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* COLOR */}
            <div>
              <label className="text-sm font-semibold">Color</label>
              <select
                className="w-full border rounded-lg px-2 py-1 mt-1 cursor-pointer"
                value={color}
                onChange={(e) =>
                  dispatch(
                    updateCartItem({
                      id,
                      oldColor: color,
                      oldSize: size,
                      newColor: e.target.value,
                      newSize: size,
                    })
                  )
                }
              >
                {allColors?.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* DISCOUNT */}
          <div className="text-right mt-3">
            <p className="line-through text-sm">US ${originalPrice}</p>
            <p>
              ({discount}% off) -US $
              {((originalPrice * discount) / 100).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* MOVE TO WISHLIST */}
      <div className="flex justify-between items-center mt-2">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => {
            dispatch(removeFromCart({ id, color, size }));
            dispatch(
              addToWishlist({
                id,
                title,
                code,
                originalPrice,
                discount,
                price,
                imageUrl,
                size,
                color,
                quantity,
                allSizes,
                allColors,
              })
            );
            toast.success("Added to wishlist successfully!");
          }}
        >
          <BiHeart />
          <p>Move to wishlist</p>
        </div>

        <p className="text-red-500 font-bold">
          US ${(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
