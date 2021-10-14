import { FC } from "react";
import { Link } from "react-router-dom";
import BtnCta from "../../buttons/btn-cta/BtnCta.component";

import "./cardProduct.style.scss";

interface props {
  href: string;
  displayImg: string;
  title: string;
  desc: string;
  price: number;
}

const CardProduct: FC<props> = ({ href, displayImg, title, desc, price }) => {
  return (
    <Link to={href} className="card-product">
      <div className="card-product__img">
        <img src={displayImg} alt="display" />
      </div>
      <div className="card-product__content">
        <h2>{title}</h2>
        <p className="font-subtitle-regular-gray">{desc}</p>
        <div className="flex ai-c jc-sb">
          <h2>$ {price}</h2>
          <BtnCta
            pinkBorder
            text="Shop Now"
            onClick={() => console.log("ok")}
          ></BtnCta>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
