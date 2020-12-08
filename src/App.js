import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header.js";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Header />
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
