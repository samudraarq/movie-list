import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main.js/Main";
import Details from "./components/Details/Details";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movie/:id">
          <Details />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
