import React from "react";

function SectionHeader({ title, content }) {
  return (
    <div className="SectionHeader">
      <div className="SectionHeader_container grid wide">
        <div className="SectionHeader_title">{title}</div>
        <div className="SectionHeader-content">{content}</div>
      </div>
    </div>
  );
}

export default SectionHeader;
