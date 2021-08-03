import React, { useRef, useEffect } from "react";
import Data from "./CustomerData";
import CustomerItem from "./CustomerItem";
import SectionHeader from "../SectionHeader/SectionHeader";
function Customer() {
  const Bg_1 = useRef();
  useEffect(() => {
    // console.log(Bg.current.offsetTop);
    window.addEventListener("scroll", handle, true);
    return () => {
      console.log("Destroy ok");
      window.removeEventListener("scroll", handle, true);
    };
  }, []);
  const handle = function () {
    const value = Bg_1.current.offsetTop;
    if (window.scrollY > value - 600) {
      console.log("Hight");
      // console.log(value - window.scrollY);
      Bg_1.current.style.backgroundPosition = `50% ${window.scrollY - value}px`;
    }
  };
  return (
    <div className="Customer_container" ref={Bg_1}>
      <SectionHeader
        title="CUSTOMERS SAYS"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <div className="Customer_ListItems">
        {Data.map((item, index) => {
          return <CustomerItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Customer;
