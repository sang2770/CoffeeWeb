import React from "react";
import SectionNav from "../../Component/SectionNav/SectionNav";
import BlogItem from "../../Component/Blog/Blog";
function Blog() {
  return (
    <div className="Blog">
      <SectionNav page="Blog" />
      <BlogItem
        title="RECENT FROM BLOG"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
    </div>
  );
}

export default Blog;
