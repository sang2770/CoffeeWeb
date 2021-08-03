import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  RemoveFromCart,
  IncreaseItem,
  ResetCart,
} from "../../Redux/Action/ActionsProduct";
import CartItem from "./CartItem";
function CartList({ Cart, RemoveCart, ResetCart, Qty }) {
  const [Total, setTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    console.log(typeof count);

    Cart.forEach((item) => {
      const a = (item.Price * item.qty).toFixed(2);
      count = count + Number(a);
    });

    setTotal(count);
  }, [Cart]);
  return (
    <div className="CartList">
      <div className="CartList_container ">
        <table className="CartList_table" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th colSpan={3}> Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Cart.map((item, index) => {
              return (
                <CartItem
                  item={item}
                  key={index}
                  RemoveCart={RemoveCart}
                  Qty={Qty}
                />
              );
            })}
          </tbody>
        </table>
        <div className="CartList_total">
          <div className="CartList_total_container">
            <div className="CartList_total_title">CART TOTALS</div>
            <div className="CartList_total_List">
              <div className="CartList_total_subtotal">
                <h2>Subtotal:</h2>
                <h3>$</h3>
              </div>
              <div className="CartList_total_Delivery">
                <h2>Delivery:</h2>
                <h3>$0.00</h3>
              </div>
              <div className="CartList_total_Discount">
                <h2>Discount</h2>
                <h3>$3.00</h3>
              </div>
            </div>
            <div className="CartList_total_sum">
              <h2>Total:</h2>
              <h3>${Total}</h3>
            </div>
            <button
              className="CartList_total_btn btn"
              onClick={() => {
                ResetCart();
              }}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const MapStateToProps = (State) => {
  return {
    Cart: State.products.cart,
  };
};
const MapDispathToProps = (Dispatch) => {
  return {
    RemoveCart: (id) => {
      Dispatch(RemoveFromCart(id));
    },
    ResetCart: () => {
      Dispatch(ResetCart());
    },
    Qty: (id, number) => {
      Dispatch(IncreaseItem(id, number));
    },
  };
};
export default connect(MapStateToProps, MapDispathToProps)(CartList);
