import { FC, useContext, useState } from "react";

import CartContext from "../../../context/cart/Cart.context";

import { IProduct } from "../../../context/products/Products.state";

import "./cardProductBig.style.scss";
import imgCardCarousel1 from "../../../assets/images/img-card-carousel-1.jpg";

import Pill from "../../pill/Pill.component";
import BtnCta from "../../buttons/btn-cta/BtnCta.component";
import FormRadio from "../../forms/form-radio/FormRadio.component";
import FormRadioColors from "../../forms/form-radio-colors/FormRadioColors.component";
import CarouselCardImg from "../../carousel/carousel-card-img/CarouselCardImg.component";

interface props {
  product: IProduct;
}

const CardProduct: FC<props> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState<string>("null");
  const [color, setColor] = useState<string>("null");

  // helper const
  const imgList = [
    product.image,
    imgCardCarousel1,
    product.image,
    imgCardCarousel1,
    product.image,
    imgCardCarousel1,
    product.image,
    imgCardCarousel1,
  ];

  const addProduct = () => {
    addToCart({ ...product, size, color, quantity: 1 });
  };

  return (
    <div className="card-product-big flex flex-fw-w jc-sb">
      <div className="card-product-big__img-box">
        <CarouselCardImg imgList={imgList}></CarouselCardImg>
      </div>
      <div className="card-product-big__info">
        <Pill productPill text="Popular"></Pill>
        <h1 className="">{product.title}</h1>
        <div>{product.rating.rate}&#9733;</div>
        <h4 className="">Info</h4>
        <p className="font-subtitle-regular-gray">{product.description}</p>
        <FormRadio
          text="Size"
          options={["L", "M", "S"]}
          setSize={setSize}
        ></FormRadio>
        <FormRadioColors
          text="Colors"
          options={["1B2437", "127681", "32E0C4"]}
          setColor={setColor}
        ></FormRadioColors>
        <div className="card-product-big__cta-box flex jc-sb ai-c">
          <h2>$ {product.price}</h2>
          <div className="flex jc-fe ai-c">
            <BtnCta text="Shop Now" onClick={() => {}}></BtnCta>
            <BtnCta
              text="Add to Cart"
              pinkBorder
              onClick={() => {
                addProduct();
              }}
            ></BtnCta>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
