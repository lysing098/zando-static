// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice/cartSlice.js";
import wishlisReducer from "../wishlist/wishlistSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist:wishlisReducer,
  },
});
