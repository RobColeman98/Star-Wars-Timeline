import React, { useState, Fragment } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhantomMenacePoster from "../../Photos/Phantom-Menace.jpg";
export default function PhantomMenace() {
  return (
    <Fragment>
      <img
        src={PhantomMenacePoster}
        id="Movies"
        alt=""
        width="400"
        height="400"
      />
      <h1 className="Headers">The Phantom Menace</h1>
      <h3 className="Headers">Movie Timeline: 32 BBY</h3>
      <p>
        The Phantom Menace is the first episode in the Star Wars prequel trilogy
        and takes place in 32 BBY(Battle before Yavin for short, also the end of
        episode 4). 
        
        <p>
        It follows the story of 2 jedis, Qui-Gon Jhin and Obi-Wan
        Kanobi, as they to solve the matter of the Trade Federation. Along the
        way, they discover a young boy named Anakin Skywlker who is extremely
        strong with the force.

        </p>
      </p>

      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/bD7bpG-zDJQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <Link className="prev-page" to="/">
      <button className="back-button" type="button" className="btn btn-outline-info">Go Back</button>
      </Link>
        
    </Fragment>
  );
}
