import CartItem from "./CartItem";
// redux
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2 className="title">سبد خرید</h2>
          <h4 className="empty-cart">شما محصولی در سبد خرید خود ندارید</h4>
        </header>
      </section>
    );
  }
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className="cart">
      <header>
        <h2 className="title">سبد خرید</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClearCart}>
          حذف محصولات
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
