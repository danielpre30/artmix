import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Theater from "./pages/Theater";
import SideBar from "./modules/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <Router>
        <main className="content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/theater" />} />
            <Route exact path="/theater" component={Theater} />
            <Route render={() => <div>Page not found</div>}></Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
