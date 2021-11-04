import { FC } from "react";

import "./cartItem.style.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow_small.svg";
import { ReactComponent as Cancel } from "../../assets/icons/cancel_icn.svg";

interface props {
  image: string;
  title: string;
  quantity: number;
  price: number;
  addOne: Function;
  removeOne: Function;
  removeAll: Function;
}

const CartItem: FC<props> = ({
  image,
  title,
  quantity,
  price,
  addOne,
  removeOne,
  removeAll,
}) => {
  return (
    <div className="cart-item jc-sb ai-c">
      <div className="cart-item__desc flex ai-c">
        <img src={image} alt="product" />
        <h4>{title}</h4>
      </div>
      <div className="cart-item__btns flex ai-c">
        <Arrow
          onClick={() => {
            removeOne();
          }}
        ></Arrow>
        <h4>{quantity}</h4>
        <Arrow
          onClick={() => {
            addOne();
          }}
        ></Arrow>
      </div>
      <h4>${price * quantity}</h4>
      <Cancel
        onClick={() => {
          removeAll();
        }}
      ></Cancel>
    </div>
  );
};

export default CartItem;
