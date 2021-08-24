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
            I'm a frontend web developer. My interests are finding job with
            future career prospects, looking forward to get high experience by
            working with specialists and the ability to realize own potential
            and to be as helpful as possible to the overall team. I love
            developing thoughtful and purposeful websites. I try to complete
            products by using my maximum capability in delivering apps on time.
            My purpose of becoming the best in the sphere forces me to be up to
            date with industry standards.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Introme;
