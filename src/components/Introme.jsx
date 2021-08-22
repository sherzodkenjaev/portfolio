import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/Introme.css";

function Introme() {
  return (
    <div className="introme" id="introInfo">
      <div className="container">
        <Fade bottom>
          <h1>Nice to meet you</h1>
          <br />
          <p className="intromeText">
            I'm a self-taught frontend web developer. My interests are finding
            job with future career prospects, looking forward to get high
            experience by working with specialists and the ability to realize
            own potential and to be as helpful as possible to the overall team.
            I love developing productive and user friendly products. I use my
            maximal capabilities to complete tasks on hand. My thirst for
            knowledge and new skills help me to be up to date with industry
            standards.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Introme;
