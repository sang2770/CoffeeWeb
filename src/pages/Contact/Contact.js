import React from "react";
import SectionNav from "../../Component/SectionNav/SectionNav";
import Bg1 from "../../Media/Image/xbg_2.jpg.webp";
import SectionEnd from "../../Component/SectionEnd/SectionEnd";

function Contact() {
  return (
    <div className="Contact">
      <SectionNav page="Contact Us" />
      <div className="Contact_container">
        <div className="Contact_Inf">
          <div className="Contact_Inf_title">Contact Information</div>
          <div className="Contact_Inf_Item">
            <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
            10016
          </div>
          <div className="Contact_Inf_Item">
            <span>Phone:</span> + 1235 2355 98
          </div>
          <div className="Contact_Inf_Item">
            <span>Email:</span> info@yoursite.com
          </div>
          <div className="Contact_Inf_Item">
            <span>Website:</span> yoursite.com
          </div>
        </div>
        <img src={Bg1} alt="" className="Contact_Img" />
      </div>
      <SectionEnd />
    </div>
  );
}

export default Contact;
