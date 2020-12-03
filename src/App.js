import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
// import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wrapper></Wrapper>
      </Router>
    </div>
  );
}

export default App;
