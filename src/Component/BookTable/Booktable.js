import React from "react";
import BookItem from "./BookItem";
import BookForm from "./BookForm";
function Booktable() {
  return (
    <div className="Book_Table">
      <div className="Book_Table_container grid">
        <div className="row">
          <div className="Address col l-8 c-12 m-12 ">
            <BookItem />
          </div>
          <div className="Book_Form-Container col l-4 c-12 m-12">
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booktable;
