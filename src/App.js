import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header.js";
import PortfolioPage from "./pages/PortfolioPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Header />
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Footer />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
