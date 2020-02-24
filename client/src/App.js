import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Character from "./components/Character";
import Universe from "./components/Universe";
import Creator from "./components/Creator";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/comic" component={Character} />
          <Route exact path="/creator" component={Creator} />
          <Route exact path="/universe" component={Universe} />

          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
