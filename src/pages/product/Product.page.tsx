import "./product.style.scss";
import CardProductBig from "../../components/cards/card-product-big/CardProductBig.component";
import Carousel from "../../components/carousel/Carousel.component";

const Shop = () => {
  return (
    <div className="product">
      <div className="container">
        <CardProductBig></CardProductBig>
      </div>
      <Carousel></Carousel>
    </div>
  );
};

export default Shop;
