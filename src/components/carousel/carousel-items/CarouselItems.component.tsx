import { useContext, useEffect, useState } from "react";

import "./carouselItems.style.scss";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow_small.svg";

import CardCarousel from "../../cards/card-carousel/CardCarousel.component";
import Bullet from "../../bullet/Bullet.component";
import ProductsContext from "../../../context/products/Products.context";

const CarouselItems = () => {
  const { productsCarousel } = useContext(ProductsContext);

  const boxRef: HTMLDivElement[] = [];
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const pushRef = (el: HTMLDivElement) => {
    if (!boxRef.includes(el) && el !== null) boxRef.push(el);
  };

  const leftArrowClick = () => {
    const boxLIdx = boxRef.length - 1;

    boxRef[activeIdx].classList.add("carousel-box-l");

    if (activeIdx === 0) {
      boxRef[boxLIdx].classList.remove("carousel-box-l");
      boxRef[boxLIdx].classList.add("carousel-box-r");
    } else {
      boxRef[activeIdx - 1].classList.remove("carousel-box-l");
      boxRef[activeIdx - 1].classList.add("carousel-box-r");
    }

    if (activeIdx === boxLIdx) {
      boxRef[0].classList.remove("carousel-box-r");
      setActiveIdx(0);
    } else {
      boxRef[activeIdx + 1].classList.remove("carousel-box-r");
      setActiveIdx(activeIdx + 1);
    }
  };

  const rightArrowClick = () => {
    const boxLIdx = boxRef.length - 1;

    boxRef[activeIdx].classList.add("carousel-box-r");

    if (activeIdx === 0) {
      boxRef[boxLIdx].classList.remove("carousel-box-l");
      boxRef[boxLIdx - 1].classList.remove("carousel-box-r");
      boxRef[boxLIdx - 1].classList.add("carousel-box-l");

      setActiveIdx(boxLIdx);
    } else {
      if (activeIdx === 1) {
        boxRef[activeIdx - 1].classList.remove("carousel-box-l");
        boxRef[boxLIdx].classList.remove("carousel-box-r");
        boxRef[boxLIdx].classList.add("carousel-box-l");
      } else {
        boxRef[activeIdx - 1].classList.remove("carousel-box-l");
        boxRef[activeIdx - 2].classList.remove("carousel-box-r");
        boxRef[activeIdx - 2].classList.add("carousel-box-l");
      }

      setActiveIdx(activeIdx - 1);
    }
  };

  useEffect(() => {
    if (productsCarousel.length > 0) {
      //boxRef[0].classList.add("box-active");
      boxRef[boxRef.length - 1].classList.add("carousel-box-l");

      for (let i = 1; i < boxRef.length - 1; i++) {
        boxRef[i].classList.add("carousel-box-r");
      }
    }

    // eslint-disable-next-line
  }, [productsCarousel]);

  return (
    <section className="container">
      <div className="carousel-items">
        <div className="carousel-items__top">
          {productsCarousel.length > 0 &&
            productsCarousel.map((box, i) => (
              <div
                key={i}
                className="carousel-items__box flex flex-fw-w jc-se"
                ref={(el) => pushRef(el!)}
              >
                {box.map((product) => (
                  <CardCarousel
                    key={product.id}
                    text={product.title}
                    href={`/product/${product.id}`}
                    imgCarousel={product.image}
                  ></CardCarousel>
                ))}
              </div>
            ))}
        </div>
        <div className="carousel-items__bot flex jc-c">
          <Bullet active={activeIdx === 0}></Bullet>
          <Bullet active={activeIdx === 1}></Bullet>
          <Bullet active={activeIdx === 2}></Bullet>
          <Bullet active={activeIdx === 3}></Bullet>
        </div>
        <div className="carousel-items__arrows flex jc-sb ai-c">
          <Arrow onClick={leftArrowClick}></Arrow>
          <Arrow onClick={rightArrowClick}></Arrow>
        </div>
      </div>
    </section>
  );
};

export default CarouselItems;
