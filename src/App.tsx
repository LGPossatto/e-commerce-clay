import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home.page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
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
