import { useContext, useEffect, useState } from "react";

import ProductsContext from "../../context/products/Products.context";

import "./shop.style.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow_small.svg";

import ShopMenu from "../../components/shop-menu/ShopMenu.component";
import CardProduct from "../../components/cards/card-product/CardProduct.component";

const Shop = () => {
  const { products, fetchProducts } = useContext(ProductsContext);
  const [page, setPage] = useState(0);

  const mountProducts = (index: number) => {
    const productsList: JSX.Element[] = [];
    const lastI = index * 6 + 6;

    for (let i = index * 6; i < lastI; i++) {
      if (i >= products.length) break;

      productsList.push(
        <CardProduct
          key={products[i].title}
          href={`product/${products[i].id}`}
          displayImg={products[i].image}
          title={products[i].title}
          desc={products[i].description}
          price={products[i].price}
        ></CardProduct>
      );
    }

    return productsList;
  };

  const mountPagination = (pLength: number) => {
    const paginationList: JSX.Element[] = [];
    const lastI = Math.ceil(pLength / 6);

    for (let i = 0; i < lastI; i++) {
      paginationList.push(
        <h4
          key={i}
          onClick={() => setPage(i)}
          className={`${page === i ? "shop-page-active" : ""}`}
        >
          {i + 1}
        </h4>
      );
    }

    return paginationList;
  };

  const movePage = (plus: boolean) => {
    if (plus && page < Math.ceil(products.length - 6)) {
      setPage(page + 1);
    } else if (!plus && page > 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (products.length <= 0) {
      fetchProducts();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop container">
      <ShopMenu></ShopMenu>
      <div className="shop__items">
        {products.length > 0 && mountProducts(page)}
      </div>
      <div className="shop__pages flex jc-sb ai-c">
        <Arrow
          onClick={() => {
            movePage(false);
          }}
        ></Arrow>
        <div className="flex jc-sb ai-c">
          {products.length > 0 && mountPagination(products.length)}
        </div>
        <Arrow
          onClick={() => {
            movePage(true);
          }}
        ></Arrow>
      </div>
    </div>
  );
};

export default Shop;
