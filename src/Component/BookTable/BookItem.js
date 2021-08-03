import React from "react";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";

function BookItem() {
  return (
    <div className="Address_container">
      <div className="Address_item">
        <div className="Address_item_Icon">
          <FaPhoneAlt />
        </div>
        <div className="Address_item_box">
          <h1 className="Box_Phone">000 (123) 456 7890</h1>
          <p className="Box_Description">
            A small river named Duden flows by their place and supplies.
          </p>
        </div>
      </div>
      <div className="Address_item">
        <div className="Address_item_Icon">
          <BiCurrentLocation />
        </div>
        <div className="Address_item_box">
          <h1 className="Box_Phone">198 West 21th Street</h1>
          <p className="Box_Description">
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
        </div>
      </div>
      <div className="Address_item">
        <div className="Address_item_Icon">
          <FaRegClock />
        </div>
        <div className="Address_item_box">
          <h1 className="Box_Phone">Open Monday-Friday</h1>
          <p className="Box_Description">8:00am - 9:00pm</p>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
