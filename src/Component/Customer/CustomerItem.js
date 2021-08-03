import React from "react";

function CustomerItem({ item }) {
  return (
    <div className="CustomerItem">
      <div className="CustomerItem_rate">{item.Rate}</div>
      <div className="CustomerItem_Inf">
        <img src={item.Image} alt="" className="CustomerItem_Inf_Img" />
        <div className="CustomerItem_Inf_box">
          <div className="CustomerItem_Name">{item.Customer}</div>
          <div className="CustomerItem_Job">{item.Job}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerItem;
