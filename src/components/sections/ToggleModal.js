import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../css/ToggleModal.css"
import "../../App.css"
import ToggleMenu from '../assets/ToggleMenu';
import hamburger from '../assets/hamburger.png';
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'

const ToggleModal = (props) => {

    const { pageHeight, isModalOn } = useSelector((state) => state.legacy);
    
    // 공통 CSS
  const Container = styled.div`
  display:flex;
  flex-direction: column;
  height : ${pageHeight}px;
  width: 80vw;
  `;

  const Header = styled.div`
  border: 1px solid gray;
  height : ${(pageHeight)*0.1316}px;
  align-self: center;
  `;

  const Footer = styled.div`
  border:1px solid gray;
  height : ${(pageHeight)*0.1316}px;
  align-self: center;
  `;

  const Section = styled.div`
  display: flex;
  height : ${(pageHeight)*0.7368}px;
  `;

  const Nav = styled.div`
  border:1px solid gray;  
  height : ${(pageHeight)*0.7368}px;
  flex: 2.435;
  `;

  const Aside = styled.div`
  border:1px solid gray;  
  flex: 5.5;
  text-align: right;
  align-self: flex-end;
  height : ${(pageHeight)*0.7368}px;
  `;

  const Main = styled.div`
  border: 1px solid gray;
  flex: 18;
  flex-shrink: 0;
  align-items: flex-start;
  height : ${(pageHeight)*0.7368}px;
  `;
// 공통 CSS 끝

    
    const dispatch = useDispatch();
    const modalNavStep2 = (targetPage) =>{
        props.modalNavStep1(targetPage);
    }
    console.log("pageHeight??", pageHeight)

        return (
            <div className={isModalOn ? 'openModal togglePage2' : 'togglePage2'}>
                {isModalOn ? (
                     <Container>
                    <Header >
                    </Header>
                    <Section>
                    <Nav>
                    {/* ------------- */}
                    </Nav>
                        <Aside>
                        </Aside>
                        <item >
                        <Container >
                    
                    <Row >
                    <Col >
                    <ToggleMenu size="sm" variant="success" children="Mission" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="0" />
                    </Col>
                    </Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Momentum Algorithm" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="1" />
                    </Col></Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Stable Only" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="2" />
                    </Col></Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Request for Service" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="3" />   
                    </Col>
                    </Row>
                    
                </Container>
                        </item>
                        <Aside>
                        <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_OFF"})} />
                        </Aside>
                        <Nav >
                        </Nav>
                    </Section>
                    <Footer>
                    </Footer>
                  </Container> 
                    
                ) : null }
            </div>
        );
    } 
   

export default ToggleModal;