import React from "react";
import R1 from "../../Media/Image/xgallery-1.jpg.webp";
import R2 from "../../Media/Image/xgallery-2.jpg.webp";
import R3 from "../../Media/Image/xgallery-3.jpg.webp";
import R4 from "../../Media/Image/xgallery-4.jpg.webp";
import { AiOutlineSearch } from "react-icons/ai";
function SectionReview() {
  return (
    <div className="SectionReview">
      <div className="SectionReview_container">
        <div className="SectionReview_img_box">
          <div className="SectionReview-icon">
            <span>
              {" "}
              <AiOutlineSearch />
            </span>
          </div>
          <img src={R1} alt="" className="SectionReview_img" />
        </div>
        <div className="SectionReview_img_box">
          <div className="SectionReview-icon">
            <span>
              {" "}
              <AiOutlineSearch />
            </span>
          </div>
          <img src={R2} alt="" className="SectionReview_img" />
        </div>
        <div className="SectionReview_img_box">
          <div className="SectionReview-icon">
            <span>
              {" "}
              <AiOutlineSearch />
            </span>
          </div>
          <img src={R3} alt="" className="SectionReview_img" />
        </div>
        <div className="SectionReview_img_box">
          <div className="SectionReview-icon">
            <span>
              {" "}
              <AiOutlineSearch />
            </span>
          </div>
          <img src={R4} alt="" className="SectionReview_img" />
        </div>
      </div>
    </div>
  );
}

export default SectionReview;
