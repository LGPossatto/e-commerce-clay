import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/globals.style.scss";
import App from "./App";

import ProductsState from "./context/products/Products.state";

ReactDOM.render(
  <React.StrictMode>
    <ProductsState>
      <App />
    </ProductsState>
  </React.StrictMode>,
  document.getElementById("root")
);
