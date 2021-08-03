import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./ProductReducer";
const rootReducer = combineReducers({
  products: ProductReducer,
});
export default rootReducer;
