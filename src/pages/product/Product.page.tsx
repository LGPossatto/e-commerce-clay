import "./product.style.scss";
import CardProductBig from "../../components/cards/card-product-big/CardProductBig.component";
import CarouselItems from "../../components/carousel/carousel-items/CarouselItems.component";

const Shop = () => {
  return (
    <div className="product">
      <div className="container">
        <CardProductBig></CardProductBig>
      </div>
      <CarouselItems></CarouselItems>
    </div>
  );
};

export default Shop;
