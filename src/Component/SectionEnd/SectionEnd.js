import React from "react";
import BookForm from "../BookTable/BookForm";
import Bg1 from "../../Media/Image/xbg_1.jpg.webp";
function SectionEnd() {
  return (
    <div className="SectionEnd">
      <img src={Bg1} alt="" className="SectionEnd_img" />
      <div className="SectionEnd_Form">
        <BookForm />
      </div>
    </div>
  );
}

export default SectionEnd;
