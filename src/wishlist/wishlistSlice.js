import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const existing = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (!existing) {
        state.push({ ...action.payload });
      }
    },

    removeFromWishlist: (state, action) => {
      return state.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
    },

    clearWishlist: () => {
      return [];
    },

    // ✅ NEW — update wishlist when user changes size/color
    updateWishlistItem: (state, action) => {
      const { id, oldColor, oldSize, newColor, newSize } = action.payload;

      const item = state.find(
        (prod) =>
          prod.id === id &&
          prod.color === oldColor &&
          prod.size === oldSize
      );

      if (item) {
        item.color = newColor;
        item.size = newSize;
      }
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  updateWishlistItem,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
