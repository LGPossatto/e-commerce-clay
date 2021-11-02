import { useContext, useEffect } from "react";
import { useParams } from "react-router";

import ProductsContext from "../../context/products/Products.context";

import "./product.style.scss";
import CardProductBig from "../../components/cards/card-product-big/CardProductBig.component";
import CarouselItems from "../../components/carousel/carousel-items/CarouselItems.component";

const Shop = () => {
  const { product, fetchProduct } = useContext(ProductsContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchProduct(id);

    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="product">
      <div className="container">
        {product && <CardProductBig product={product}></CardProductBig>}
      </div>
      <CarouselItems></CarouselItems>
    </div>
  );
};

export default Shop;
