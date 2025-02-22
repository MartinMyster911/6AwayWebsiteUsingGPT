import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RealEstateForm from "./components/RealEstateForm";
import Success from "./components/Success";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={RealEstateForm} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
