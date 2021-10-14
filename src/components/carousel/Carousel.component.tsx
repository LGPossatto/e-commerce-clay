import { useEffect, useState } from "react";

import "./carousel.style.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow_small.svg";
import imgCarousel1 from "../../assets/images/img-carousel-1.png";
import imgCarousel2 from "../../assets/images/img-carousel-2.png";
import imgCarousel3 from "../../assets/images/img-carousel-3.png";
import imgCarousel4 from "../../assets/images/img-carousel-4.png";

import CardCarousel from "../cards/card-carousel/CardCarousel.component";
import Bullet from "../bullet/Bullet.component";

const data = [
  [
    { text: "Louis Vouiton1", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana2", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci3", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten4", href: "/", imgCarousel: imgCarousel4 },
  ],
  [
    { text: "Louis Vouiton5", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana6", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci7", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten8", href: "/", imgCarousel: imgCarousel4 },
  ],
  [
    { text: "Louis Vouiton9", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana10", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci11", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten12", href: "/", imgCarousel: imgCarousel4 },
  ],
  [
    { text: "Louis Vouiton13", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana14", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci15", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten16", href: "/", imgCarousel: imgCarousel4 },
  ],
];

const Carousel = () => {
  const boxRef: HTMLDivElement[] = [];
  const [activeIdx, setActiveIdx] = useState<number>(0);
  //let activeIdx = 0;

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
    //boxRef[0].classList.add("box-active");
    boxRef[boxRef.length - 1].classList.add("carousel-box-l");

    for (let i = 1; i < boxRef.length - 1; i++) {
      boxRef[i].classList.add("carousel-box-r");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <section className="container">
      <div className="carousel">
        <div className="carousel__top">
          {data.map((box, i) => (
            <div
              key={i}
              className="carousel__box flex flex-fw-w jc-se"
              ref={(el) => pushRef(el!)}
            >
              {box.map((item, i) => (
                <CardCarousel
                  key={item.text + i}
                  text={item.text}
                  href={item.href}
                  imgCarousel={item.imgCarousel}
                ></CardCarousel>
              ))}
            </div>
          ))}
        </div>
        <div className="carousel__bot flex jc-c">
          <Bullet active={activeIdx === 0}></Bullet>
          <Bullet active={activeIdx === 1}></Bullet>
          <Bullet active={activeIdx === 2}></Bullet>
          <Bullet active={activeIdx === 3}></Bullet>
        </div>
        <div className="carousel__arrows flex jc-sb ai-c">
          <Arrow onClick={leftArrowClick}></Arrow>
          <Arrow onClick={rightArrowClick}></Arrow>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
