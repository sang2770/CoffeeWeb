import React from "react";
import { Link } from "react-router-dom";
function SectionNav({ page }) {
  return (
    <div className="SectionNav">
      <div className="SectionNav_container">
        <div className="SectionNav_box">
          <div className="SectionNav_title">{page}</div>
          <ul className="SectionNav_list">
            <li className="SectionNav_item">
              <Link to="/">Home</Link>
            </li>
            <li className="SectionNav_item SectionNav_active">
              <Link to="/">{page}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionNav;
