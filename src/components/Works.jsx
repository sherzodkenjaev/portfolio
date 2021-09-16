import React, { useState } from "react";
import Inworks from "./Inworks";
import Inworksorigin from "./Inworksorigin";
import Fade from "react-reveal/Fade";
import "../styles/Works.css";
import keeper from "../img/keeper.png";
import amazon from "../img/amazon_clone.png";
import dice from "../img/dice_game.png";
import drumkit from "../img/drumkit.png";
import howmany from "../img/howmany.png";
import linkedin from "../img/linkedin_clone.png";
import mywebsite from "../img/my-website.png";
import simon from "../img/simon_game.png";
import sktech from "../img/sk_tech_shopping.png";
import studentlist from "../img/student_list.png";
import tesla from "../img/tesla_clone.png";
import todo from "../img/todolist.png";

function Works() {
  const [isRec0, setIsRec0] = useState(false);
  const [isRec1, setIsRec1] = useState(false);
  const [isRec2, setIsRec2] = useState(false);
  const [isRec3, setIsRec3] = useState(false);
  const [isRec4, setIsRec4] = useState(false);
  const [isRec5, setIsRec5] = useState(false);
  const [isRec6, setIsRec6] = useState(false);
  const [isRec7, setIsRec7] = useState(false);
  const [isRec8, setIsRec8] = useState(false);
  const [isRec9, setIsRec9] = useState(false);
  const [isRec10, setIsRec10] = useState(false);
  const [isRec11, setIsRec11] = useState(false);

  const InBox = ({ href, title, text, image, setState, theState }) => {
    return (
      <div
        className="rectangle"
        onMouseEnter={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        {theState ? (
          <Inworks href={href} title={title} text={text} />
        ) : (
          <Inworksorigin img={image} />
        )}
      </div>
    );
  };

  return (
    <div className="works container" id="portfolio">
      <Fade bottom>
        <h1>My Recent Works</h1>
        <p>Here is some of my works done lately , plese contact for more...</p>
      </Fade>
      <div class="rows">
        <Fade bottom>
          <div className="first_row">
            {
              <InBox
                theState={isRec0}
                setState={setIsRec0}
                href="https://sherzodkenjaev.github.io/keeper"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS | Material UI"
                image={keeper}
              />
            }
            {
              <InBox
                theState={isRec5}
                setState={setIsRec5}
                href="https://sherzodkenjaev.github.io/linkedin-clone"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS | Redux | Firebase | React Flip Move | Material UI"
                image={linkedin}
              />
            }
            {
              <InBox
                theState={isRec7}
                setState={setIsRec7}
                href="https://sherzodkenjaev.github.io/my-store"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS | Redux | React Routing | React Reveal | Material UI"
                image={sktech}
              />
            }

            {
              <InBox
                theState={isRec3}
                setState={setIsRec3}
                href="https://sherzodkenjaev.github.io/drumkit/"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | DOM"
                image={drumkit}
              />
            }
          </div>
        </Fade>
        <Fade bottom>
          <div className="second_row">
            {
              <InBox
                theState={isRec2}
                setState={setIsRec2}
                href="https://sherzodkenjaev.github.io/dice-game/"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | DOM"
                image={dice}
              />
            }
            {
              <InBox
                theState={isRec9}
                setState={setIsRec9}
                href="https://sherzodkenjaev.github.io/tesla-website"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS | Redux | Styled Components | React Reveal | Material UI"
                image={tesla}
              />
            }
            {
              <InBox
                theState={isRec1}
                setState={setIsRec1}
                href="https://sherzodkenjaev.github.io/amazon-clone"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS | Firebase | Cotext API | React Routing | Material UI"
                image={amazon}
              />
            }
            {
              <InBox
                theState={isRec8}
                setState={setIsRec8}
                href="https://sherzodkenjaev.github.io/students-list"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS | Redux | Bootstrap | React Toastify"
                image={studentlist}
              />
            }
          </div>
        </Fade>
        <Fade bottom>
          <div className="third_row">
            {
              <InBox
                theState={isRec6}
                setState={setIsRec6}
                href="https://sherzodkenjaev.github.io/simon-game/"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | JQuery"
                image={simon}
              />
            }

            {
              <InBox
                theState={isRec10}
                setState={setIsRec10}
                href="https://sherzodkenjaev.github.io/todo-list/"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS"
                image={todo}
              />
            }
            {
              <InBox
                theState={isRec4}
                setState={setIsRec4}
                href="https://sherzodkenjaev.github.io/taxtakerak"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | DOM"
                image={howmany}
              />
            }
            {
              <InBox
                theState={isRec11}
                setState={setIsRec11}
                href="https://sherzodkenjaev.github.io/portfolio/"
                title="Technologies Used"
                text="HTML | CSS | JavaScript | ReactJS | React Reveal | Bootstrap | Material UI"
                image={mywebsite}
              />
            }
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Works;
