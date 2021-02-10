import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CloneWarsPoster from "../../Photos/Clone-Wars.jpg";

export default function CloneWars() {
  return (
    <Fragment>
      <img
        src={CloneWarsPoster}
        id="Movies"
        alt=""
        width="300"
        height="300"
      />
      <h1 className="Headers">Clone Wars</h1>
      <h2 className="Headers">Movie Timeline: 22 -19 BBY</h2>
      <p>
        The Clone Wars Movie and Animated series takes place right after episode
        2 with the Jedi in a war against the Sepratist army led by Count Dooku.
      </p>
      <p>
        The Clone Wars features great adventures and introduces fan favorite
        Ahsoka Tano, as well as Rex, Cody, and other clone troopers from the
        501st Legion.
      </p>
      
      <iframe
        className="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RI7WyhWZkzk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      
      <Link className="prev-page" to="/">
      <button className="back-button" type="button" className="btn btn-outline-info">Go Back</button>
      </Link>
    </Fragment>
  );
}
