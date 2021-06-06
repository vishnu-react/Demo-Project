import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import TileHome from "./Component/Tile-Home/TileHome";
import Footer from "./Component/Footer/Footer";
import Footer1 from "./Component/Footer1/Footer1";
import BathwareHome from "./Component/BathwareHome/BathwareHome";
import CataloguesHome from "./Component/CataloguesHome/CataloguesHome";
import Wtbhome from "./Component/Wtbhome/Wtbhome";
import Mediahome from "./Component/Mediahome/Mediahome";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tilehome">
            <TileHome />
          </Route>
          <Route exact path="/bathwarehome">
            <BathwareHome />
          </Route>
          <Route exact path="/catalogueshome">
            <CataloguesHome />
          </Route>
          <Route exact path="/wtbhome">
            <Wtbhome />
          </Route>
          <Route exact path="/mediahome">
            <Mediahome />
          </Route>
        </Switch>
        <Footer />
        <Footer1 />
      </Router>
    </div>
  );
}

export default App;
