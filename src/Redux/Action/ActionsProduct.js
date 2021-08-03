import * as Type from "../Type/ActionTypes";
export const addToCart = (itemID, qty = 1) => {
  return {
    type: Type.ADDTOCART,
    payload: {
      id: itemID,
      qty,
    },
  };
};
export const RemoveFromCart = (itemID) => {
  return {
    type: Type.REMOVEFROMCART,
    payload: {
      id: itemID,
    },
  };
};
export const IncreaseItem = (itemID, number) => {
  return {
    type: Type.ADJUSTITEMQTY,
    payload: {
      id: itemID,
      qty: number,
    },
  };
};
export const ResetCart = () => {
  return {
    type: Type.RESETCART,
    payload: "",
  };
};
export const CurrentItem = (item) => {
  return {
    type: Type.CURRENTITEM,
    payload: item,
  };
};
