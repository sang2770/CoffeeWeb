import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown as Arow } from "react-icons/io";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { GoThreeBars as Bar } from "react-icons/go";
import { connect } from "react-redux";
function Header({ Cart }) {
  const [click, setclick] = useState(false);
  useEffect(() => {}, [Cart]);
  const handleClick = () => {
    setclick(!click);
  };
  return (
    <div className={click ? " Header active_menu " : "Header"}>
      <div className="container grid wide ">
        <div className="Header_container_logo">
          <div className="Header_logo">
            <h1 className="logo_title">COFFEE</h1>
            <p className="logo_description">BLEND</p>
          </div>
          <div className="Header_bar">
            <p className="bar" onClick={handleClick}>
              <Bar />
              <span onClick={handleClick}>MENU</span>
            </p>
          </div>
        </div>

        <ul className="Header_ListMenuItem  ">
          <li className="MenuItem">
            <Link to="/">
              <span onClick={handleClick}>HOME</span>
            </Link>
          </li>
          <li className="MenuItem">
            <Link to="/Menu">
              <span onClick={handleClick}>MENU</span>
            </Link>
          </li>
          <li className="MenuItem">
            <Link to="/Service">
              <span onClick={handleClick}>SERVICES</span>
            </Link>
          </li>
          <li className="MenuItem">
            <Link to="/Blog">
              <span onClick={handleClick}>BLOG</span>
            </Link>
          </li>
          <li className="MenuItem">
            <Link to="/About">
              <span onClick={handleClick}>ABOUT</span>
            </Link>
          </li>
          <li className="MenuItem down">
            <Link to="/">
              SHOP <Arow />
            </Link>
            <ul className="Child_menu">
              <li className="Chils_item">
                <Link to="/">
                  <span onClick={handleClick}>Shop</span>
                </Link>
              </li>
              <li className="Chils_item">
                <Link to="/">
                  <span onClick={handleClick}>Single Product</span>
                </Link>
              </li>
              <li className="Chils_item">
                <Link to="/">
                  <span onClick={handleClick}>Cart</span>
                </Link>
              </li>
              <li className="Chils_item">
                <Link to="/">
                  <span onClick={handleClick}>Checkout</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="MenuItem">
            <Link to="/Contact">
              <span onClick={handleClick}>CONTACT</span>
            </Link>
          </li>
          <li className="MenuItem Cart_number">
            <p className="logo_cart">
              <Link to="/Cart">
                <span onClick={handleClick}>
                  <CartIcon />
                </span>
              </Link>
              <span className="Number_Cart">
                {Cart.length ? Cart.length : 0}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
const MapStateToProps = (State) => {
  return {
    Cart: State.products.cart,
  };
};
export default connect(MapStateToProps)(Header);
