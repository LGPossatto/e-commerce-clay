import { useState } from "react";

import "./carouselCardImg.style.scss";
import imgCardCarousel1 from "../../../assets/images/img-card-carousel-1.jpg";
import imgCardCarousel2 from "../../../assets/images/img-card-drop.jpg";

const imgs = [
  imgCardCarousel1,
  imgCardCarousel2,
  imgCardCarousel1,
  imgCardCarousel2,
  imgCardCarousel1,
  imgCardCarousel2,
  imgCardCarousel1,
  imgCardCarousel2,
  imgCardCarousel1,
];

const CarouselCardImg = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className="carousel-card-img">
      <div className="carousel-card-img__top">
        <img src={imgs[activeIdx]} alt="product" />
      </div>
      <div className="carousel-card-img__bot flex">
        {imgs.map((img, i) => (
          <div
            className="img-box"
            onClick={() => {
              setActiveIdx(i);
            }}
          >
            <img src={img} alt="product" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCardImg;
