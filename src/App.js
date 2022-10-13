import { useState, useEffect, useRef, forwardRef } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Switch, HashRouter } from "react-router-dom";
import MainPage from "./components/sections/MainPage";
import StableOnly from "./components/sections/StableOnly";
import Contact from "./components/sections/Contact";
import Momentum from "./components/sections/Momentum";
import { useDispatch, useSelector } from "react-redux";

var hist = createBrowserHistory();
const DIVIDER_HEIGHT = 5;
let pageHeight = 400;

function App() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const dispatch = useDispatch();

const handleResize = () => {
    let currentHeight = (window.innerHeight);
    setScrollIndex(pageHeight);
    if (currentHeight >= pageHeight) {
      pageHeight = currentHeight;
    }
    // dispatch({type:"PAGEHEIGHT"});
}

  const toggleNav = (targetPage) => {
    console.log("toggleNav 작동");
    outerDivRef.current.scrollTo({
      top: pageHeight*(targetPage) + DIVIDER_HEIGHT*(targetPage),
      left: 0,
      behavior: "smooth",
    });
    setScrollIndex(parseInt(targetPage)+1);
  }

  const isModalOn = useSelector((state) => state.legacy);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  return (
    <div ref={outerDivRef} className="outer">
      
      <MainPage pageHeight={pageHeight} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      <div className="divider"></div>
      <Momentum pageHeight={pageHeight} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      <div className="divider"></div>
      <StableOnly pageHeight={pageHeight} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      <div className="divider"></div>
      <Contact pageHeight={pageHeight} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      
     </div>
  );
}

export default App;