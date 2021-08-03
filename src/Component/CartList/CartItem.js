import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function CartItem({ item, RemoveCart, Qty }) {
  const [Sum, setSum] = useState(item.Price * item.qty);
  const Handle = (e) => {
    setSum((Number(e.target.value) * item.Price).toFixed(2));
    Qty(item.id, parseInt(e.target.value) ? parseInt(e.target.value) : 0);
  };
  return (
    <tr className="CartItem">
      <td className="CartItem_icon_delete">
        <span
          onClick={() => {
            RemoveCart(item.id);
          }}>
          <AiOutlineClose />
        </span>
      </td>
      <td>
        <img src={item.Image} alt="" className="CartItem_img" />
      </td>
      <td className="CartItem_title">
        {item.Name} <p>{item.Descriptions}</p>
      </td>
      <td>
        $ <span>{item.Price}</span>
      </td>
      <td>
        <input
          type="text"
          className="CartItem_qty"
          placeholder={item.qty}
          onChange={Handle}
        />
      </td>
      <td>{Sum}</td>
    </tr>
  );
}

export default CartItem;
