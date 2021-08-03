import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import CountUp from "react-countup";
function CountUpItem({ name, number }) {
  return (
    <div className="CountUpItem">
      <div className="CountUpItem_icon">
        <GiCoffeeCup />
      </div>
      <div className="CountUpItem_Number">
        <CountUp start={0} end={number} duration={30}></CountUp>
      </div>
      <div className="CountUpItem_name">{name}</div>
    </div>
  );
}

export default CountUpItem;
