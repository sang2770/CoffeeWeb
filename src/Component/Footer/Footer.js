import React from "react";
import {
  FaFacebookF as FB,
  FaTwitter as Twitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Infitem from "./InfItem";
import blog_1 from "../../Media/Image/ximage_1.jpg.webp";
import blog_2 from "../../Media/Image/ximage_2.jpg.webp";
import { ImPhone } from "react-icons/im";
import { AiOutlineMail, AiFillInstagram as Instagram } from "react-icons/ai";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_container grid wide">
        <div className="row">
          <div className="Footer_Item col l-3">
            <h1 className="Footer_Item_title">ABOUT US</h1>
            <div className="Footer_Item_content">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <ul className="Footer_Item_Icons">
              <li className="Footer_Icon">
                <Link to="/">
                  <Twitter />
                </Link>
              </li>
              <li className="Footer_Icon">
                <Link to="/">
                  <FB />
                </Link>
              </li>
              <li className="Footer_Icon">
                <Link to="/">
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="Footer_Item col l-4">
            <h1 className="Footer_Item_title">RECENT BLOG</h1>
            <div className="Footer_Item_content">
              <Infitem
                Img={blog_1}
                date="Sept 15, 2018"
                admin="Admin"
                comment="19"
              />
              <Infitem
                Img={blog_2}
                date="Sept 15, 2018"
                admin="Admin"
                comment="19"
              />
            </div>
          </div>
          <div className="Footer_Item col l-2">
            <h1 className="Footer_Item_title">SERVICES</h1>
            <div className="Footer_Item_content">
              <h3 className="content_menu">Cooked</h3>
              <h3 className="content_menu">Deliver</h3>
              <h3 className="content_menu">Quality Foods</h3>
              <h3 className="content_menu">Mixed</h3>
            </div>
          </div>
          <div className="Footer_Item col l-3">
            <h1 className="Footer_Item_title">HAVE A QUESTIONS?</h1>
            <div className="Footer_Item_content">
              <div className="content_contact">
                <FaMapMarkerAlt />
                <div className="Contact_inf">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </div>
              </div>
              <div className="content_contact">
                <ImPhone />
                <div className="Contact_inf">+2 392 3929 210</div>
              </div>
              <div className="content_contact">
                <AiOutlineMail />
                <div className="Contact_inf">info@yourdomain.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_End">
        Copyright ©2021 All rights reserved | This template is made with by
        Colorlib
      </div>
    </div>
  );
}

export default Footer;
