import React from "react";
import { FaTrash } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  updateWishlistItem,
} from "../wishlist/wishlistSlice";
import { addToCart } from "../cartSlice/cartSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router";

const WishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="px-5">
      {wishlist.length > 0 ? (
        <div>
          {/* Header */}
          <div className="flex justify-between items-center">
            <p>Your wishlist ({wishlist.length} items)</p>
            <div className="flex gap-1 items-center cursor-pointer">
              <LuPencil />
              <p>Recently added</p>
              <RiArrowDownSLine />
            </div>
          </div>

          {/* Wishlist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between pt-5 gap-4">
            {wishlist.map((item, index) => (
              <div key={index} className=" p-2 ">
                <div className="flex gap-1">
                  {/* Product Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-30 h-40 object-cover cursor-pointer"
                  />

                  {/* Product Info */}
                  <div className="px-2 flex-1">
                    {/* Price Section */}
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center gap-1 flex-nowrap text-xs sm:text-sm">
                        <p className="font-semibold text-red-500 whitespace-nowrap">
                          US ${item.price}
                        </p>
                        <p className="text-gray-400 whitespace-nowrap">
                          {item.discount}%
                        </p>
                        <p className="text-gray-400 line-through whitespace-nowrap">
                          US ${item.originalPrice}
                        </p>
                      </div>
                      <FaTrash
                        className="cursor-pointer"
                        onClick={() =>
                          dispatch(
                            removeFromWishlist({
                              id: item.id,
                              color: item.color,
                              size: item.size,
                            })
                          )
                        }
                      />
                    </div>

                    {/* Title + Code */}
                    <p className=" font-medium line-clamp-1">{item.title}</p>
                    <p className="text-sm text-gray-600">Code. {item.code}</p>

                    {/* Color & Size */}
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {/* SIZE SELECT */}
                      <div>
                        <label className="text-sm font-semibold">Size</label>
                        <select
                          className="w-full uppercase border rounded-lg px-2 py-1 mt-1 cursor-pointer"
                          value={item.size}
                          onChange={(e) =>
                            dispatch(
                              updateWishlistItem({
                                id: item.id,
                                oldColor: item.color,
                                oldSize: item.size,
                                newColor: item.color,
                                newSize: e.target.value,
                              })
                            )
                          }
                        >
                          {item.allSizes.map((s, i) => (
                            <option
                              key={i}
                              value={s.value}
                              disabled={s.stock === 0}
                            >
                              {s.value} {s.stock === 0 && "(Out of stock)"}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* COLOR SELECT */}
                      <div>
                        <label className="text-sm font-semibold">Color</label>
                        <select
                          className="w-full border rounded-lg px-2 py-1 mt-1 cursor-pointer"
                          value={item.color}
                          onChange={(e) =>
                            dispatch(
                              updateWishlistItem({
                                id: item.id,
                                oldColor: item.color,
                                oldSize: item.size,
                                newColor: e.target.value,
                                newSize: item.size,
                              })
                            )
                          }
                        >
                          {item.allColors.map((color, i) => (
                            <option key={i} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Move to Cart Button */}
                <button
                  className="border rounded-lg w-full py-2 mt-2 cursor-pointer"
                  onClick={() => {
                    dispatch(
                      removeFromWishlist({
                        id: item.id,
                        color: item.color,
                        size: item.size,
                      })
                    );

                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        originalPrice: item.originalPrice,
                        discount: item.discount,
                        price: item.price,
                        code: item.code,
                        color: item.color,
                        imageUrl: item.imageUrl,
                        category: item.category,
                        size: item.size,
                        quantity: item.quantity || 1,

                        // ⭐ FIXED >> Be sure these two are included
                        allSizes: item.allSizes,
                        allColors: item.allColors,
                      })
                    );

                    toast.success("Added to cart successfully!");
                  }}
                >
                  Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-2.5 items-center">
          <h3 className="text-2xl font-bold">
            Aww ..Snap. Your wish list is empty!
          </h3>
          <p>
            Check out our latest arrivals and stay up to date with our latest
            styles!
          </p>
          <button className="font-bold bg-black w-[250px]  py-2 text-white  hover:bg-gray-600">
            <NavLink to={"/"}>Start shopping</NavLink>
          </button>
        </div>
      )}
    </div>
    // <div>
    //   <div className="flex justify-between items-center">
    //     <p>Your wishlist (2 items)</p>
    //     <div className="flex gap-1 items-center cursor-pointer">
    //       <LuPencil />
    //       <p>Recently added </p>
    //       <RiArrowDownSLine />
    //     </div>
    //   </div>
    //   {/* wishlist */}
    //   <div className="grid grid-cols-4 justify-between pt-5">
    //     <div>
    //       <div className="flex gap-1">
    //         <img
    //           src="https://zandokh.com/image/cache/catalog/products/2025-04/1122501835/evening0904202513113-cr-450x672.jpg"
    //           alt=""
    //           className="w-30  object-cover"
    //         />
    //         <div className=" px-2 rounded-md flex-1">
    //           {/* price */}
    //           <div className="flex items-center justify-between   py-1 rounded-md">
    //             <div className="flex items-center gap-1">
    //               <p className="font-semibold text-red-500">US $8.15</p>
    //               <p className="text-gray-400">40%</p>
    //               <p className="text-gray-400 line-through">US $13.59</p>
    //             </div>
    //             <FaTrash />
    //           </div>

    //           <p className="mt-2 font-medium">
    //             Oversized T-shirts With Printed
    //           </p>
    //           <p className="text-sm text-gray-600">code. 1123432343</p>

    //           {/* Color & Size Selects */}
    //           <div className="grid grid-cols-2 gap-3 mt-2">
    //             {/* Color */}
    //             <div>
    //               <label className="text-sm font-semibold">Color</label>
    //               <select className="w-full border rounded-lg px-2 py-1 mt-1">
    //                 <option value="white">White</option>
    //                 <option value="black">Black</option>
    //                 <option value="blue">Blue</option>
    //               </select>
    //             </div>

    //             {/* Size */}
    //             <div>
    //               <label className="text-sm font-semibold">Size</label>
    //               <select className="w-full border rounded-lg px-2 py-1 mt-1">
    //                 <option value="S">S</option>
    //                 <option value="M">M</option>
    //                 <option value="L">L</option>
    //                 <option value="XL">XL</option>
    //               </select>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <button className="border rounded-lg w-full py-2 mt-2">
    //         Move to cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default WishList;
