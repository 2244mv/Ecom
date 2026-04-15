import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const id = product.id;

      if (state.cartItems[id]) {
        state.cartItems[id].qty += 1;
      } else {
        state.cartItems[id] = { ...product, qty: 1 };
      }
    },

    removeFromCart: (state, action) => {
      delete state.cartItems[action.payload];
    },

    clearCart: (state) => {
      state.cartItems = {};
    },

    increaseQty: (state, action) => {
      const id = action.payload;

      if (state.cartItems[id]) {
        state.cartItems[id].qty += 1;
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;

      if (state.cartItems[id]) {
        if (state.cartItems[id].qty > 1) {
          state.cartItems[id].qty -= 1;
        } else {
          delete state.cartItems[id];
        }
      }
    },
  },
});

export const {
  addProductToCart,
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;