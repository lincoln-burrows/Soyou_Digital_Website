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
import Box from '@mui/material/Box';
import styled from 'styled-components'


const MainPage = (props) => {
    const dispatch = useDispatch();
    const pageHeight = props.pageHeight;

    console.log("props?", props.pageHeight)
    
    const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }
    // border: 1px solid gray;
//    let headerHeight = props.pageHeight*0.1316;

/// 공통 CSS
  const Container = styled.div`
  display:flex;
  flex-direction: column;
  height : ${pageHeight}px;
  float:inherit;
  overflow:hidden;
  `;

  const Header = styled.div`
  border: 1px solid gray;
  height : ${(pageHeight)*0.1316}px;
  align-self: center;
  float:inherit;
  overflow:hidden;
  `;

  const Footer = styled.div`
  border:1px solid gray;
  height : ${(pageHeight)*0.1316}px;
  align-self: center;
  float:inherit;
  overflow:hidden;
  `;

  const Section = styled.div`
  display: flex;
  height : ${(pageHeight)*0.7368}px;
  float:inherit;
  overflow:hidden;
  `;

  const Nav = styled.div`
  border:1px solid gray;  
  height : ${(pageHeight)*0.7368}px;
  flex: 2.435;
  float:inherit;
  overflow:hidden;
  @media(max-width:1023px){
    flex:0
}
  `;

  const Aside = styled.div`
  border:1px solid gray;  
  flex: 5.5;
  text-align: right;
  align-self: flex-end;
  height : ${(pageHeight)*0.7368}px;
  float:inherit;
  overflow:hidden;
  @media(max-width:1023px){
    flex:0
}
  `;

  const Main = styled.div`
  border: 1px solid gray;
  flex: 18;
  flex-shrink: 0;
  align-items: flex-start;
  height : ${(pageHeight)*0.7368}px;
  float:inherit;
  overflow:hidden;

  @media(max-width:1023px){
      flex:1
  }
  `;
// 공통 CSS 끝

//   useEffect(() => {
//     window.addEventListener('resize', console.log("작동중", props.pageHeight));
//     return () => {
//       window.removeEventListener('resize', console.log("작동중"));
//     }
//   }, [props]);

    // if(props.scrollIndex == 1){
        return (
            <div><ToggleModal modalNavStep1={modalNavStep1}/>
            <Container>
      <Header >
      </Header>
      <Section>
          <Nav>
          {/* ------------- */}
          </Nav>
          <Aside>
          </Aside>
          <Main>
              <div className='mainUpper'>
          <div className="mainTitle">SOYOU CRYPTO</div>
          <h4 className="mainSubTitle">Crypto Asset Management Labs</h4>
          </div>
          <br></br>
          <div className="mainDescription1">Crypto asset management for all</div>
          <div className="mainDescription2">More capital income for all</div>
          <div className="mainDescription3">More freedom for all</div>
          </Main>
          <Aside>
          
          </Aside>
          <Nav >
          </Nav>
      </Section>
      <Footer>
      </Footer>
    </Container>
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
