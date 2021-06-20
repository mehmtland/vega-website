import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import NavMain from "./common/NavMain.js";
import Home from "./home/Home.js";
import VegaEvx from "./vegaEvx/VegaEvx.js";
import Investors from "./investors/Investors.js";
import Reserve from "./reserve/Reserve.js";
import Blog from "./blog/Blog.js";
import About from "./about/About.js";
import Careers from "./careers/Careers.js";
import Support from "./support/Support.js";
import { AnimatePresence } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  const globalVars = {
    mainColor: "white",
    secondaryColor: "#0f0f0f",
    accentColor: "red",
    heroType: "Ruda",
    negativeColor: "white",
  };

  return (
    <Router>
      <ThemeProvider theme={globalVars}>
        <div data-scroll-container>
          <Switch>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/vega-evx">
                <VegaEvx />
              </Route>
              <Route path="/investors">
                <Investors />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/careers">
                <Careers />
              </Route>
              <Route path="/support">
                <Support />
              </Route>
              <Route path="/reserve">
                <Reserve />
              </Route>
            </AnimatePresence>
          </Switch>
          <NavMain />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
