import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ROTJPoster from "../Photos/ROTJ.jpg";

export default function ROTJ() {
  return (
    <Fragment>
      <img id="Movies" src={ROTJPoster} height="300px" width="300px" alt="" />
      <h1 className="Headers">Return of the Jedi</h1>
      <h2 className="Headers">Movie Timeline: 4 ABY</h2>
      <p>
        Return of the Jedi takes place a year after Empire Strikes Back. Luke is
        now a fully trained Jedi master thanks to the training of Yoda
      </p>
      <p>
        Our Heroes come up with a plan to save Han from the treachous Jabba the
        Hutt and Boba Fett.
      </p>
      <p>
        Meanwhile, the Rebel Alliance tries to make their final push to end the
        Empire and bring peace to the galaxy
      </p>

      <iframe
        id="Movies"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7L8p7_SLzvU"
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
