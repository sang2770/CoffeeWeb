import React from "react";
import SectionNav from "../../Component/SectionNav/SectionNav";
import MenuList from "../../Component/Menu/MenuList";
import Booktable from "../../Component/BookTable/Booktable";
import SectionProduct from "../../Component/Section_Product/SectionProduct";
function Menu() {
  return (
    <div className="Menu">
      <SectionNav page="Our Menu" />
      <Booktable />
      <MenuList />

      <SectionProduct
        title="OUR PRODUCTS"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        type="product"
      />
    </div>
  );
}

export default Menu;
