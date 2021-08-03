import React from "react";
import MenuItem from "./MenuItem";
function MenuType({ item, type }) {
  return (
    <div className="MenuType">
      <div className="MenuType_container">
        <div className="MenuType_title">{type}</div>
        <div className="MenuType_List">
          {item.slice(0, 3).map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuType;
