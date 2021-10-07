import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./components/navigation/Navigation.component";
import Home from "./pages/home/Home.page";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
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
