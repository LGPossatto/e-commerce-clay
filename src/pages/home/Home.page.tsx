import "./home.style.scss";
import imgCard from "../../assets/images/img-card.jpg";
import imgCardSmall from "../../assets/images/img-card-small.png";
import imgCardLong from "../../assets/images/img-card-long.png";

import HomePannel from "../../components/home-pannel/HomePannel.component";
import CardShowcase from "../../components/cards/card-showcase/CardShowcase.component";
import CardShowcaseSmall from "../../components/cards/card-showcase-small/CardShowcaseSmall.component";
import Carousel from "../../components/carousel/Carousel.component";
import Interest from "../../components/interest/Interest.component";

const Home = () => {
  return (
    <div className="home">
      <HomePannel></HomePannel>
      <section className="home__cards container">
        <div className="card-big">
          <CardShowcase
            title="Women Collection"
            subTitle="Spring 2020"
            pillText="Popular"
            imgCard={imgCard}
          ></CardShowcase>
        </div>
        <div className="card-small">
          <CardShowcaseSmall
            title="Bestsellers"
            subTitle="24 Items"
          ></CardShowcaseSmall>
        </div>
        <div className="card-small">
          <CardShowcaseSmall
            title="Dresses"
            pillText="New"
            imgCard={imgCardSmall}
          ></CardShowcaseSmall>
        </div>
        <div className="card-long">
          <CardShowcaseSmall
            title="Denim Jackets"
            pillText="New"
            imgCard={imgCardLong}
            secondaryColor
          ></CardShowcaseSmall>
        </div>
      </section>
      <Carousel></Carousel>
      <Interest></Interest>
    </div>
  );
};

export default Home;
