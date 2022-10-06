import React from "react"
import { Route, Switch } from "react-router-dom";
import HeaderArea from "./headerarea/HeaderArea";
import LoginPage from "./loginpage/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/HeaderArea" component={HeaderArea} />
      </Switch>
    </div>
  );
}

export default App;
