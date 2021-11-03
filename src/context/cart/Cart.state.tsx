import { useReducer } from "react";
import cartReducer from "./cart.reducer";

import CartContext, { IProductCart } from "./Cart.context";

import { ADD_TO_CART } from "../types";

interface ICartState {
  products: IProductCart[];
}

const CartState = (props: any) => {
  const inicialState: ICartState = { products: [] };

  const [state, dispatch] = useReducer(cartReducer, inicialState);

  const addToCart = (product: IProductCart) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <CartContext.Provider value={{ products: state.products, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
