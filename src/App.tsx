import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "./components/navigations/nav/Nav.component";
import NavMobile from "./components/navigations/nav-mobile/NavMobile.component";
import Footer from "./components/footer/Footer.component";
import Home from "./pages/home/Home.page";
import Shop from "./pages/shop/Shop.page";
import Product from "./pages/product/Product.page";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <NavMobile></NavMobile>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Shop" component={Shop}></Route>
        <Route exact path="/Product" component={Product}></Route>
        <Redirect exact path="/" to="/Home"></Redirect>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
