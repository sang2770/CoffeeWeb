import React from "react";
import { Link } from "react-router-dom";
function Slider_Item({ key, Item }) {
  return (
    <div className="Slider_Item">
      <img src={Item.img} alt="Img_Slider" className="Slider_img" />
      <div className="Text_Container">
        <div className="Text_Slider">
          <h3 className="Slider_show">Welcome</h3>
          <h1 className="Slider_title">{Item.title}</h1>
          <p className="Slider_content">{Item.content}</p>
          <button className="btn btn-active">
            <Link to="/">Order Now</Link>
          </button>
          <button className="btn">
            <Link to="/">View Menu</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider_Item;
