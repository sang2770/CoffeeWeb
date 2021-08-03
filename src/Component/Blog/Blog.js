import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Data from "./BlogData";
import BlogItem from "./BlogItem";
function Blog({ title, content }) {
  const [count, setcount] = useState(3);
  return (
    <div className="Blog">
      <div className="Blog_container">
        <SectionHeader title={title} content={content} />
        <div className="Blog_list">
          {Data.map((item, index) => {
            return <BlogItem item={item} key={index} />;
          }).slice(0, count)}
        </div>
        <button
          className="btn Blog_btn"
          onClick={() => {
            setcount(count + 3);
          }}>
          Show More
        </button>
      </div>
    </div>
  );
}

export default Blog;
