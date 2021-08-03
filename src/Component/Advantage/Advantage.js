import React from "react";
import { GiCoffeeBeans, GiFoodTruck } from "react-icons/gi";
import { RiTodoLine } from "react-icons/ri";
function Advantage() {
  return (
    <div className="Advantage">
      <div className="Advantage_container">
        <div className="Advantage_Item">
          <div className="Advantage_Icon">
            <RiTodoLine />
          </div>
          <div className="Advantage_title">EASY TO ORDER</div>
          <div className="Advantage_content">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </div>
        </div>
        <div className="Advantage_Item">
          <div className="Advantage_Icon">
            <GiFoodTruck />
          </div>
          <div className="Advantage_title">FASTEST DELIVERY</div>
          <div className="Advantage_content">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </div>
        </div>
        <div className="Advantage_Item">
          <div className="Advantage_Icon">
            <GiCoffeeBeans />
          </div>
          <div className="Advantage_title">QUALITY COFFEE</div>
          <div className="Advantage_content">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
