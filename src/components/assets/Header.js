// // Header Component

// import { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import hamburger from '../assets/hamburger.png';
// import { useDispatch } from "react-redux";

// const HeaderArea = styled.div`
//     position: relative;
//     width: 100%;
//     height: 80px;
// `;

// const HeaderWrap = styled.div`
//     position: fixed;
//     bottom: 30px;
//     right: 30px;
//     z-index: 1;
//     transition: 0.2s ease;
//     &.hide {
//         transform: translateY(200px);
//     }
// `;

// const throttle = function (callback, waitTime) {
//     let timerId = null;
//     // top: 77.8%;
//     // left: 86.1%;
//     return (e) => {
//         if (timerId) return;
//         timerId = setTimeout(() => {
//             callback.call(this, e);
//             timerId = null;
//         }, waitTime);
//     };
// };

// const Header = () => {
//     const [hide, setHide] = useState(false);
//     const [pageY, setPageY] = useState(0);
//     const documentRef = useRef(document);
//     const dispatch = useDispatch();

//     const handleScroll = () => {
//         const { pageYOffset } = window;
//         const deltaY = pageYOffset - pageY;
//         const hide = pageYOffset !== 0 && deltaY >= 0;
//         setHide(hide);
//         setPageY(pageYOffset);
//     };

//     const throttleScroll = throttle(handleScroll, 50);

//     useEffect(() => {
//         documentRef.current.addEventListener('scroll', throttleScroll);
//         return () => documentRef.current.removeEventListener('scroll', throttleScroll);
//     }, [pageY]);

//     return (
        
//             <HeaderWrap className={hide && 'hide'}><img width="70" height="70" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/></HeaderWrap>
        
//     );
// };

// export default Header;