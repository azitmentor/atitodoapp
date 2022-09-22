import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Mainlist from "./mainlist";

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Edit from "./Edit";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Very simple todo</h1>

      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-item nav-link" to="/edit">
                  Edit
                </Link>
                <Link className="nav-item nav-link" to="/list">
                  List
                </Link>
              </div>
            </div>
          </nav>

          <hr />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<Mainlist />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
