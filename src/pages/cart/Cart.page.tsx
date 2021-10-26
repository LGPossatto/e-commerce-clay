import { useState } from "react";

import "./cart.style.scss";
import BtnCta from "../../components/buttons/btn-cta/BtnCta.component";
import CartItem from "../../components/cart-item/CartItem.component";

const Cart = () => {
  const [progress, setProgress] = useState<number>(0);

  return (
    <div className="cart container">
      <div className="flex flex-fd-c">
        <div className="cart__progress flex jc-sb">
          <div className={`${progress === 0 ? "progress-active" : ""}`}>
            <h4>01. Cart</h4>
          </div>
          <div className={`${progress === 1 ? "progress-active" : ""}`}>
            <h4>02. Checkout</h4>
          </div>
          <div className={`${progress === 2 ? "progress-active" : ""}`}>
            <h4>03. Shipping</h4>
          </div>
          <div className={`${progress === 3 ? "progress-active" : ""}`}>
            <h4>04. Done</h4>
          </div>
        </div>
        {progress === 0 && (
          <div className="cart__items">
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
          </div>
        )}
        {progress === 1 && <div className="cart__Checkout">Checkout</div>}
        {progress === 2 && <div className="cart__Shipping">Shipping</div>}
        {progress === 3 && <div className="cart__Done">Done</div>}
        <div className="cart__bot flex flex-fd-c ai-fe">
          <h2>Total $618</h2>
          <BtnCta
            text="Continue"
            onClick={() => {
              setProgress(progress + 1);
            }}
          ></BtnCta>
        </div>
      </div>
    </div>
  );
};

export default Cart;
