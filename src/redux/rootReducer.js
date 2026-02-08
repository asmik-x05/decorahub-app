import { combineReducers } from "@reduxjs/toolkit";
import userPreferencesReducer from "./userPreferences/userPreferenceSlice";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
  userPreferences: userPreferencesReducer,
  auth: authReducer,
  cart: cartReducer,
});
export default rootReducer;
