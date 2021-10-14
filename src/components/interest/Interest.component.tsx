import "./interest.style.scss";
import displayImg1 from "../../assets/images/img-card-product-1.jpg";
import displayImg2 from "../../assets/images/img-card-product-2.jpg";
import displayImg3 from "../../assets/images/img-card-product-3.jpg";

import CardProduct from "../cards/card-product/CardProduct.component";

const Interest = () => {
  return (
    <div className="interest container">
      <h2>You may like</h2>
      <div className="interest__cards-box flex jc-sb">
        <CardProduct
          href="/"
          displayImg={displayImg1}
          title="Women's black vest Gucci"
          desc="This is a wonderful black vest, which is well suited for parties and also great…"
          price={715}
        ></CardProduct>
        <CardProduct
          href="/"
          displayImg={displayImg2}
          title="Red dress Valentino"
          desc="A very stylish and sexy dress for special occasions and for social events, impre…"
          price={1610}
        ></CardProduct>
        <CardProduct
          href="/"
          displayImg={displayImg3}
          title="Shiny dress Givenchy"
          desc="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
          price={540}
        ></CardProduct>
      </div>
    </div>
  );
};

export default Interest;
