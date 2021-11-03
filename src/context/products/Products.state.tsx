import ProductsContext from "./Products.context";

import { useReducer } from "react";
import productsReducer from "./products.reducer";

import { FETCH_PROJECTS, FETCH_PROJECT } from "../types";
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

export interface IProductsState {
  products: IProduct[];
  product: IProduct | null;
  productsCarousel: IProduct[];
}

const ProductsState = (props: any) => {
  const inicialState: IProductsState = {
    products: [],
    product: null,
    productsCarousel: [],
  };

  const [state, dispatch] = useReducer(productsReducer, inicialState);

  const fetchProducts = async () => {
    try {
      //const data = await fetch("https://fakestoreapi.com/products");
      //const res = await data.json();

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

  const fetchProduct = async (id: string) => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();

      dispatch({
        type: FETCH_PROJECT,
        payload: res,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        productsCarousel: state.productsCarousel,
        fetchProducts,
        fetchProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
