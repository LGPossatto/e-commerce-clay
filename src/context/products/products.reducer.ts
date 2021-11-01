import { FETCH_PROJECTS } from "../types";

const productsReducer = (
  state = { products: [], productsCarousel: [] },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      console.log(FETCH_PROJECTS, action.payload);
      return {
        ...state,
        products: action.payload.products,
        productsCarousel: action.payload.productsCarousel,
      };

    default:
      return state;
  }
};

export default productsReducer;
