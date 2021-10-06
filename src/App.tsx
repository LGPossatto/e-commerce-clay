import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar.component";
import Home from "./pages/home/Home.page";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Redirect exact path="/" to="/Home"></Redirect>
      </Switch>
      <div className="App">
        <h1>HeadLine 1</h1>
        <h2>HeadLine 2</h2>
        <h3>HeadLine 3</h3>
      </div>
    </BrowserRouter>
  );
};

export default App;
