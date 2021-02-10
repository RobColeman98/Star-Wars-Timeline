import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmpirePoster from "../Photos/Empire-Strikes-Back.jpg";

export default function Empire() {
  return (
    <Fragment>
      <img id="Movies" src={EmpirePoster} alt="" width="300" height="300" />
      <h1 className="Headers">Empire Strike Back</h1>
      <h2 className="Headers">Movie Timeline: 3 ABY </h2>
      <p>
        Empire Strikes Back takes place 3 years after A New Hope, where the
        Empire launches a counter attack on the Rebellion.
      </p>
      <p>
        Luke begins his Jedi training with former Grand Master Yoda, however he
        begins to have visions about his friends being in danger by the hands of
        Darth Vader.
      </p>
      <p>
        Luke goes to confront Vader where they will have their long awaited
        matchup.
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JNwNXF9Y6kY"
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
