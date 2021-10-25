import "./shop.style.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow_small.svg";
import displayImg1 from "../../assets/images/img-card-product-1.jpg";
import displayImg2 from "../../assets/images/img-card-product-2.jpg";
import displayImg3 from "../../assets/images/img-card-product-3.jpg";

import ShopMenu from "../../components/shop-menu/ShopMenu.component";
import CardProduct from "../../components/cards/card-product/CardProduct.component";

const Shop = () => {
  return (
    <div className="shop container">
      <ShopMenu></ShopMenu>
      <div className="shop__items">
        <CardProduct
          href="/"
          displayImg={displayImg1}
          title="Women's black vest Gucci"
          desc="This is a wonderful black vest, which is well suited for parties and also great…"
          price={715}
        ></CardProduct>
        <CardProduct
          href="/"
          displayImg={displayImg3}
          title="Shiny dress Givenchy"
          desc="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
          price={540}
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
          displayImg={displayImg1}
          title="Women's black vest Gucci"
          desc="This is a wonderful black vest, which is well suited for parties and also great…"
          price={715}
        ></CardProduct>
        <CardProduct
          href="/"
          displayImg={displayImg3}
          title="Shiny dress Givenchy"
          desc="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
          price={540}
        ></CardProduct>
        <CardProduct
          href="/"
          displayImg={displayImg2}
          title="Red dress Valentino"
          desc="A very stylish and sexy dress for special occasions and for social events, impre…"
          price={1610}
        ></CardProduct>
      </div>
      <div className="shop__pages flex jc-sb ai-c">
        <Arrow></Arrow>
        <div className="flex jc-sb ai-c">
          <h4 className="">1</h4>
          <h4 className="">2</h4>
          <h4 className="">3</h4>
        </div>
        <Arrow></Arrow>
      </div>
    </div>
  );
};

export default Shop;
