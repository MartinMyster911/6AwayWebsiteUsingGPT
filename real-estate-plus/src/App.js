import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RealEstateForm from "./components/RealEstateForm";
import Success from "./components/Success";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Properties />
          <About />
          <Contact />
        </Route>
        <Route path="/form" component={RealEstateForm} />
        <Route path="/success" component={Success} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
