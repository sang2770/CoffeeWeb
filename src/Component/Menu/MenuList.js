import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MenuType from "./MenuType";
function MenuList({ products }) {
  const [List, setList] = useState({});
  useEffect(() => {
    let b = { ...List };
    products.forEach((item) => {
      const a = item.Type;
      if (!b[a]) {
        b[a] = [];
      } else {
        b[a].push(item);
      }
    });
    setList(b);
  }, [products]);
  return (
    <div className="MenuList">
      <div className="MenuList_container">
        {Object.entries(List).map((item, index) => {
          return <MenuType item={item[1]} key={index} type={item[0]} />;
        })}
      </div>
    </div>
  );
}
const MapStateToProps = (State) => {
  return {
    products: State.products.product,
  };
};
export default connect(MapStateToProps)(MenuList);
