import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RevengeSithPoster from "../../Photos/Revenge-of-the-Sith.jpg";

export default function RevengeoftheSith() {
  return (
    <Fragment>
      <img
        src={RevengeSithPoster}
        id="Movies"
        alt=""
        width="300"
        height="300"
      />
      <h1 className="Headers">Revenge of the Sith</h1>
      <h2 className="Headers">Movie Timeline: 19 BBY</h2>
      <p>
        The war is almost over, however there is still a evil presence that
        looms over the jedi order.
      </p>
      <p>Anakin has grown stronger, but is not given the rank of jedi master. He also has terrible nightmares of Padme's death which clouds his mind and judgement.</p>
      <p>Upon this, Anakin also begins to question the Jedi Council and some of their ulterior motives</p>
      
      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/5UnjrG_N8hU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <Link className="prev-page" to="/">
      <button className="back-button" type="button" className="btn btn-outline-info">Go Back</button>
      </Link>
    </Fragment>
  );
}
