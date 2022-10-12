import React, { Component, useEffect } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
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
import ToggleMenu from "../assets/ToggleMenu";
import InfoRFSButton from "../assets/InfoRFSButton";
import { stableAction } from "../../redux/actions/stableAction";
import styled from 'styled-components'

const StableOnly = (props) => {

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

  const dispatch = useDispatch();
  const { stableLowerButton, stableUpperButton } = useSelector((state) => state.legacy);
  const { stableData, stableIndex } = useSelector((state) => state.stableData);
    
  const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
        console.log("sfsdf");
    }

    useEffect(() => {
      dispatch(stableAction.getStableGraph("STABLEALL"));
    }, []);
    

  return (
    <Container>
      <Header >
      
      </Header>
      <Section className="content">
          <Nav>
            
          </Nav>
          <Aside>
          </Aside>
          <Main>
            <div className="momentumTitle">Stablecoin Only</div>
        <Button size="left" variant={"default" + (stableUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="STABLE_PROFIT" />
       <Button size="right" variant={"default" + (stableUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="STABLE_INFO" />
       <span className={stableUpperButton == "2" ? 'hide below' : 'below'}>
       <Button3 size="left" variant={"default" + (stableLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="STABLEALL"/> 
       <Button3 size="middle" variant={"default" + (stableLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="STABLE1Y"/> 
       <Button3 size="middle" variant={"default" + (stableLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="STABLE6M"/> 
       <Button3 size="right" variant={"default" + (stableLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="STABLE3M"/> 
        <StableOnlyGraph />
        <div className="indexContainer">
        <div className="index">Cum. Return</div>
        <div className="index">Daily Avg.</div>
        <div className="index">Daily Sharp</div>
        <div className="index">MDD</div>
        </div>
        <div className="indexValueContainer">
        <div className="index">{stableIndex && stableIndex.cumReturn}&nbsp;%</div>
        <div className="index">{stableIndex && stableIndex.dailyAvg}&nbsp;%</div>
        <div className="index">{stableIndex && stableIndex.dailySharp}</div>
        <div className="index">&nbsp;{stableIndex && stableIndex.mdd}&nbsp;%</div>
        </div>
        </span>
        
        <div className={stableUpperButton == "1" ? 'hide below' : 'below'}>

              <br></br><br></br><br></br><br></br>
              <div className="infoText">
              <li >To be updated</li>
              
              <li >To be updated</li>
              
              <li >To be updated</li>          
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <InfoRFSButton size="sm" variant={"default" + (stableUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu" modalNavStep1={modalNavStep1} targetPage="3" />   
              </div>
        
          </Main>
          <Aside>
          <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
          <ToggleModal modalNavStep1={modalNavStep1}/>
          </Aside>
          <Nav>
            
          </Nav>
      </Section>
      <Footer>
      
      </Footer>
    </Container>
    
  )
}

export default StableOnly