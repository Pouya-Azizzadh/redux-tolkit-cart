import React from "react";
// icons
import { ChevronDown, ChevronUp } from "../icons";
//redux
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

function CartItem({ id, img, title, price, amount }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  const Increament = () => {
    dispatch(increase({id}));
  };
  const Decreament = () => {
    dispatch(decrease({id}));
  };
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="cart-item-detail">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleRemove}>
          حذف
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={Increament}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={Decreament}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
