import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ForceAwakensPoster from ".././Photos/Force-Awakens.jpg";

export default function ForceAwakens() {
  return (
    <Fragment>
      <img
        src={ForceAwakensPoster}
        height="300px"
        width="300px"
        id="Movies"
        alt=""
      />
      <h1 className="Headers"> The Force Awakens</h1>
      <h2 className="Headers"> Movie Timeline: 34 ABY</h2>
      <p>
        The Force Awakens takes place 30 years after Return of the Jedi and
        features a new generation of heroes
      </p>
      <p>
        Rey, a scavenger who is unusually strong with the force, wanders for the
        disappearance of her parents is thrusted into an adventure when she
        meets Finn, a stromtrooper who refuses to follow the First Order regime.
      </p>

      <p>
        Meanwhile, a new Empire, The First Order led by Snoke and his apprentice
        Kylo Ren seeks control of the galaxy and its up to the our heroes and
        the Resistance to stop them.
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sGbxmsDFVnE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

<Link className="prev-page" to="/">
        <button
          className="back-button"
          type="button"
          className="btn btn-outline-info"
        >
          Go Back
        </button>
      </Link>
    </Fragment>
  );
}
