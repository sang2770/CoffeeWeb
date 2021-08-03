import React from "react";
import Slider from "../../Component/Slider/Slider";
import BookTable from "../../Component/BookTable/Booktable";
import SectionAbout from "../../Component/Section_Home_1/Section_About";
import Advantage from "../../Component/Advantage/Advantage";
import AboutMenu from "../../Component/AboutMenu/Menu";
import CountUp from "../../Component/CountUp/CountUp";
import SectionProduct from "../../Component/Section_Product/SectionProduct";
import SectionReview from "../../Component/Section_Review/Section_review";
import Customer from "../../Component/Customer/Customer";
import Blog from "../../Component/Blog/Blog";
import SectionEnd from "../../Component/SectionEnd/SectionEnd";
function Home() {
  return (
    <div className="Home">
      <Slider />
      <BookTable />
      <SectionAbout />
      <Advantage />
      <AboutMenu />
      <CountUp />
      <SectionProduct
        title="BEST COFFEE SELLERS"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        type="coffee"
      />
      <SectionReview />
      <SectionProduct
        title="OUR PRODUCTS"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        type="product"
      />
      <Customer />
      <Blog
        title="RECENT FROM BLOG"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <SectionEnd />
    </div>
  );
}

export default Home;
