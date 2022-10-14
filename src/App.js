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
const pageHeight = 400;


function App() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const dispatch = useDispatch();

  
  const pageUp = (currentPage) => {
    outerDivRef.current.scrollTo({
      top: pageHeight*(currentPage-1) + DIVIDER_HEIGHT,
      left: 0,
      behavior: "smooth",
    });
    setScrollIndex(parseInt(currentPage));
  }

  const pageDown = (currentPage) => {
    outerDivRef.current.scrollTo({
      top: pageHeight*(currentPage) + DIVIDER_HEIGHT,
      left: 0,
      behavior: "smooth",
    });
    setScrollIndex(parseInt(currentPage)+1);
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

  const handleResize = () => {
    let currentHeight = (window.innerHeight);
    setScrollIndex(currentHeight);
    // if (currentHeight >= pageHeight) {
    //   pageHeight = currentHeight;
    // }
    // dispatch({type:"PAGEHEIGHT"});
}

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // useEffect(() => {
  //   const wheelHandler = (e) => {
      
  //     console.log("스크롤 감지", e);
  //     dispatch({type:"SET_MODAL_OFF"});
  //     console.log("modal 값은?", isModalOn);
  //     // e.preventDefault();
  //     const { deltaY } = e;
  //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
  //     // const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

  //     if (deltaY > 0) {
  //       // 스크롤 내릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         console.log("현재 1페이지, down", outerDivRef.current);
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight + DIVIDER_HEIGHT *1,
  //           left: 0,
  //           behavior: "smooth",
  //         });

  //         setScrollIndex(2);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log("현재 2페이지, down", outerDivRef.current);
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(3);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
  //         //현재 3페이지
  //         console.log("현재 3페이지, down", outerDivRef.current);
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(4);
  //       } else 
  //       // if(scrollTop >= pageHeight && scrollTop < pageHeight * 4) 
  //       {
  //         //현재 4페이지
  //         console.log("현재 4페이지, down");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(4);
  //       } 
  //       // else {
  //       //   // 현재 5페이지
  //       //   console.log("현재 5페이지, down");
  //       //   outerDivRef.current.scrollTo({
  //       //     top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
  //       //     left: 0,
  //       //     behavior: "smooth",
  //       //   });
  //       //   setScrollIndex(5);
  //       // }
  //     } else {
  //       // 스크롤 올릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         console.log("현재 1페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log("현재 2페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
  //         //현재 3페이지
  //         console.log("현재 3페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight + DIVIDER_HEIGHT*1,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(2);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
  //         //현재 4페이지
  //         console.log("현재 4페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight*2 + DIVIDER_HEIGHT*2,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(3);
  //       } else {
  //         // 현재 5페이지
  //         console.log("현재 5페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight*3 + DIVIDER_HEIGHT*3,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(4);
  //       }
  //     }
  //   };
        
  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  //   // outerDivRefCurrent.addEventListener("scroll", wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //     // outerDivRefCurrent.removeEventListener("scroll", wheelHandler);

  //   };
  // }, []);
  return (
    <div ref={outerDivRef} className="outer">

      <MainPage pageDown={pageDown} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      <div className="divider"></div>
      <Momentum pageUp={pageUp} pageDown={pageDown} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      <div className="divider"></div>
      <StableOnly pageUp={pageUp} pageDown={pageDown} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      <div className="divider"></div>
      <Contact pageUp={pageUp} scrollIndex={scrollIndex} toggleNav={toggleNav}/>
      
    </div>
  );
}

export default App;