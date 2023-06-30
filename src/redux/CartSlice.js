import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearItem: (state, action) => {
      state.items = [];
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;