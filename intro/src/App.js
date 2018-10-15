import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Features from "./components/feautures";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Features />
      </div>
    );
  }
}

export default App;
