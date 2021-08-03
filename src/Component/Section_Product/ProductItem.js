import React from "react";
import { Link } from "react-router-dom";
function ProductItem({ item, method, currentItem }) {
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
          method(item.id);
        }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
