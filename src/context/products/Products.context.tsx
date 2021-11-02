import { createContext } from "react";
import { IProduct } from "./Products.state";

interface IProductsContext {
  products: IProduct[];
  product: IProduct | null;
  productsCarousel: IProduct[][];
  fetchProducts: () => void;
  fetchProduct: (id: string) => void;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  product: null,
  productsCarousel: [],
  fetchProducts: () => {},
  fetchProduct: (id: string) => {},
});

export default ProductsContext;
