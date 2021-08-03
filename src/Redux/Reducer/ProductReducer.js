import * as TYPE from "../Type/ActionTypes";
import DataProducts from "./ProductData";
const INITIALSTATE = {
  product: DataProducts,
  cart: [{ ...DataProducts[1], qty: 1 }],
  currentItem: null,
};
const ProductReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case TYPE.ADDTOCART:
      //todo: check product in list
      const id = action.payload.id;
      const itemProduct = state.product.find((item) => {
        return item.id === id;
      });
      //todo : check product in cart
      const check = state.cart.find((item) => {
        return item.id === id ? true : false;
      });
      return {
        ...state,
        cart: check
          ? state.cart.map((item) => {
              return item.id === id ? { ...item, qty: item.qty + 1 } : item;
            })
          : [...state.cart, { ...itemProduct, qty: action.payload.qty }],
      };
    case TYPE.REMOVEFROMCART:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case TYPE.CURRENTITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case TYPE.ADJUSTITEMQTY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item;
        }),
      };
    case TYPE.RESETCART:
      return {
        ...state,
        cart: state.cart.filter((item) => item === 0),
      };
    default:
      return state;
  }
};
export default ProductReducer;
