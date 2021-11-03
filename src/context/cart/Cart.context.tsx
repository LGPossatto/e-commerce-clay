import { createContext } from "react";
import { IProduct } from "../products/Products.state";

export interface IProductCart extends IProduct {
  size: string;
  color: string;
  quantity: number;
}

interface IProductsContext {
  products: IProductCart[];
  addToCart: (product: IProductCart) => void;
}

export const CartContext = createContext<IProductsContext>({
  products: [],
  addToCart: (product: IProductCart) => {},
});

export default CartContext;
