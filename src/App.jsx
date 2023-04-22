import { useState, useEffect } from "react";

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
//redux
import { calculateTotals } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cart);
  const htmlelement = window.document.documentElement;
  htmlelement.dir ='rtl'
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
