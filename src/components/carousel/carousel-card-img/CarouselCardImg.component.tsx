import { FC, useState } from "react";

import "./carouselCardImg.style.scss";

interface props {
  imgList: string[];
}

const CarouselCardImg: FC<props> = ({ imgList }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className="carousel-card-img">
      <div className="carousel-card-img__top">
        <img src={imgList[activeIdx]} alt="product" />
      </div>
      <div className="carousel-card-img__bot flex">
        {imgList.map((img, i) => (
          <div
            key={i}
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
