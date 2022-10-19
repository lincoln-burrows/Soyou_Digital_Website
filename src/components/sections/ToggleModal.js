import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../css/ToggleModal.css"
import "../../App.css"
import ToggleMenu from '../assets/ToggleMenu';
import hamburger from '../assets/hamburger.png';
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

const ToggleModal = (props) => {

    const { isModalOn, isOpen } = useSelector((state) => state.legacy);
    const dispatch = useDispatch();
    const wrapperRef = useRef();
    const modalNavigate = (funcName) =>{
        if (funcName=="moveToMain") {
            props.moveToMain();
        } else if (funcName == "moveToMomentum"){
            props.moveToMomentum();
        } else if (funcName == "moveToStable") {
            props.moveToStable();
        } else {
            props.moveToContact();
        }
    }
    
    // 모달창 종료 애니메이션
    useEffect(() => {
        let timer;
        if (isModalOn) {
            dispatch({type:"SET_ISOPEN_TRUE"});
        } else {
          timer = setTimeout(() => dispatch({type:"SET_ISOPEN_FALSE"}), 500);
        }
    
        return () => {
          clearTimeout(timer);
        };
      }, [isModalOn]);

      // 모달창 외부 클릭시 종료
      useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside);
        console.log("클릭감지");
        return()=>{
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
      })

      const handleClickOutside=(event)=>{
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
          dispatch({type:"SET_MODAL_OFF"})
        }
        else {
            dispatch({type:"SET_MODAL_ON"})
        }
      }

        return (
            <div className={isOpen ? '' : 'hideComponents'}>
            <div className={isModalOn ? 'openModal togglePage2' : 'openModal closing togglePage2'}>
                     <div className="containerHG2">
                    <header >
                    </header>
                    <section className="content">
                    <nav >
                    </nav>
                        <aside>
                        </aside>
                        <item >
                            <div ref={wrapperRef}>
                        {/* <Container fluid="sm">
                    
                    <Row >
                    <Col >
                    <ToggleMenu size="sm" variant="success" children="Mission" className="toggleMenu" modalNavigate={modalNavigate} funcName="moveToMain" />
                    </Col>
                    </Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Momentum Algorithm" className="toggleMenu"  modalNavigate={modalNavigate} funcName="moveToMomentum" />
                    </Col></Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Stable Only" className="toggleMenu" modalNavigate={modalNavigate} funcName="moveToStable" />
                    </Col></Row>
                    <Row><Col >
                    <ToggleMenu size="sm" variant="success" children="Request for Service" className="toggleMenu"  modalNavigate={modalNavigate} funcName="moveToContact" />   
                    </Col>
                    </Row>
                    
                </Container> */}
                <table align='right'>
                    <tr><td><ToggleMenu size="sm" variant="success" children="Mission" className="toggleMenu" modalNavigate={modalNavigate} funcName="moveToMain" /></td></tr>
                    <tr><td><ToggleMenu size="sm" variant="success" children="Momentum Algorithm" className="toggleMenu"  modalNavigate={modalNavigate} funcName="moveToMomentum" /></td></tr>
                    <tr><td><ToggleMenu size="sm" variant="success" children="Stable Only" className="toggleMenu" modalNavigate={modalNavigate} funcName="moveToStable" /></td></tr>
                    <tr><td><ToggleMenu size="sm" variant="success" children="Request for Service" className="toggleMenu"  modalNavigate={modalNavigate} funcName="moveToContact" />   </td></tr>
                </table>
                </div>
                        </item>
                        <aside>
                        <img width="80" height="80" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_OFF"})} />
                        </aside>
                        <nav >
                        </nav>
                    </section>
                    <footer>
                    </footer>
                  </div> 
            </div>
            </div>
        );
    } 
   

export default ToggleModal;