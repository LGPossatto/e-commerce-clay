import ProductsContext from "./Products.context";

import { useReducer } from "react";
import productsReducer from "./products.reducer";

import { FETCH_PROJECTS } from "../types";
import { data } from "../../data";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface IProductsState {
  products: IProduct[];
  productsCarousel: IProduct[];
}

const ProductsState = (props: any) => {
  const inicialState: IProductsState = { products: [], productsCarousel: [] };

  const [state, dispatch] = useReducer(productsReducer, inicialState);

  const fetchProducts = async () => {
    try {
      //const data = await fetch("https://fakestoreapi.com/products");
      //const res = data.json();

      const res = data;

      const productsCarousel: IProduct[][] = [[], [], [], []];

      (() => {
        for (let i = 0; i < 4; i++) {
          for (let j = i * 4; j < (i + 1) * 4; j++) {
            productsCarousel[i].push(data[j]);
          }
        }
      })();

      dispatch({
        type: FETCH_PROJECTS,
        payload: { products: res, productsCarousel },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        productsCarousel: state.productsCarousel,
        fetchProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
