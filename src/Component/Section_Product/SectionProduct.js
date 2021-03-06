import React from "react";
import Listcoffee from "./List_coffee";
import { connect } from "react-redux";
import { addToCart, CurrentItem } from "../../Redux/Action/ActionsProduct";
import ListProduct from "./ListProduct";
import SectionHeader from "../SectionHeader/SectionHeader";
function SectionProduct({
  title,
  content,
  type,
  product,
  cart,
  addToCart,
  currentItem,
}) {
  function checkInCart(id) {
    console.log(cart);
    console.log(id);
    for (const item of cart) {
      if (item.id === id) return true;
    }
    return false;
    // console.log(id);
  }
  return (
    <div className="SectionProduct">
      <SectionHeader title={title} content={content} />
      {type === "coffee" ? (
        <Listcoffee
          product={product}
          method={addToCart}
          currentItem={currentItem}
          checkInCart={checkInCart}
        />
      ) : (
        <ListProduct
          product={product}
          method={addToCart}
          currentItem={currentItem}
          checkInCart={checkInCart}
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    product: state.products.product,
    cart: state.products.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    currentItem: (Item) => {
      dispatch(CurrentItem(Item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SectionProduct);
