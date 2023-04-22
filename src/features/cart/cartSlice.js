import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../carItems";
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.cartItems = [];
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },

    increase(state, action) {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId.id;
      });
      cartItem.amount = cartItem.amount + 1;
    },
    decrease(state, action) {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId.id;
      });
      if (cartItem.amount >= 1) {
        cartItem.amount = cartItem.amount - 1;
      }
    },

    calculateTotals(state) {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export default CartSlice.reducer;
export const { clearCart, removeItem, increase, decrease,calculateTotals } = CartSlice.actions;
