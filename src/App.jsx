import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

// styling
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
