import React, { useEffect, useState } from "react";
import Header from "./Header";
import Intro from "./Intro";
import Introme from "./Introme";
import Skills from "./Skills";
import Works from "./Works";
import Footer from "./Footer";
import { ArrowUpward } from "@material-ui/icons";

function App() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 500) {
        setIsActive(!isActive);
      } else {
        setIsActive(isActive);
      }
    };
  }, []);

  const handleScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <div
        className={isActive ? "scrollToTop active" : "scrollToTop"}
        onClick={handleScroll}
      >
        <ArrowUpward />
      </div>
      <Header />
      <Intro />
      <Introme />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
