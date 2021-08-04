import React from "react";
import { Link } from "react-router-dom";
function ProductItem({ item, method, currentItem, checkInCart }) {
  const handlecheck = () => {
    console.log(item.id);
    if (checkInCart(item.id)) {
      alert("Products are now available in the cart!");
    } else {
      method(item.id);

      alert("Products that have been successfully added to the cart!");
    }
    // console.log(checkInCart(item.id));
  };
  return (
    <div className="Product_item">
      <div className="Product_item_Img">
        <img src={item.Image} alt="Product_item" />
      </div>
      <div
        className="Product_item_name"
        onClick={() => {
          currentItem(item);
        }}>
        <Link to={"/SingleProduct/:" + item.id}>{item.Name}</Link>
      </div>
      <div className="Product_item_Descriptions">{item.Descriptions}</div>
      <div className="Product_item_Price">{item.Price} $</div>
      <button
        className="btn Product_item_btn"
        onClick={() => {
          handlecheck();
        }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
