import { createContext } from "react";
import { IProduct } from "./Products.state";

interface IProductsContext {
  products: IProduct[];
  productsCarousel: IProduct[][];
  fetchProducts: () => void;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  productsCarousel: [],
  fetchProducts: () => {},
});

export default ProductsContext;
