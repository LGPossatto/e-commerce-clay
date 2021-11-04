import { IProductCart } from "./Cart.context";

import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from "../types";

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
    case REMOVE_ONE_FROM_CART:
      const newReducedProducts = state.products.map((product) => {
        if (
          product.id === action.payload.id &&
          product.color === action.payload.color &&
          product.size === action.payload.size
        ) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });

      return {
        ...state,
        products: newReducedProducts,
      };
    case REMOVE_ALL_FROM_CART:
      const newRemovedProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      return {
        ...state,
        products: newRemovedProducts,
      };
    default:
      return state;
  }
};

export default cartReducer;
