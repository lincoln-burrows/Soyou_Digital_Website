import { useState, useEffect, useRef } from "react";
import "./App.css";
import MainPage from "./components/sections/MainPage";
import StableOnly from "./components/sections/StableOnly";
import Contact from "./components/sections/Contact";
import Momentum from "./components/sections/Momentum";
import Header from "./components/assets/Header"
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import ToggleModal from './components/sections/ToggleModal';


function App() {
  // const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const dispatch = useDispatch();
  const refMain = useRef(null);
  const refMomentum = useRef(null);
  const refStable = useRef(null);
  const refContact = useRef(null);

  
  

  const moveToMain = () => {
    refMain.current?.scrollIntoView({behavior: 'smooth'});
  };

  const moveToMomentum = () => {
    refMomentum.current?.scrollIntoView({behavior: 'smooth'});
  };

  const moveToStable = () => {
    refStable.current?.scrollIntoView({behavior: 'smooth'});
  };

  const moveToContact = () => {
    refContact.current?.scrollIntoView({behavior: 'smooth'});
  };

  const isModalOn = useSelector((state) => state.legacy);

  return (
    <div>
        {/* <Header/> */}
        {/* <ToggleModal moveToContact={moveToContact} moveToMain={moveToMain} moveToMomentum={moveToMomentum} moveToStable={moveToStable}/> */}
        <div ref={refMain} className="divider"></div>  
      <MainPage scrollIndex={scrollIndex} moveToContact={moveToContact} moveToMain={moveToMain} moveToMomentum={moveToMomentum} moveToStable={moveToStable}/>
      <div ref={refMomentum} className="divider"></div>
      <Momentum  scrollIndex={scrollIndex} moveToContact={moveToContact} />
      <div ref={refStable} className="divider"></div>
      <StableOnly scrollIndex={scrollIndex} moveToContact={moveToContact} />
      <div ref={refContact} className="divider"></div>
      <Contact scrollIndex={scrollIndex} />
    </div>
  );
}

export default App;


// @media (max-width:1px){

//   header{
//     /* border: 1px solid gray; */
//     height: 13.16vh;
//     /* height: 150px; */
//     align-self: center;
    
//   }

//   footer {
//     /* border:1px solid gray; */
//     height: 13.16vh;
//     align-self: center;
//   }
  
//   .content {
//     display: flex;
//     flex-shrink:0;
//     /* height:73.68vh; */
//     /* height:600px; */
    
//   }
  
//   .content nav {
//     /* border:1px solid gray;   */
//     flex: 0;
//   }
  
//   .content aside {
//     /* border:1px solid gray;   */
//     flex: 0;
//   }
  
//   .content main {
//     /* border: 1px solid gray; */
//     flex: 1;
//     align-items: flex-start;
//   }

// }
