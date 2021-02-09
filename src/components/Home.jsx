import { render } from "@testing-library/react";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhantomMenacePoster from "../Photos/Phantom-Menace.jpg";
// import AttackClonesPoster from "../Photos/Attack-of-the-Clones.jpg";
import CloneWarsPoster from "../Photos/Clone-Wars.jpg";
import RevengeSithPoster from "../Photos/Revenge-of-the-Sith.jpg";
import SoloPoster from "../Photos/Solo.jpg";
import RogueOnePoster from "../Photos/Rouge-One.jpg";
// import NewHope from "./Photos/A-New-Hope.jpg";
import EmpirePoster from "../Photos/Empire-Strikes-Back.jpg";
import ROTJPoster from "../Photos/ROTJ.jpg";
import ForceAwakensPoster from "../Photos/Force-Awakens.jpg";
import LastJediPoster from "../Photos/Last-Jedi.jpg";
import SkywalkerPoster from "../Photos/Rise-of-Skywalker.jpg";
import PhantomMenace from "./Prequel/Phantom-Menace";

export default function Home(){
  const [isShown, setIsShown] = useState(false);

  return (
    <Fragment>
      
    <div className="container">
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h2>Release Date: May 19, 1999</h2>
              <h1>The Phantom Menace</h1>

              <Router>
                <Link className="next=page" to="/Phantom-Menace">
                  <button type="button"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    onClick={(console.log("Working"))}
                  >
                    Go Here
                  </button>
                  <Switch>
                    <Route exact path="/Phantom-Menace" component={PhantomMenace}
                    ></Route>
                  </Switch>
                  {isShown && (
                    <img
                      src={PhantomMenacePoster}
                      id="Phantom-Menace"
                      alt=""
                      width="300"
                      height="300"
                    />
                  )}
                </Link>
              </Router>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2>May 16, 2002</h2>
              <h1>Attack of the Clones</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2>October 3, 2008</h2>
              <h1>Clone Wars</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2> May 19, 2005</h2>
              <h1>Revenge of the Sith</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2>May 25, 2018</h2>
              <h1>Solo</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2> December 16, 2016</h2>
              <h1>Rouge One</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2> May 25, 1977</h2>
              <h1>A New Hope</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2> May 21, 1980</h2>
              <h1>Empire Strikes Back</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2> May 25, 1983</h2>
              <h1>Return of the Jedi</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2> December 18, 2015</h2>
              <h1>The Force Awakens</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2> December 15, 2017</h2>
              <h1>The Last Jedi</h1>
            </div>
          </li>

          <li>
            <div className="timeline-content">
              <h2>December 20, 2019</h2>
              <h1>Rise of Skywalker</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </Fragment>
  );

}


