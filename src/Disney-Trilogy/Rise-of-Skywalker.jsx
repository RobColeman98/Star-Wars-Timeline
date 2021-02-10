import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SkywalkerPoster from "../Photos/Rise-of-Skywalker.jpg";

export default function Skywalker() {
  return (
    <Fragment>
      <img
        src={SkywalkerPoster}
        height="300px"
        width="300px"
        id="Movies"
        alt=""
      />

      <h1 className="Headers">Rise of Skywalker</h1>
      <h2 className="Headers">Movie Timeline: 35 ABY</h2>
      <p>
        When it's discovered that Palpatine didn't die after the events of
        Return of the Jedi, the Reistance must quickly discover his whereabouts.
      </p>
      <p>
        Meanwhile, Finn and Poe leads the Resistance to stop the First Order's
        plan of forming a new Empire while Rey and Kylo Ren anticipates their
        final showdown.
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8Qn_spdM5Zg"
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
