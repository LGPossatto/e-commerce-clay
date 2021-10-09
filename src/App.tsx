import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "./components/navigations/nav/Nav.component";
import NavMobile from "./components/navigations/nav-mobile/NavMobile.component";
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
      <div className="App">
        <h1>HeadLine 1</h1>
        <h2>HeadLine 2</h2>
        <h3>HeadLine 3</h3>
        <h4>HeadLine 4</h4>
        <h5>HeadLine 5</h5>
        <h6>HeadLine 6</h6>
        <h1>HeadLine 1</h1>
        <h2>HeadLine 2</h2>
        <h3>HeadLine 3</h3>
        <h4>HeadLine 4</h4>
        <h5>HeadLine 5</h5>
        <h6>HeadLine 6</h6>
        <h1>HeadLine 1</h1>
        <h2>HeadLine 2</h2>
        <h3>HeadLine 3</h3>
        <h4>HeadLine 4</h4>
        <h5>HeadLine 5</h5>
        <h6>HeadLine 6</h6>
        <h1>HeadLine 1</h1>
        <h2>HeadLine 2</h2>
        <h3>HeadLine 3</h3>
        <h4>HeadLine 4</h4>
        <h5>HeadLine 5</h5>
        <h6>HeadLine 6</h6>
      </div>
    </BrowserRouter>
  );
};

export default App;
