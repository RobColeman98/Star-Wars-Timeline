import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AttackClonesPoster from "../../Photos/Attack-of-the-Clones.jpg";
export default function AttackClones() {
  return (
    <Fragment>
      <img
        src={AttackClonesPoster}
        id="Movies"
        alt=""
        width="400"
        height="400"
      />
      <h1 className="Headers">Attack of the Clones</h1>
      <h2 className="Headers">Movie Timeline: 22 BBY</h2>
      <p>
        Attack of the Clones takes place 10 years after the events of episode 1.
      </p>
      <p>
        Anakin is now a padawan of Obi-Wan-Kenobi and while he is a strong and
        cunning warrior, he is still reckless and fearful which can lead to the
        darkside.
      </p>
      <p>
        While Anakin is tasked to escort and protect Amadala to Naboo, Obi-Wan
        is tasked to get to the bottom of the Sepratist movement who has been
        posing a new threat to the galaxy and can initiate a war.
      </p>

      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/gYbW1F_c9eM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <Link className="prev-page" to="/">
      <button className="back-button" type="button" className="btn btn-outline-info">Go Back</button>
      </Link>
    </Fragment>
  );
}
