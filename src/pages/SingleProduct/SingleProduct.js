import React, { useState, useEffect } from "react";
import SectionNav from "../../Component/SectionNav/SectionNav";
import { IncreaseItem, addToCart } from "../../Redux/Action/ActionsProduct";
import { connect } from "react-redux";
function SingleProduct({ CurrentItem, Qty, addCart }) {
  const [number, setnumber] = useState(1);
  const [disable, setdisable] = useState(true);
  useEffect(() => {
    const a = CurrentItem.qty ? CurrentItem.qty : 1;
    setnumber(a);
  }, [CurrentItem.qty]);
  useEffect(() => {
    if (number > 1) setdisable(false);
    if (number === 1) setdisable(true);
  }, [number]);
  const PreNumber = () => {
    const a = number > 1 ? number - 1 : 1;
    setnumber(a);
    Qty(CurrentItem.id, a);
  };
  const NextNumber = () => {
    const a = number + 1;
    setnumber(a);
    Qty(CurrentItem.id, a);
  };
  return (
    <div className="SingleProduct">
      <SectionNav page="SingleProduct" />
      <div className="SingleProduct_container">
        <img
          src={CurrentItem.Image}
          alt="Current"
          className="SingleProduct_Img"
        />
        <div className="SingleProduct_Box">
          <div className="SingleProduct_Box_Name">{CurrentItem.Name}</div>
          <div className="SingleProduct_Box_Price">${CurrentItem.Price}</div>
          <div className="SingleProduct_Box_Descriptions">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. On her way she met a
            copy. The copy warned the Little Blind Text, that where it came from
            it would have been rewritten a thousand times and everything that
            was left from its origin would be the word "and" and the Little
            Blind Text should turn around and return to its own, safe country.
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </div>
          <div className="SingleProduct_Box_Number">
            <button
              className={
                !disable
                  ? "btn SingleProduct_Box_Pre"
                  : "btn SingleProduct_Box_Pre Disable"
              }
              onClick={() => {
                PreNumber();
              }}>
              -
            </button>
            <h1 className="SingleProduct_Number">{number}</h1>
            <button
              className="btn SingleProduct_Box_Pre"
              onClick={() => {
                NextNumber();
              }}>
              +
            </button>
          </div>
          <button
            className="btn SingleProduct_btn"
            onClick={() => {
              addCart(CurrentItem.id, number);
            }}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (State) => {
  return {
    CurrentItem: State.products.currentItem,
  };
};
const mapDispatchToProps = (Dispatch) => {
  return {
    addCart: (id, qty) => {
      Dispatch(addToCart(id, qty));
    },
    Qty: (id, number) => {
      Dispatch(IncreaseItem(id, number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
