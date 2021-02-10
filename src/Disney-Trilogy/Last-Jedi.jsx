import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LastJediPoster from ".././Photos/Last-Jedi.jpg";

export default function LastJedi() {
  return (
    <Fragment>
      <img
        src={LastJediPoster}
        height="300px"
        width="300px"
        id="Movies"
        alt=""
      />
      <h1 className="Headers">Last Jedi</h1>
      <h2 className="Headers">Movie Timeline: 34 ABY</h2>
      <p>The Resistance is left scrambling to defend against the First Order</p>
      <p>
        Rey begins her training under Luke but discovers that he's not the same
        man that he once was. As Luke relunctaly agrees to help train Rey, he
        insits that the Jedi Order is finished and he can't help the Resistance.{" "}
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Q0CbN8sfihY"
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
