import { render } from "@testing-library/react";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhantomMenacePoster from "../Photos/Phantom-Menace.jpg";
import AttackClonesPoster from "../Photos/Attack-of-the-Clones.jpg";
import CloneWarsPoster from "../Photos/Clone-Wars.jpg";
import RevengeSithPoster from "../Photos/Revenge-of-the-Sith.jpg";
import SoloPoster from "../Photos/Solo.jpg";
import RogueOnePoster from "../Photos/Rouge-One.jpg";
import NewHopePoster from "../Photos/A-New-Hope.jpg";
import EmpirePoster from "../Photos/Empire-Strikes-Back.jpg";
import ROTJPoster from "../Photos/ROTJ.jpg";
import ForceAwakensPoster from "../Photos/Force-Awakens.jpg";
import LastJediPoster from "../Photos/Last-Jedi.jpg";
import SkywalkerPoster from "../Photos/Rise-of-Skywalker.jpg";
import StarWarsLogo from "../Photos/Star-Wars-Logo.jpg";

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  const [isShowing, setIsshowing] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isWork, setIsWork] = useState(false);
  const [isSolo, setIsSolo] = useState(false);
  const [isRogueOne, setIsRougeOne] = useState(false);
  const [isNewHope, setIsNewHope] = useState(false);
  const [isEmpire, setIsEmpire] = useState(false);
  const [isROTJ, setIsROTJ] = useState(false);
  const [isForce, setIsForce] = useState(false)
  const [isJedi, setisJedi] = useState(false)
  const[isSkywalker, setisSkywalker] = useState(false)

  return (
    <Fragment>
      <img
        src={StarWarsLogo}
        className="Star-Wars-Logo"
        alt=""
        width="400"
        height="300"
      />
      <div className="container">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h4>Release Date: May 19, 1999</h4>
                <h1>The Phantom Menace</h1>

                <Link className="Phantom-Button" to="/PhantomMenace">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isShown && (
                  <img
                    src={PhantomMenacePoster}
                    id="Phantom-Menace"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date:May 16, 2002</h4>
                <h1>Attack of the Clones</h1>
                <Link className="next=page" to="/Attack-of-the-Clones">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsshowing(true)}
                    onMouseLeave={() => setIsshowing(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isShowing && (
                  <img
                    src={AttackClonesPoster}
                    id="Attack-of-the-Clones"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: October 3, 2008</h4>
                <h1>Clone Wars</h1>

                <Link className="next=page" to="/CloneWars">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsShow(true)}
                    onMouseLeave={() => setIsShow(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isShow && (
                  <img
                    src={CloneWarsPoster}
                    id="Clone-Wars"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: May 19, 2005</h4>
                <h1>Revenge of the Sith</h1>

                <Link className="next=page" to="/Revenge-of-the-Sith">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsWork(true)}
                    onMouseLeave={() => setIsWork(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isWork && (
                  <img
                    src={RevengeSithPoster}
                    id="Sith"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: May 25, 2018</h4>
                <h1>Solo</h1>

                <Link className="next=page" to="/Solo">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsSolo(true)}
                    onMouseLeave={() => setIsSolo(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isSolo && (
                  <img
                    src={SoloPoster}
                    id="Solo"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: December 16, 2016</h4>
                <h1>Rouge One</h1>

                
                <Link className="next=page" to="/Rouge-One">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsRougeOne(true)}
                    onMouseLeave={() => setIsRougeOne(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isRogueOne && (
                  <img
                    src={RogueOnePoster}
                    id="Rouge-One"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: May 25, 1977</h4>
                <h1>A New Hope</h1>

                <Link className="next=page" to="/New-Hope">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsNewHope(true)}
                    onMouseLeave={() => setIsNewHope(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isNewHope && (
                  <img
                    src={NewHopePoster}
                    id="New-Hope"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: May 21, 1980</h4>
                <h1>Empire Strikes Back</h1>

                <Link className="next=page" to="/Empire-Strikes-Back">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsEmpire(true)}
                    onMouseLeave={() => setIsEmpire(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isEmpire && (
                  <img
                    src={EmpirePoster}
                    id="Empire"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: May 25, 1983</h4>
                <h1>Return of the Jedi</h1>

                <Link className="next=page" to="/ROTJ">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsROTJ(true)}
                    onMouseLeave={() => setIsROTJ(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isROTJ && (
                  <img
                    src={ROTJPoster}
                    id="ROTJ"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: December 18, 2015</h4>
                <h1>The Force Awakens</h1>

                <Link className="next=page" to="/ForceAwakens">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setIsForce(true)}
                    onMouseLeave={() => setIsForce(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isForce && (
                  <img
                    src={ForceAwakensPoster}
                    id="Force"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: December 15, 2017</h4>
                <h1>The Last Jedi</h1>

                <Link className="next=page" to="/LastJedi">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setisJedi(true)}
                    onMouseLeave={() => setisJedi(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isJedi && (
                  <img
                    src={LastJediPoster}
                    id="LastJedi"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h4> Release Date: December 20, 2019</h4>
                <h1>Rise of Skywalker</h1>

                <Link className="next=page" to="/Rise-of-Skywalker">
                  <button
                    className="btn btn-outline-info"
                    type="button"
                    onMouseEnter={() => setisSkywalker(true)}
                    onMouseLeave={() => setisSkywalker(false)}
                    onClick={console.log("Working")}
                  >
                    Go Here
                  </button>
                </Link>

                {isSkywalker&& (
                  <img
                    src={SkywalkerPoster}
                    id="Skywalker"
                    alt=""
                    width="300"
                    height="300"
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
