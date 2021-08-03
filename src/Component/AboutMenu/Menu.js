import React from "react";
import Menu_1 from "../../Media/Image/xmenu-1.jpg.webp";
import Menu_2 from "../../Media/Image/xmenu-2.jpg.webp";
import Menu_3 from "../../Media/Image/xmenu-3.jpg.webp";
import Menu_4 from "../../Media/Image/xmenu-4.jpg.webp";

import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="AboutMenu">
      <div className="AboutMenu_container grid wide">
        <div className="row">
          <div className="AboutMenu_box col l-6">
            <div className="AboutMenu_box_title">our menu</div>
            <p className="AboutMenu_box_content">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <button className="btn_AboutMenu">
              <Link to="/">View Full Menu</Link>
            </button>
          </div>
          <div className="AboutMenu_Img col l-3">
            <img src={Menu_1} alt="" className="AboutMenu_Img_item" />
            <img src={Menu_2} alt="" className="AboutMenu_Img_item" />
          </div>
          <div className="AboutMenu_Img col l-3">
            <img src={Menu_3} alt="" className="AboutMenu_Img_item" />
            <img src={Menu_4} alt="" className="AboutMenu_Img_item" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
