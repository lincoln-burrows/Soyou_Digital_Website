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
import MomentumGraph from "./MomentumGraph";
import hamburger from '../assets/hamburger.png';
import { useState } from 'react'
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";

const Momentum2 = (props) => {

  const dispatch = useDispatch();
  const isModalOn = useSelector((state) => state.modalOn);

    const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }
    

  return (
    <div className="momentumPage">
       <img src={upwardArrow} className="upwardArrow" onClick={()=>{props.pageUp(1);}}></img>
            <Row className="justify-content-center">
                <Col lg="6" md="8" className="align-self-center text-center">
        <div className="momentumTitle"> Momentum Algorithm</div>
        <br></br>
        <Button size="sm" variant="success" children="Profit" buttonIndex="1" actionName="MOMENTUM_PROFIT" className="longButton1"/>
       <Button size="sm" variant="success" children="Information" buttonIndex="2" actionName="MOMENTUM_INFO" className="longButton2"/>
       <Button3 size="sm" variant="success" children="ALL" buttonIndex="1" actionName="MOMENTUM_ALL"/> 
       <Button3 size="sm" variant="success" children="1Y" buttonIndex="2" actionName="MOMENTUM_1Y"/> 
       <Button3 size="sm" variant="success" children="6M" buttonIndex="3" actionName="MOMENTUM_6M"/> 
       <Button3 size="sm" variant="success" children="3M" buttonIndex="4"actionName="MOMENTUM_3M"/> 
       <br></br><br></br>
        <MomentumGraph />
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
        
        <img src={downwardArrow} className="downwardArrow" onClick={()=>{props.pageDown(2);}}></img>
        <div className="hamburgerGraph"><img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/></div>
        <ToggleModal modalNavStep1={modalNavStep1}/>
      </div>
  )
}

export default Momentum2
