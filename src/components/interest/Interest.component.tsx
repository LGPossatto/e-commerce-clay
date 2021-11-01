import { useContext } from "react";

import ProductsContext from "../../context/products/Products.context";

import "./interest.style.scss";
import CardProduct from "../cards/card-product/CardProduct.component";

const Interest = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="interest container">
      <h2>You may like</h2>
      <div className="interest__cards-box flex jc-sb">
        {products.length > 0 && (
          <>
            <CardProduct
              href={`/products/${products[16].id}`}
              displayImg={products[16].image}
              title={products[16].title}
              desc={products[16].description}
              price={products[16].price}
            ></CardProduct>
            <CardProduct
              href={`/products/${products[17].id}`}
              displayImg={products[17].image}
              title={products[17].title}
              desc={products[17].description}
              price={products[17].price}
            ></CardProduct>
            <CardProduct
              href={`/products/${products[18].id}`}
              displayImg={products[18].image}
              title={products[18].title}
              desc={products[18].description}
              price={products[18].price}
            ></CardProduct>
          </>
        )}
      </div>
    </div>
  );
};

export default Interest;
