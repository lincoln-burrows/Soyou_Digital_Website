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
import StableOnlyGraph from "./StableOnlyGraph";
import hamburger from '../assets/hamburger.png';
import { useState } from 'react'
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";
import InfoRFSButton from "../assets/InfoRFSButton";
import { stableAction } from "../../redux/actions/stableAction";

const StableOnly = (props) => {

  const dispatch = useDispatch();
  const { stableLowerButton, stableUpperButton } = useSelector((state) => state.legacy);
  const { stableData, stableIndex } = useSelector((state) => state.stableData);
    
  const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }

    useEffect(() => {
      dispatch(stableAction.getStableGraph("STABLEALL"));
    }, []);
    

  return (
    <div className="momentumPage">
       <img src={upwardArrow} className="upwardArrow" onClick={()=>{props.pageUp(2);}}></img>
            <Row className="justify-content-center">
                <Col lg="6" md="8" className="align-self-center text-center">
        <div className="momentumTitle">Stablecoin Only</div>
        <br></br>
        <Button size="sm" variant={"default" + (stableUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="STABLE_PROFIT" />
       <Button size="sm" variant={"default" + (stableUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="STABLE_INFO" />
       <span className={stableUpperButton == "2" ? 'hide info' : 'info'}>
       <Button3 size="sm" variant={"default" + (stableLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="STABLEALL"/> 
       <Button3 size="sm" variant={"default" + (stableLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="STABLE1Y"/> 
       <Button3 size="sm" variant={"default" + (stableLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="STABLE6M"/> 
       <Button3 size="sm" variant={"default" + (stableLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="STABLE3M"/> 
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
             {stableIndex && stableIndex.cumReturn}&nbsp;%
            </Col>
            <Col lg="3" className="align-self-center text-center">
            {stableIndex && stableIndex.dailyAvg}&nbsp;%
            </Col>
            <Col lg="3" className="align-self-center text-center">
            {stableIndex && stableIndex.dailySharp}
            </Col>
            <Col lg="3" className="align-self-center text-center">
            &nbsp;{stableIndex && stableIndex.mdd}&nbsp;% 
            </Col>
          </Row>

          </span>
          <div className={stableUpperButton == "1" ? 'hide info' : 'info'}>

              <br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="infoText">
              <li >To be updatated</li>
              <br></br>
              <li >To be updatated</li>
              <br></br>
              <li >To be updatated</li>          
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <InfoRFSButton size="sm" variant={"default" + (stableUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu" modalNavStep1={modalNavStep1} targetPage="3" />   
              </div>
          
          
          </Col>
        </Row>
        
        <img src={downwardArrow} className="downwardArrow" onClick={()=>{props.pageDown(3);}}></img>
        <div className="hamburgerGraph"><img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/></div>
        <ToggleModal modalNavStep1={modalNavStep1}/>
      </div>
  )
}

export default StableOnly
