import React, { useState } from "react";
import ProductItem from "./ProductItem";
function ListProduct({ product, method, currentItem }) {
  const [Type, setType] = useState("Main_Dish");
  const [number, setnumber] = useState(3);
  return (
    <div className="ListProduct">
      <div className="ListProduct_container">
        <ul className="ListProduct_categori">
          <li
            className={
              Type === "Main_Dish"
                ? "categories_item categories_active"
                : "categories_item "
            }
            onClick={() => {
              setType("Main_Dish");
              setnumber(3);
            }}>
            Main Dish
          </li>
          <li
            className={
              Type === "Drinks"
                ? "categories_item categories_active"
                : "categories_item "
            }
            onClick={() => {
              setType("Drinks");
              setnumber(3);
            }}>
            Drinks
          </li>
          <li
            className={
              Type === "Desserts"
                ? "categories_item categories_active"
                : "categories_item "
            }
            onClick={() => {
              setType("Desserts");
              setnumber(3);
            }}>
            Desserts
          </li>
        </ul>
        <div className="ListProduct_lists">
          {product
            .filter((item) => item.Type === Type)
            .slice(0, number)
            .map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  item={item}
                  method={method}
                  currentItem={currentItem}
                />
              );
            })}
        </div>
      </div>
      <button
        className="btn ListProduct_lists_btn"
        onClick={() => {
          setnumber(number + 3);
        }}>
        Show More{" "}
      </button>
    </div>
  );
}

export default ListProduct;
