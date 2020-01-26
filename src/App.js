import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Products from "./pages/products";
import TopMenu from "./components/TopMenu";

function Home() {
  return <h2>Home</h2>;
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
      </div>

      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  );
}
