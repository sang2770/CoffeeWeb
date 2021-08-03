import React from "react";
import { GoCalendar } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
function InfItem({ Img, date, admin, comment }) {
  return (
    <div className="Content_box">
      <img src={Img} alt="Img blog" className="Content_box_img" />
      <div className="Content_box_Inf">
        <div className="box_Inf_title">
          Even the all-powerful Pointing has no control about
        </div>
        <ul className="box_Inf_Time">
          <li className="Time_item">
            <GoCalendar />
            <span>{date}</span>
          </li>
          <li className="Time_item">
            <BsFillPersonFill />
            <span>{admin}</span>
          </li>
          <li className="Time_item">
            <BiMessageDetail />
            <span>{comment}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfItem;
