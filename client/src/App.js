import "./styles/App.css";
import React from "react";
import Header from "./components/Header.js";
import RandomBackground from "./components/RandomBackground.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <RandomBackground />
      hello, world
    </div>
  );
};

export default App;
