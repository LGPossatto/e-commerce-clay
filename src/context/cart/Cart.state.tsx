import { useReducer } from "react";
import cartReducer from "./cart.reducer";

import CartContext, { IProductCart } from "./Cart.context";

import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from "../types";

interface ICartState {
  products: IProductCart[];
}

const CartState = (props: any) => {
  const inicialState: ICartState = { products: [] };

  const [state, dispatch] = useReducer(cartReducer, inicialState);

  const addToCart = (product: IProductCart) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeAllFromCart = (product: IProductCart) => {
    dispatch({ type: REMOVE_ALL_FROM_CART, payload: product });
  };

  const removeOneFromCart = (product: IProductCart) => {
    const stateProduct = state.products.find((prod) => prod.id === product.id);

    if (stateProduct && stateProduct.quantity > 1) {
      dispatch({ type: REMOVE_ONE_FROM_CART, payload: product });
    } else {
      removeAllFromCart(product);
    }
  };

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
