import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main.js/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
