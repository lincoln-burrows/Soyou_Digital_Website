import React, { Component } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../../App.css";
import "../css/Momentum.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import downwardArrow from "../assets/downwardArrow.png";
import upwardArrow from "../assets/upwardArrow.png";
import App from "../../App";
import StableOnlyGraph from "./StableOnlyGraph";
import hamburger from '../assets/hamburger.png';
import { useState } from 'react'
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";

const StableOnly = (props) => {

  const dispatch = useDispatch();
  
    
    const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }
    

  return (
    <div className="momentumPage">
       <img src={upwardArrow} className="upwardArrow" onClick={()=>{props.pageUp(2);}}></img>
            <Row className="justify-content-center">
                <Col lg="6" md="8" className="align-self-center text-center">
        <div className="momentumTitle"> StableOnly Algorithm</div>
        <br></br>
        <Button size="sm" variant="success" children="Profit" className="longButton1"/>
       <Button size="sm" variant="success" children="Information" className="longButton2"/>
       <Button3 size="sm" variant="success" children="ALL" /> 
       <Button3 size="sm" variant="success" children="1Y" /> 
       <Button3 size="sm" variant="success" children="6M" /> 
       <Button3 size="sm" variant="success" children="3M" /> 
       <br></br><br></br>
        <StableOnlyGraph />
          <br></br>
          <Row className="firstRow">
            <Col lg="3" className="align-self-center text-center">
             Cum. Return 
            </Col>
            <Col lg="3" className="align-self-center text-center">
             Daily Avg.
            </Col>
            <Col lg="3" className="align-self-center text-center">
             Daily Sharp
            </Col>
            <Col lg="3" className="align-self-center text-center">
             MDD
            </Col>
          </Row>
          <Row className="secondRow">
            <Col lg="3" className="align-self-center text-center">
             41 % 
            </Col>
            <Col lg="3" className="align-self-center text-center">
             0.11 % 
            </Col>
            <Col lg="3" className="align-self-center text-center">
             0.08
            </Col>
            <Col lg="3" className="align-self-center text-center">
             - 19% 
            </Col>
          </Row>
          
          </Col>
          
        </Row>
        
        <img src={downwardArrow} className="downwardArrow" onClick={()=>{props.pageDown(3);}}></img>
        <div className="hamburgerGraph"><img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/></div>
        <ToggleModal modalNavStep1={modalNavStep1}/>
      </div>
  )
}

export default StableOnly
