import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    cart: CartSlice,
  },
});
export default store;
