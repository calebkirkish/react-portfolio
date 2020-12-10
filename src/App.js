import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header.js";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Header />
          <switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
          </switch>
          <Footer />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
