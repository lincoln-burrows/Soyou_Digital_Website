import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../css/ToggleModal.css"
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

    // 모달 외부 클릭시 꺼지게 
    // const el = useRef();
    // const handleCloseModal = (e) => {
    //     if (props.open && (!el.current || !el.current.contains(e.target))) 
    //     props.close();
    // console.log("handle 함수 작동?", el.current)
    // console.log("handle 함수 작동? target?", e)
    // }

    // useEffect(() => {
    //     window.addEventListener('click', handleCloseModal);
    //     console.log("el ref?", el)
    //     console.log("작동확인1");
    //     return () => {
    //         window.removeEventListener('click', handleCloseModal);
    //     };
    // },[]);

        return (
            <div className={isModalOn ? 'openModal togglePage2' : 'togglePage2'}>
                {isModalOn ? (
                    
                <Container >
                    
                    {/* <div ref={el} className="CLASSNAME"> */}
                    <Row >
                    <Col >
                    <ToggleMenu size="sm" variant="success" children="Mission" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="0" />
                    </Col><Col></Col>
                    </Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Momentum Algorithm" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="1" />
                    </Col><Col></Col></Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Stable Only" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="2" />
                    </Col><Col></Col></Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Request for Service" className="toggleMenu" modalNavStep2={modalNavStep2} targetPage="3" />   
                    </Col>
                    <Col className="test22">
                    <img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_OFF"})} />
                    </Col>
                    </Row>
                    {/* </div> */}
                    
                </Container>
                ) : null }
            </div>
        );
    } 
   

export default ToggleModal;
