import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RogueOnePoster from "../Photos/Rouge-One.jpg";

export default function RogueOne() {
  return (
    <Fragment>
      <img src={RogueOnePoster} id="Movies" alt="" width="300" height="300" />

      <h1 className="Headers">Rouge One </h1>
      <h2 className="Headers">Movie Timeline: 0 BBY</h2>
      <p>
        Rouge One is the first Anthology film to tie in heavily to the canon
        story as Rouge One ends right where episode four begins.
      </p>
      <p>
        The Empire is still stronger then ever and know plans on building a
        planet destroying machine.
      </p>
      <p>
        Jyn Erso, while alongside the newly Rebellion Alliance, is tasked with
        stealing the Death Star plans in order to help bring peace to the
        galaxy, even if it means certain death.
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/frdj1zb9sMY"
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
