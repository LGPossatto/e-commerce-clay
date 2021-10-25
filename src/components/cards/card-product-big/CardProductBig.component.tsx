import { FC } from "react";

import "./cardProductBig.style.scss";
import Pill from "../../pill/Pill.component";
import BtnCta from "../../buttons/btn-cta/BtnCta.component";
import FormRadio from "../../forms/form-radio/FormRadio.component";
import FormRadioColors from "../../forms/form-radio-colors/FormRadioColors.component";

interface props {}

const CardProduct: FC<props> = () => {
  return (
    <div className="card-product-big flex jc-sb">
      <div className="card-product-big__img-box"></div>
      <div className="card-product-big__info">
        <Pill productPill text="Popular"></Pill>
        <h1 className="">Black Valentino dress with tulle</h1>
        <div>Stars</div>
        <h4 className="">Info</h4>
        <p className="font-subtitle-regular-gray">
          Dress with tulle and collar Peter Pan from REDValentino (Red
          Valentino). Peter Pan collar, tulle panels, sleeveless model,
          concealed back zipper and pleated skirt. Black colour.
        </p>
        <FormRadio text="Size" options={["L", "M", "S"]}></FormRadio>
        <FormRadioColors
          text="Colors"
          options={["1B2437", "127681", "32E0C4"]}
        ></FormRadioColors>
        <div className="flex jc-sb ai-c">
          <h2>$ 1315</h2>
          <BtnCta text="Shop Now" onClick={() => {}}></BtnCta>
          <BtnCta text="Add to Cart" pinkBorder onClick={() => {}}></BtnCta>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
