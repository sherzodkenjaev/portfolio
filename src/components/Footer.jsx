import React from "react";
import Fab from "@material-ui/core/Fab";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Fade from "react-reveal/Fade";
import "../styles/Footer.css";

function Footer() {
  let year = new Date();

  return (
    <div className="footer" id="resume">
      <div className="container">
        <Fade bottom>
          <div className="resume">
            <h3>If you need more info please download my resume</h3>
            <button type="button" class="btn btn-success">
              Success
            </button>
          </div>
        </Fade>
        <h1>SK</h1>
        <Fade bottom>
          <div className="footerIcons">
            <p>
              <Fab
                color="primary"
                aria-label="add"
                href="https://www.facebook.com/"
              >
                <FacebookIcon />
              </Fab>
            </p>
            <p>
              <Fab
                color="primary"
                aria-label="add"
                href="https://www.facebook.com/"
              >
                <LinkedInIcon />
              </Fab>
            </p>
            <p>
              <Fab
                color="primary"
                aria-label="add"
                href="https://www.facebook.com/"
              >
                <MailOutlineIcon />
              </Fab>
            </p>
            <p>
              <Fab
                color="primary"
                aria-label="add"
                href="https://www.facebook.com/"
              >
                <TelegramIcon />
              </Fab>
            </p>
            <p>
              <Fab
                color="primary"
                aria-label="add"
                href="https://www.facebook.com/"
              >
                <TwitterIcon />
              </Fab>
            </p>
          </div>
        </Fade>
        <e>
          Made by me <span>&copy;</span> {year.getFullYear()}
        </e>
      </div>
    </div>
  );
}

export default Footer;
