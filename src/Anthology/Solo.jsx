import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SoloPoster from "../Photos/Solo.jpg";
export default function Solo() {
  return (
    <Fragment>
      <img src={SoloPoster} id="Movies" alt="" width="300" height="300" />
      <h1 className="Headers">Solo</h1>
      <h2 className="Headers">Movie Timeline: 13-10 BBY</h2>
      <p>Solo is one of the two Anthology films in the Star Wars series.</p>
      <p>
        It follows a young Han Solo's uprbringing from the scrummy streets of
        Corellia to his first adventures of an outlaw.
      </p>
      <p>
        Although it is an Anthology film, it does take place around the same
        time after the events of episode three at the height of the empire's
        power and before the rebellion.
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jPEYpryMp2s"
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
