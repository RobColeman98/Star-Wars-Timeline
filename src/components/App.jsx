import React, { useState } from "react";
import Home from "./Home"
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhantomMenace from "./Prequel/Phantom-Menace";

export default function App() {

  return (
    <Router>
     
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Phantom-Menace" component={{PhantomMenace}}></Route>
        </Switch>
    
    </Router>
  );
};


