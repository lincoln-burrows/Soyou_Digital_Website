import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import "../css/MainPage.css";
import "../../App.css";
import downwardArrow from "../assets/downwardArrow.png";
import upwardArrow from "../assets/upwardArrow.png";
import { useState, useEffect, useRef } from 'react'
import hamburger from '../assets/hamburger.png';
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";


const MainPage = (props) => {
    const dispatch = useDispatch();

    
    const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }
   

    if(props.scrollIndex == 1){
        return (
            <div><ToggleModal modalNavStep1={modalNavStep1}/>
            <div className="containerHG">
      <header >
      </header>
      <section className="content">
          <nav className='test'>
          {/* ------------- */}
          </nav>
          <aside>
          </aside>
          <main>
              <div className='mainUpper'>
          <div className="mainTitle">SOYOU CRYPTO</div>
          <h4 className="mainSubTitle">Crypto Asset Management Labs</h4>
          </div>
          <br></br>
          <div className="mainDescription1">Crypto asset management for all</div>
          <div className="mainDescription2">More capital income for all</div>
          <div className="mainDescription3">More freedom for all</div>
          </main>
          <aside>
          <img className="hamburger" width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
          
          </aside>
          <nav >
          </nav>
      </section>
      <footer>
      <img className="mainDownwardArrow" width="45.5" height="35.5" src={downwardArrow} onClick={()=>{props.pageDown(2);}}></img>
      </footer>
    </div>
    </div>
        );
    } 
    else {

        return (
            <div><ToggleModal modalNavStep1={modalNavStep1}/>
            <div className="containerHG">
      <header >
      </header>
      <section className="content">
          <nav className='test'>
          
          </nav>
          <aside>
          </aside>
          <main>
              <div className='mainUpperT'>
          <div className="mainTitleT">SOYOU CRYPTO</div>
          <h4 className="mainSubTitleT">Crypto Asset Management Labs</h4>
          </div>
          <br></br>
          <div className="mainDescription1T">Crypto asset management for all</div>
          <div className="mainDescription2T">More capital income for all</div>
          <div className="mainDescription3T">More freedom for all</div>
          </main>
          <aside>
          <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
          
          </aside>
          <nav >
          </nav>
      </section>
      <footer>
      <img className="downwardArrow" width="45.5" height="35.5" src={downwardArrow} onClick={()=>{props.pageDown(2);}}></img>
      </footer>
    </div>
    </div>

    ); }
        
}
    





export default MainPage;
