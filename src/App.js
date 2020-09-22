import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Search from "./pages/Search";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movie/:id">
          <Details />
        </Route>
        <Route path="/search/:search">
          <Search />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
