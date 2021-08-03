import React from "react";

function MenuItem({ item }) {
  return (
    <div className="MenuType_Item">
      <img src={item.Image} alt="" className="MenuItem_img" />
      <div className="MenuItem_Box">
        <div className="MenuItem_Box_Inf">
          <div className="MenuItem_Box_Name">{item.Name}</div>
          <div className="MenuItem_Box_Price">${item.Price}</div>
        </div>
        <div className="MenuItem_Box_Descriptions">{item.Descriptions}</div>
      </div>
    </div>
  );
}

export default MenuItem;
