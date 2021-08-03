import React from "react";
import ProductItem from "./ProductItem";
function List_coffee({ product, method, currentItem }) {
  return (
    <div className="List_coffee">
      {product.map((item, index) => {
        return item.Type === "Coffee" ? (
          <ProductItem
            key={index}
            item={item}
            method={method}
            currentItem={currentItem}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default List_coffee;
