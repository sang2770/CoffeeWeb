import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
function BlogItem({ item }) {
  return (
    <div className="BlogItem">
      <div className="BlogItem_imgcontainer">
        <img src={item.Image} alt="" className="BlogItem_img" />
      </div>
      <div className="BlogItem_Inf">
        <div className="BlogItem_Inf_Time">{item.Time}</div>
        <div className="BlogItem_Inf_Author">{item.Author}</div>
        <div className="BlogItem_Inf_Comment">
          <span>
            <BiMessageAltDetail />{" "}
          </span>
          {item.Comment}
        </div>
      </div>
      <div className="BlogItem_Title">{item.Title}</div>
      <div className="BlogItem_Content">{item.Content}</div>
    </div>
  );
}

export default BlogItem;
