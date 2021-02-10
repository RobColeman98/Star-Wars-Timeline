import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewHopePoster from "../Photos/A-New-Hope.jpg";

export default function NewHope() {
  return (
    <Fragment>
      <img id="Movies" src={NewHopePoster} alt="" width="300" height="300" />
      <h1 className="Headers">A New Hope</h1>
      <h2 className="Headers">Movie Timeline: 0 BBY - 0 ABY</h2>
      <p>
        A New Hope is the first movie in the original trilogy and follows the
        story of a new protagonist, Luke Skywalker.
      </p>
      <p>
        A New Hope takes place right after the events of Rogue One and follows
        the story of farm boy Luke Skywalker who is thrust into a new world
        where he must fight the Empire as a member of the Rebellion Army.
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vZ734NWnAHA"
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
