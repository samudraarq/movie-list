import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main.js/Main";
import Details from "./components/Details/Details";
import Search from "./components/Search/Search";

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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
