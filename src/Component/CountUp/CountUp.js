import React, { useRef, useEffect } from "react";
import Data from "./CountData";
import CountUpItem from "./CountUpItem";
function CountUp() {
  const Bg = useRef(null);
  useEffect(() => {
    // console.log(Bg.current.offsetTop);
    const value = Bg.current.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.scrollY > value - 600 && Bg.current !== null) {
        // console.log("Hight");
        // console.log(value - window.scrollY);
        Bg.current.style.backgroundPosition = `50% ${window.scrollY - value}px`;
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Destroy");
      });
    };
  }, []);
  return (
    <div className="Section_CountUp" ref={Bg}>
      <div className="overlay"></div>
      <div className="Section_CountUp_container">
        {Data.map((item, index) => {
          return (
            <div className="CountUpitem_container" key={index}>
              <CountUpItem name={item.Name} number={item.Number} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountUp;
