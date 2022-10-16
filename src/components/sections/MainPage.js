import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import "../css/MainPage.css";
import "../../App.css";
import { useState, useEffect, useRef } from 'react'
import hamburger from '../assets/hamburger.png';
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";
import WebFont from 'webfontloader';

const MainPage = (props) => {
    const dispatch = useDispatch();

    
    const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }
   

    // useEffect(() => {
    //     WebFont.load({
    //       custom: {
    //         families: 'noto-sans-kr-bold',
    //         urls: ['https://cdn.jsdelivr.net/npm/noto-sans-kr-font@0.0.6/fonts/NotoSansKR-Bold.woff2'],
    //         families: 'noto-sans-kr-medium',
    //         urls: ['https://cdn.jsdelivr.net/npm/noto-sans-kr-font@0.0.6/fonts/NotoSansKR-Medium.woff2'],
    //       },
    //     });
    //   }, []);

      
    // if(props.scrollIndex == 1){
        return (
            <div>
                <ToggleModal modalNavStep1={modalNavStep1}/>
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
          <div className="mainTitle">SOYOU CRYPTO3</div>
          <h4 className="mainSubTitle">Crypto Asset Management Labs</h4>
          </div>
          <br></br>
          <div className="mainDescription1">Crypto asset management for all</div>
          <div className="mainDescription2">More capital income for all</div>
          <div className="mainDescription3">More freedom for all</div>
          </main>
          <aside>
          {/* <img className="hamburger" width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/> */}
          
          </aside>
          <nav >
          </nav>
      </section>
      <footer>
      
      </footer>
    </div>
    </div>
        );
    } 
    // else {

    //     return (
    //         <div><ToggleModal modalNavStep1={modalNavStep1}/>
    //         <div className="containerHG">
    //   <header >
    //   </header>
    //   <section className="content">
    //       <nav className='test'>
          
    //       </nav>
    //       <aside>
    //       </aside>
    //       <main>
    //           <div className='mainUpperT'>
    //       <div className="mainTitleT">SOYOU CRYPTO</div>
    //       <h4 className="mainSubTitleT">Crypto Asset Management Labs</h4>
    //       </div>
    //       <br></br>
    //       <div className="mainDescription1T">Crypto asset management for all</div>
    //       <div className="mainDescription2T">More capital income for all</div>
    //       <div className="mainDescription3T">More freedom for all</div>
    //       </main>
    //       <aside>
    //       <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
          
    //       </aside>
    //       <nav >
    //       </nav>
    //   </section>
    //   <footer>
      
    //   </footer>
    // </div>
    // </div>

    // ); }
        
// }
    





export default MainPage;
