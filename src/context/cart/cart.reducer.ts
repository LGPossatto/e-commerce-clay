import { IProductCart } from "./Cart.context";

import { ADD_TO_CART } from "../types";

const cartReducer = (
  state: { products: IProductCart[] } = { products: [] },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newProduct = [];
      let exist = false;

      for (let i = 0; i < state.products.length; i++) {
        const product = state.products[i];

        if (
          product.id === action.payload.id &&
          product.color === action.payload.color &&
          product.size === action.payload.size
        ) {
          newProduct.push({ ...product, quantity: product.quantity + 1 });
          exist = true;
        } else {
          newProduct.push(product);
        }
      }

      if (!exist) {
        newProduct.push(action.payload);
      }

      return {
        ...state,
        products: newProduct,
      };

    default:
      return state;
  }
};

export default cartReducer;
