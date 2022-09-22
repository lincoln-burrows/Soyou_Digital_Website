import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import "../../App.css";
import hamburger from '../assets/hamburger.png';
import upwardArrow from "../assets/upwardArrow.png";
import { useState } from 'react'
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";

const Contact = (props) => {
    const dispatch = useDispatch();
    const isModalOn = useSelector((state) => state.modalOn);
   
    //커밋 테스트
  const modalNavStep1 = (targetPage) =>{
      props.toggleNav(targetPage);
  }

    if(props.scrollIndex == 4){
    return (
        <div className="contactPage">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6" md="8" className="align-self-center text-center">
                    <img src={upwardArrow} className="contactUpwardArrow" onClick={()=>{props.pageUp(3);}}></img>
                    <br></br><br></br><br></br><br></br>
                    <h4 className='contactTitle'>Requests for Service</h4>
                        <h1 className='contactSubTitle'>soyou_crypto@gmail.com</h1>
                        
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <div className='contactPassage'>
                        <span className="contactPassage1">[ Track Record ]</span>
                        <br></br><br></br>
                        <li className="contactPassage2">May '22 : Selected for angel package by Seoul Center for Creative &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Economy & Innovation</li>
                        <br></br>
                        <li className="contactPassage3">Oct '22 : Momentum algorithm ver1.0 launched</li>
                        <br></br>
                        <li className="contactPassage4">Oct '22 : Stable only ver1.0 launched</li>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="hamburgerContact">
                <img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/></div>
                <ToggleModal modalNavStep1={modalNavStep1} />    
        </div>
    );
} else {
    return (
        <div className="contactPageq">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6" md="8" className="align-self-center text-center">
                    <img src={upwardArrow} className="contactUpwardArrowq" onClick={()=>{props.pageUp(3);}}></img>
                    <br></br><br></br><br></br><br></br>
                    <h4 className='contactTitleq'>Requests for Service</h4>
                        <h1 className='contactSubTitleq'>soyou_crypto@gmail.com</h1>
                        
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <div className='contactPassage'>
                        <span className="contactPassage1q">[ Track Record ]</span>
                        <br></br><br></br>
                        <li className="contactPassage2q">May '22 : Selected for angel package by Seoul Center for Creative &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Economy & Innovation</li>
                        <br></br>
                        <li className="contactPassage3q">Oct '22 : Momentum algorithm ver1.0 launched</li>
                        <br></br>
                        <li className="contactPassage4q">Oct '22 : Stable only ver1.0 launched</li>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="hamburgerContactq2">
            <img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/></div>
                <ToggleModal modalNavStep1={modalNavStep1} />  
        </div>
        
    );
}
}

export default Contact;
