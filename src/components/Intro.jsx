import React from "react";
import avatar from "../img/sherzod.jpg";
import hero from "../img/hero.svg";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import "../styles/Intro.css";

function Intro() {
  return (
    <div className="intro">
      <Fade bottom>
        <h1>Hi I'm Sherzod Front-end Developer</h1>
      </Fade>
      <Fade bottom>
        <img className="avatar" src={avatar} />
      </Fade>
      <img className="hero" src={hero} />
    </div>
  );
}

export default Intro;
