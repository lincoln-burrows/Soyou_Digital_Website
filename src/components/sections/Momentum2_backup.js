import React, { Component, useEffect } from "react";

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
import ToggleMenu from "../assets/ToggleMenu";
import InfoRFSButton from "../assets/InfoRFSButton";
import { momentumAction } from "../../redux/actions/momentumAction";

const Momentum2 = (props) => {

  const dispatch = useDispatch();
  const { momentumLowerButton, momentumUpperButton } = useSelector((state) => state.legacy);
  const { momentumData, momentumIndex } = useSelector((state) => state.momentumData);
    
  const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
        console.log("sfsdf");
    }
    // console.log("출력위한데이터?", momentumIndex);
    // console.log("출력위한데이터2?", momentumIndexAll[0]);

    useEffect(() => {
      dispatch(momentumAction.getMomentumGraph());
    }, []);
    

  return (
    <div className="momentumPage">
       <img src={upwardArrow} className="upwardArrow" onClick={()=>{props.pageUp(1);}}></img>
            <Row className="justify-content-center">
                <Col lg="6" md="8" className="align-self-center text-center">
        <div className="momentumTitle"> Momentum Algorithm</div>
        <br></br>
        <Button size="sm" variant={"default" + (momentumUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="MOMENTUM_PROFIT" />
       <Button size="sm" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="MOMENTUM_INFO" />
       <span className={momentumUpperButton == "2" ? 'hide info' : 'info'}>
       <Button3 size="sm" variant={"default" + (momentumLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="MOMENTUM_ALL"/> 
       <Button3 size="sm" variant={"default" + (momentumLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="MOMENTUM_1Y"/> 
       <Button3 size="sm" variant={"default" + (momentumLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="MOMENTUM_6M"/> 
       <Button3 size="sm" variant={"default" + (momentumLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4"actionName="MOMENTUM_3M"/> 
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
             {momentumIndex && momentumIndex.cumReturn}&nbsp;%
            </Col>
            <Col lg="3" className="align-self-center text-center">
            {momentumIndex && momentumIndex.dailyAvg}&nbsp;%
            </Col>
            <Col lg="3" className="align-self-center text-center">
            {momentumIndex && momentumIndex.dailySharp}
            </Col>
            <Col lg="3" className="align-self-center text-center">
            &nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;% 
            </Col>
          </Row>

          </span>
          <div className={momentumUpperButton == "1" ? 'hide info' : 'info'}>

              <br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="infoText">
              <li >To be updatated</li>
              <br></br>
              <li >To be updatated</li>
              <br></br>
              <li >To be updatated</li>          
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <InfoRFSButton size="sm" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu" modalNavStep1={modalNavStep1} targetPage="3" />   
              </div>
          
          
          </Col>
        </Row>
        
        <img src={downwardArrow} className="downwardArrow" onClick={()=>{props.pageDown(2);}}></img>
        <div className="hamburgerGraph"><img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/></div>
        <ToggleModal modalNavStep1={modalNavStep1}/>
      </div>
  )
}

export default Momentum2
