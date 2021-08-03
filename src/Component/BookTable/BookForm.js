import React from "react";

function BookForm() {
  return (
    <div className="Book_Form">
      <div className="Book_Form_container">
        <div className="Book_Form_Name">BOOK A TABLE</div>
        <div className="form_control Input_Name">
          <input className="Form_First_name" placeholder="First Name" />
          <input className="Form_Last_name" placeholder="Last Name" />
        </div>
        <div className="form_control Option">
          <input type="date" className="Form_Date" placeholder="Date" />
          <input type="time" className="Form_Time" placeholder="Time" />
          <input type="text" className="Form_Phone" placeholder="Phone" />
        </div>
        <div className="form_control submit">
          <input type="text" className="Form_message" placeholder="Message" />
          <button className="btn Form_btn">Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default BookForm;
