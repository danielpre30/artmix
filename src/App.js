import React from "react";
import "./sass/main.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Theater from "./pages/Theater";
import SideBar from "./modules/SideBar";

function App() {
  const menuOptions = [
    { name: "Teatro", to: "/theater" },
    { name: "Poemas", to: "/poems" }
  ];
  return (
    <Router>
      <SideBar options={menuOptions} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/theater" />} />
        <Route exact path="/theater" component={Theater} />
        <Route render={() => <div>Page not found</div>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
