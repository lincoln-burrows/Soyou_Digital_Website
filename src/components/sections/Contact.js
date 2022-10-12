import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import "../../App.css";
import "../css/Contact.css";
import hamburger from '../assets/hamburger.png';
import upwardArrow from "../assets/upwardArrow.png";
import { useState } from 'react'
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";
import { lineHeight } from '@mui/system';
import styled from 'styled-components'

const Contact = (props) => {
    const dispatch = useDispatch();
   
    //커밋 테스트
  const modalNavStep1 = (targetPage) =>{
      props.toggleNav(targetPage);
  }

  // 공통 CSS
  const Container = styled.div`
  display:flex;
  flex-direction: column;
  height : ${props.pageHeight}px;
  `;

  const Header = styled.div`
  border: 1px solid gray;
  height : ${(props.pageHeight)*0.1316}px;
  align-self: center;
  `;

  const Footer = styled.div`
  border:1px solid gray;
  height : ${(props.pageHeight)*0.1316}px;
  align-self: center;
  `;

  const Section = styled.div`
  display: flex;
  height : ${(props.pageHeight)*0.7368}px;
  `;

  const Nav = styled.div`
  border:1px solid gray;  
  height : ${(props.pageHeight)*0.7368}px;
  flex: 2.435;
  `;

  const Aside = styled.div`
  border:1px solid gray;  
  flex: 5.5;
  text-align: right;
  align-self: flex-end;
  height : ${(props.pageHeight)*0.7368}px;
  `;

  const Main = styled.div`
  border: 1px solid gray;
  flex: 18;
  flex-shrink: 0;
  align-items: flex-start;
  height : ${(props.pageHeight)*0.7368}px;
  `;
// 공통 CSS 끝

    // if(props.scrollIndex == 4){
    return (
        <Container>
      <Header >
      
      </Header>
      <Section>
          <Nav>
            
          </Nav>
          <Aside>
          </Aside>
          <Main>
              <div className='contactTitle'>
          <div>Requests for Service</div>
                        <div className='contactSubTitle'>soyou_crypto@gmail.com</div>
                        </div>
                        
                        <div className='contactPassage'>
                        <div className="contactPassage1">[ Track Record ]</div>
                        <div className="contactPassage2">&bull; &nbsp;&nbsp;&nbsp;&nbsp;May '22 : Selected for angel package by Seoul Center for Creative Economy & Innovation</div>
                        <div className="contactPassage3">&bull; &nbsp;&nbsp;&nbsp;&nbsp;Oct '22 : Momentum algorithm ver1.0 launched</div>
                        <div className="contactPassage4">&bull; &nbsp;&nbsp;&nbsp;&nbsp;Oct '22 : Stable only ver1.0 launched
                        </div>
                        </div>
          </Main>
          <Aside>
          <img className='hamburgerContact' width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
          <ToggleModal modalNavStep1={modalNavStep1}/>
          </Aside>
          <Nav>
            
          </Nav>
      </Section>
      <Footer>
      </Footer>
    </Container>
    );
// } else {
//     return (
//         <div className="containerHG">
//       <header >
    
//       </header>
//       <section className="content">
//           <nav>
            
//           </nav>
//           <aside>
//           </aside>
//           <main>
//               <div className='contactTitleT'>
//           <div>Requests for Service</div>
//                         <div className='contactSubTitleT'>soyou_crypto@gmail.com</div>
//                         </div>
                        
//                         <div className='contactPassageT'>
//                         <div className="contactPassage1T">[ Track Record ]</div>
//                         <div className="contactPassage2T">&bull; &nbsp;&nbsp;&nbsp;&nbsp;May '22 : Selected for angel package by Seoul Center for Creative Economy & Innovation</div>
//                         <div className="contactPassage3T">&bull; &nbsp;&nbsp;&nbsp;&nbsp;Oct '22 : Momentum algorithm ver1.0 launched</div>
//                         <div className="contactPassage4T">&bull; &nbsp;&nbsp;&nbsp;&nbsp;Oct '22 : Stable only ver1.0 launched</div>
//                         </div>
//           </main>
//           <aside>
//           <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
//           <ToggleModal modalNavStep1={modalNavStep1}/>
//           </aside>
//           <nav>
            
//           </nav>
//       </section>
//       <footer>
//       </footer>
//     </div>
        
//     );
// }
}

export default Contact;
