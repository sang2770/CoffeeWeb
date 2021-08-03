import React, { useState, useEffect } from "react";
import Data from "./Slider_Data";
import SliderItem from "./Slider_Item";
function Slider() {
  const [Count, setCount] = useState(1);
  const length = Data.length;
  useEffect(() => {
    let count = Count;
    let a = setInterval(() => {
      count = count === length ? 1 : count + 1;
      setCount(count);
    }, 5000);
    return () => {
      clearInterval(a);
    };
  });
  return (
    <div className="Slider">
      <div className="Slider_Container">
        {Data.map((item, index) => {
          const active = Count === item.id ? true : false;
          return active ? (
            <div key={index}>
              <SliderItem Item={item} />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
