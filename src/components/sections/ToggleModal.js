import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../css/ToggleModal.css"
import "../../App.css"
import ToggleMenu from '../assets/ToggleMenu';
import hamburger from '../assets/hamburger.png';
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

const ToggleModal = (props) => {

    const { isModalOn } = useSelector((state) => state.legacy);
    const dispatch = useDispatch();
    const modalNavStep2 = (targetPage) =>{
        props.modalNavStep1(targetPage);
    }

        return (
            <div className={isModalOn ? 'openModal togglePage2' : 'togglePage2'}>
                {isModalOn ? (
                     <div className="containerHG2">
                    <header >
                    </header>
                    <section className="content">
                    <nav className='test'>
                    {/* ------------- */}
                    </nav>
                        <aside>
                        </aside>
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
                        <aside>
                        <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_OFF"})} />
                        </aside>
                        <nav >
                        </nav>
                    </section>
                    <footer>
                    </footer>
                  </div> 
                    
                ) : null }
            </div>
        );
    } 
   

export default ToggleModal;