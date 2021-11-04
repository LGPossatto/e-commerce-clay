import { useContext, useState } from "react";
import { useHistory } from "react-router";

import CartContext from "../../context/cart/Cart.context";

import { roundDecimals } from "../../assets/scripts/utils";

import "./cart.style.scss";
import { ReactComponent as SVG } from "../../assets/icons/check.svg";

import BtnCta from "../../components/buttons/btn-cta/BtnCta.component";
import CartItem from "../../components/cart-item/CartItem.component";
import FormCheckout from "../../components/forms/form-checkout/FormCheckout.component";
import FormShipping from "../../components/forms/form-shipping/FormShipping.component";

const Cart = () => {
  const { products, addToCart, removeOneFromCart, removeAllFromCart } =
    useContext(CartContext);
  const [progress, setProgress] = useState<number>(0);
  const history = useHistory();

  const backHome = () => {
    history.push("/");
  };

  return (
    <div className="cart container">
      <div
        className={`flex flex-fd-c ${
          progress === 3 ? "cart-remove-padding" : ""
        }`}
      >
        <div className="cart__progress flex jc-sb">
          <div className={`${progress === 0 ? "progress-active" : ""}`}>
            <h4>1. Cart</h4>
          </div>
          <div className={`${progress === 1 ? "progress-active" : ""}`}>
            <h4>2. Checkout</h4>
          </div>
          <div className={`${progress === 2 ? "progress-active" : ""}`}>
            <h4>3. Shipping</h4>
          </div>
          <div className={`${progress === 3 ? "progress-active" : ""}`}>
            <h4>4. Done</h4>
          </div>
        </div>
        {progress === 0 && (
          <div className="cart__items">
            {products.map((product, i) => (
              <CartItem
                key={i}
                image={product.image}
                title={product.title}
                quantity={product.quantity}
                price={product.price}
                addOne={() => {
                  addToCart(product);
                }}
                removeOne={() => {
                  removeOneFromCart(product);
                }}
                removeAll={() => {
                  removeAllFromCart(product);
                }}
              ></CartItem>
            ))}
          </div>
        )}
        {progress === 1 && (
          <div className="cart__checkout">
            <FormCheckout></FormCheckout>
          </div>
        )}
        {progress === 2 && (
          <div className="cart__shipping">
            <FormShipping></FormShipping>
          </div>
        )}
        {progress === 3 && (
          <div className="cart__done flex flex-fd-c ai-c">
            <SVG></SVG>
            <h2>Successfully ordered!</h2>
            <p className="font-subtitle-regular-gray">
              And then she said that we would go to a clothing store and was
              truly inspired
            </p>
            <BtnCta
              text="Back to Shop"
              onClick={() => {
                backHome();
              }}
            ></BtnCta>
          </div>
        )}
        <div className="cart__bot flex flex-fd-c ai-fe">
          {progress !== 3 && (
            <h2>
              Total $
              {roundDecimals(
                products.reduce((prev, el) => prev + el.price * el.quantity, 0)
              )}
            </h2>
          )}
          <div className="flex ai-c jc-fe">
            {progress !== 3 && progress !== 0 && (
              <BtnCta
                text="Back"
                pinkBorder
                onClick={() => {
                  setProgress(progress - 1);
                }}
              ></BtnCta>
            )}
            {progress < 2 && (
              <BtnCta
                text="Continue"
                onClick={() => {
                  setProgress(progress + 1);
                }}
              ></BtnCta>
            )}
            {progress === 2 && (
              <BtnCta
                text="Finish"
                onClick={() => {
                  setProgress(progress + 1);
                }}
              ></BtnCta>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
