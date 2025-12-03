// src/cartSlice/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      const existing = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.push({
          ...action.payload,
          allSizes: action.payload.allSizes,
          allColors: action.payload.allColors,
        });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
    },

    updateCartItem: (state, action) => {
      const { id, oldColor, oldSize, newColor, newSize } = action.payload;

      const item = state.find(
        (i) => i.id === id && i.color === oldColor && i.size === oldSize
      );

      if (item) {
        item.color = newColor;
        item.size = newSize;
      }
    },

    clearCart: () => [],
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItem,
  clearCart,
} = cartSlice.actions;

export const selectCartQuantity = (state) =>
  state.cart.reduce((total, i) => total + i.quantity, 0);

export default cartSlice.reducer;
