import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
