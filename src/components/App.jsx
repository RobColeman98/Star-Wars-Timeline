import React, { useState, Fragment } from "react";
import Home from "./Home"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhantomMenace from "./Prequel/Phantom-Menace"
import AttackClones from "./Prequel/Attack-of-the-Clones"
import CloneWars from "./Prequel/CloneWars"
import Sith from "./Prequel/Revenge-of-the-Sith"
import Solo from "../Anthology/Solo"
import RogueOne from "../Anthology/Rouge-One"
import NewHope from "../OG-Trilogy/New-Hope"
import Empire from "../OG-Trilogy/Empire-Strikes-Back"
import ROTJ from "../OG-Trilogy/ROTJ"
import ForceAwakens from "../Disney-Trilogy/Force-Awakens"
import LastJedi from "../Disney-Trilogy/Last-Jedi"
import RiseofSkywalker from "../Disney-Trilogy/Rise-of-Skywalker"

export default function App() {

  return (
    <Router>
       
     
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/PhantomMenace" component={PhantomMenace}></Route>
          <Route exact path="/Attack-of-the-Clones" component={AttackClones}></Route>
          <Route exact path="/CloneWars" component={CloneWars}></Route>
          <Route exact path="/Revenge-of-the-Sith" component={Sith}></Route>
          <Route exact path="/Solo" component={Solo}></Route>
          <Route exact path="/Rouge-One" component={RogueOne}></Route>
          <Route exact path="/New-Hope" component={NewHope}></Route>
          <Route exact path="/Empire-Strikes-Back" component={Empire}></Route>
          <Route exact path="/ROTJ" component={ROTJ}></Route>
          <Route exact path="/ForceAwakens" component={ForceAwakens}></Route>
          <Route exact path="/LastJedi" component={LastJedi}></Route>
          <Route exact path="/Rise-of-Skywalker" component={RiseofSkywalker}></Route>
        </Switch>
    
    </Router>
  );
};





