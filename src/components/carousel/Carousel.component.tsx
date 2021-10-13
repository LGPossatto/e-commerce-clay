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
    { text: "Louis Vouiton", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten", href: "/", imgCarousel: imgCarousel4 },
  ],
  [
    { text: "Louis Vouiton", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten", href: "/", imgCarousel: imgCarousel4 },
  ],
  [
    { text: "Louis Vouiton", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten", href: "/", imgCarousel: imgCarousel4 },
  ],
  [
    { text: "Louis Vouiton", href: "/", imgCarousel: imgCarousel1 },
    { text: "Dolce&Gabbana", href: "/", imgCarousel: imgCarousel2 },
    { text: "Gucci", href: "/", imgCarousel: imgCarousel3 },
    { text: "Dries van Noten", href: "/", imgCarousel: imgCarousel4 },
  ],
];

const Carousel = () => {
  const [boxRef, setBoxRef] = useState<HTMLDivElement[]>([]);
  let activeIdx = 0;

  const pushRef = (el: HTMLDivElement) => {
    if (!boxRef.includes(el)) boxRef.push(el);
  };

  const leftArrowClick = () => {
    console.log(activeIdx, boxRef);
    const boxLIdx = boxRef.length - 1;

    boxRef[activeIdx].classList.add("carousel-box-r");

    if (activeIdx === 0) {
      activeIdx = boxLIdx;

      boxRef[activeIdx].classList.remove("carousel-box-l");
      boxRef[activeIdx - 1].classList.remove("carousel-box-r");
      boxRef[activeIdx - 1].classList.add("carousel-box-l");
    } else if (activeIdx === 1) {
      activeIdx--;

      boxRef[activeIdx].classList.remove("carousel-box-l");
      boxRef[boxLIdx].classList.remove("carousel-box-r");
      boxRef[boxLIdx].classList.add("carousel-box-l");
    } else {
      activeIdx--;

      boxRef[activeIdx].classList.remove("carousel-box-l");
      boxRef[activeIdx - 1].classList.remove("carousel-box-r");
      boxRef[activeIdx - 1].classList.add("carousel-box-l");
    }
  };

  const rightArrowClick = () => {
    console.log(activeIdx, boxRef);
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
      activeIdx = 0;
    } else {
      activeIdx++;
    }
    boxRef[activeIdx].classList.remove("carousel-box-r");
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
              className={`carousel__box flex jc-se ${"a" + i}`}
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
          <Bullet active></Bullet>
          <Bullet></Bullet>
          <Bullet></Bullet>
          <Bullet></Bullet>
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
