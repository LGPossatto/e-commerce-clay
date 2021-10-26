import "./cartItem.style.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow_small.svg";
import { ReactComponent as Cancel } from "../../assets/icons/cancel_icn.svg";
import imgCardCarousel1 from "../../assets/images/img-card-carousel-1.jpg";

const CartItem = () => {
  return (
    <div className="cart-item flex jc-sb ai-c">
      <div className="cart-item__desc flex ai-c">
        <img src={imgCardCarousel1} alt="product" />
        <h4>Gucci Leather belt</h4>
      </div>
      <div className="cart-item__btns flex ai-c">
        <Arrow onClick={() => {}}></Arrow>
        <h4>5</h4>
        <Arrow onClick={() => {}}></Arrow>
      </div>
      <h2>$352</h2>
      <Cancel onClick={() => {}}></Cancel>
    </div>
  );
};

export default CartItem;
