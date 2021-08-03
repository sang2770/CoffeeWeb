import React from "react";
import SectionNav from "../../Component/SectionNav/SectionNav";
import CartList from "../../Component/CartList/CartList";
function Cart() {
  return (
    <div className="Cart">
      <SectionNav page="Cart" />
      <CartList />
    </div>
  );
}

export default Cart;
