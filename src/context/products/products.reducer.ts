import { FETCH_PROJECT, FETCH_PROJECTS } from "../types";
import { IProductsState } from "./Products.state";

const productsReducer = (
  state: IProductsState = { products: [], product: null, productsCarousel: [] },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        products: action.payload.products,
        productsCarousel: action.payload.productsCarousel,
      };

    case FETCH_PROJECT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
