import React from "react";
import frontend from "../img/frontend.svg";
import Fade from "react-reveal/Fade";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills container" id="skills">
      <Fade bottom>
        <img src={frontend} />
        <h2>Front-end Developer</h2>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </Fade>

      <Fade bottom>
        <div className="skillsText">
          <span className="rightBorder">
            <h3>Languages I speak</h3>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </span>
          <span className="rightBorder">
            <h3>Frameworks I use</h3>
            <p>React JS</p>
            <p>jQuery</p>
            <p>Bootstrap</p>
            <p>React Redux</p>
          </span>
          <span>
            <h3>Techs I use</h3>
            <p>Material UI</p>
            <p>React Routing</p>
            <p>Rest API</p>
            <p>Firebase</p>
            <p>React Cotext API</p>
            <p>React Reveal</p>
            <p>React Flip Move</p>
            <p>React Toastify</p>
          </span>
        </div>
      </Fade>
    </div>
  );
}

export default Skills;
