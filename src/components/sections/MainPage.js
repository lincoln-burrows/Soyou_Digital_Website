import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import styled, { keyframes } from "styled-components";
import "../../App.css";
import downwardArrow from "../assets/downwardArrow.png";
import upwardArrow from "../assets/upwardArrow.png";
import { useState, useEffect, useRef } from 'react'
import hamburger from '../assets/hamburger.png';
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";


const MainPage = (props) => {
    const dispatch = useDispatch();
    const isModalOn = useSelector((state) => state.modalOn);

    
    const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }
   

    if(props.scrollIndex == 1){
        return (
            <div className="mainPage">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="6" md="8" className="align-self-center text-center">
                            <div className = "mainUpper">
                            <h1 className="mainTitle">SOYOU CRYPTO</h1>
                            <h4 className="mainSubTitle">Crypto Asset Management Labs</h4>
                            </div>
                            <br></br>
                            <br></br>
                            <h4 className="mainDescription1">Crypto asset management for all</h4>
                            <h4 className="mainDescription2">More capital income for all</h4>
                            <h4 className="mainDescription3">More freedom for all</h4>
                            
                            <div className="hamburgerMain">
                                <img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}></img>
                                </div>
                            <ToggleModal modalNavStep1={modalNavStep1}/>
                            <img src={downwardArrow} className="mainDownwardArrow" onClick={()=>{props.pageDown(1);}}></img>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    } 
    else {

        return (
        <div className="mainPageq">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6" md="8" className="align-self-center text-center">
                        <div className = "mainUpperq">
                        <h1 className="mainTitleq">SOYOU CRYPTO</h1>
                        <h4 className="mainSubTitleq">Crypto Asset Management Labs</h4>
                        </div>
                        <br></br>
                        <br></br>
                        <h4 className="mainDescription1q">Crypto asset management for all</h4>
                        <h4 className="mainDescription2q">More capital income for all</h4>
                        <h4 className="mainDescription3q">More freedom for all</h4>
                        
                        <div className="hamburgerMainq">
                                <img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}></img>
                                </div>
                            <ToggleModal modalNavStep1={modalNavStep1}/>
                            <img src={downwardArrow} className="mainDownwardArrowq" onClick={()=>{props.pageDown(1);}}></img>
                        
                    </Col>
                </Row>
            </Container>
        </div>

    ); }
        
}
    





export default MainPage;
