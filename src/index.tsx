import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/globals.style.scss";
import App from "./App";

import ProductsState from "./context/products/Products.state";
import CartState from "./context/cart/Cart.state";

ReactDOM.render(
  <React.StrictMode>
    <ProductsState>
      <CartState>
        <App />
      </CartState>
    </ProductsState>
  </React.StrictMode>,
  document.getElementById("root")
);
