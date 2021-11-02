import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { ProductsContext } from "./context/products/Products.context";

import Nav from "./components/navigations/nav/Nav.component";
import NavMobile from "./components/navigations/nav-mobile/NavMobile.component";
import Footer from "./components/footer/Footer.component";
import Home from "./pages/home/Home.page";
import Shop from "./pages/shop/Shop.page";
import Product from "./pages/product/Product.page";
import Cart from "./pages/cart/Cart.page";
import NotFound from "./pages/not-found/NotFound.component";

const App = () => {
  const { fetchProducts } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();

    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Nav></Nav>
      <NavMobile></NavMobile>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Shop" component={Shop}></Route>
        <Route exact path="/Product/:id" component={Product}></Route>
        <Route exact path="/Cart" component={Cart}></Route>
        <Redirect exact path="/" to="/Home"></Redirect>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
