import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "./components/navigations/nav/Nav.component";
import NavMobile from "./components/navigations/nav-mobile/NavMobile.component";
import Footer from "./components/footer/Footer.component";
import Home from "./pages/home/Home.page";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <NavMobile></NavMobile>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Redirect exact path="/" to="/Home"></Redirect>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
