import React, { Component, useEffect } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../css/Momentum.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import App from "../../App";
import MomentumGraph from "./MomentumGraph";
import hamburger from '../assets/hamburger.png';
import { useState } from 'react'
import ToggleModal from './ToggleModal';
import { useDispatch, useSelector } from "react-redux";
import ToggleMenu from "../assets/ToggleMenu";
import InfoRFSButton from "../assets/InfoRFSButton";
import { momentumAction } from "../../redux/actions/momentumAction";

const Momentum = (props) => {

  const dispatch = useDispatch();
  const { momentumLowerButton, momentumUpperButton, momentumAnimationConst } = useSelector((state) => state.legacy);
  const { momentumData, momentumIndex } = useSelector((state) => state.momentumData);
  const [scrollIndex2, setScrollIndex2] = useState(0);
  
  function tempFunc() {
    setScrollIndex2(scrollIndex2+1);
    console.log("scollindex값은?",scrollIndex2)
  }
  
  

  const modalNavStep1 = (targetPage) =>{
        props.toggleNav(targetPage);
    }

    useEffect(() => {
      dispatch(momentumAction.getMomentumGraph("MOMENTUMALL"));
    }, []);

    // useEffect(() => {
      
    // }, scrollIndex2);

    // if(props.scrollIndex == "2" && momentumAnimationConst == 1){
    //   dispatch({type:"MOMENTUMANICONSTINACTIVE"}); 
    // console.log("inactive로 변경")
    // if(props.scrollIndex == "2" ){
      //  console.log("inactive로 변경")
  return (
    <div className="containerHG">
      <header >
      
      </header>
      <section className="content">
          <nav>
            
          </nav>
          <aside>
          </aside>
          <main>
            <div className="momentumTitle"> Momentum Algorithm</div>
            <div className="upperButtons">
        <Button size="left" variant={"default" + (momentumUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="MOMENTUM_PROFIT" />
       <Button size="right" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="MOMENTUM_INFO" />
       </div>
       <span className={momentumUpperButton == "2" ? 'hide below' : 'below'}>
       <div className="lowerButtons">
       <Button3 size="left" variant={"default" + (momentumLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="MOMENTUMALL" momentumLowerButton={scrollIndex2} /> 
       <Button3 size="middle" variant={"default" + (momentumLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="MOMENTUM1Y" momentumLowerButton={scrollIndex2} /> 
       <Button3 size="middle" variant={"default" + (momentumLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="MOMENTUM6M" momentumLowerButton={scrollIndex2} /> 
       <Button3 size="right" variant={"default" + (momentumLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="MOMENTUM3M" momentumLowerButton={scrollIndex2} /> 
       </div>
       {/* 버튼 클릭에 따라 네개 바꿔치기1 */}
       </span>
       <span className={momentumUpperButton == "1" && momentumLowerButton == "1" ? 'below' : 'hide below'}>
       
        <div className="graphAnimation1">
        <MomentumGraph />
        
        <div className="indexContainer">
        <div className="index">Cum. Return</div>
        <div className="index">Daily Avg.</div>
        <div className="index">Daily Sharp</div>
        <div className="index">MDD</div>
        </div>
        <div className="indexValueContainer">
        <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
        <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
        </div>
        </div>
        </span>

        {/* 버튼 클릭에 따라 네개 바꿔치기2 */}
       <span className={momentumUpperButton == "1" && momentumLowerButton == "2" ? 'below' : 'hide below'}>
        <div className="graphAnimation1">
        <MomentumGraph />
        
        <div className="indexContainer">
        <div className="index">Cum. Return</div>
        <div className="index">Daily Avg.</div>
        <div className="index">Daily Sharp</div>
        <div className="index">MDD</div>
        </div>
        <div className="indexValueContainer">
        <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
        <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
        </div>
        </div>
        </span>

        {/* 버튼 클릭에 따라 네개 바꿔치기3 */}
       <span className={momentumUpperButton == "1" && momentumLowerButton == "3" ? 'below' : 'hide below'}>
        <div className="graphAnimation1">
        <MomentumGraph />
        
        <div className="indexContainer">
        <div className="index">Cum. Return</div>
        <div className="index">Daily Avg.</div>
        <div className="index">Daily Sharp</div>
        <div className="index">MDD</div>
        </div>
        <div className="indexValueContainer">
        <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
        <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
        </div>
        </div>
        </span>

        {/* 버튼 클릭에 따라 네개 바꿔치기4 */}
       <span className={momentumUpperButton == "1" && momentumLowerButton == "4" ? 'below' : 'hide below'}>
        <div className="graphAnimation1">
        <MomentumGraph />
        
        <div className="indexContainer">
        <div className="index">Cum. Return</div>
        <div className="index">Daily Avg.</div>
        <div className="index">Daily Sharp</div>
        <div className="index">MDD</div>
        </div>
        <div className="indexValueContainer">
        <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
        <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
        </div>
        </div>
        </span>
        
        <div className={momentumUpperButton == "1" ? 'hide below' : 'below'}>

              <br></br><br></br><br></br><br></br>
              <div className="infoText">
              <li >To be updated</li>
              
              <li >To be updated</li>
              
              <li >To be updated</li>          
              </div>
              <br></br><br></br><br></br><br></br>
              <InfoRFSButton size="sm" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu" modalNavStep1={modalNavStep1} targetPage="3" />   
              </div>
        
          </main>
          <aside>
          {/* <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/> */}
          <ToggleModal modalNavStep1={modalNavStep1}/>
          </aside>
          <nav>
            
          </nav>
      </section>
      <footer>
      
      </footer>
    </div>
    
  )
}
    //  else {
    //   // dispatch({type:"MOMENTUMANICONSTACTIVE"});
    //   // console.log("active로 변경"); 
    //   return (
    //     <div className="containerHG">
    //       <header >
    //       <img width="45.5" height="35.5" className="upwardArrow" src={upwardArrow} onClick={()=>{props.pageUp(1);}}></img>
    //       </header>
    //       <section className="content">
    //           <nav>
                
    //           </nav>
    //           <aside>
    //           </aside>
    //           <main>
    //             <div className="momentumTitle"> Momentum Algorithm</div>
    //         <Button size="left" variant={"default" + (momentumUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="MOMENTUM_PROFIT" />
    //        <Button size="right" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="MOMENTUM_INFO" />
    //        <span className={momentumUpperButton == "2" ? 'hide info' : 'info'}>
    //        <Button3 size="left" variant={"default" + (momentumLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="MOMENTUMALL"/> 
    //        <Button3 size="middle" variant={"default" + (momentumLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="MOMENTUM1Y"/> 
    //        <Button3 size="middle" variant={"default" + (momentumLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="MOMENTUM6M"/> 
    //        <Button3 size="right" variant={"default" + (momentumLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="MOMENTUM3M"/> 
    //        <div className="graphAnimation2">
    //         <MomentumGraph />
            
    //         <div className="indexContainer">
    //         <div className="index">Cum. Return</div>
    //         <div className="index">Daily Avg.</div>
    //         <div className="index">Daily Sharp</div>
    //         <div className="index">MDD</div>
    //         </div>
    //         <div className="indexValueContainer">
    //         <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
    //         <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
    //         <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
    //         <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
    //         </div>
    //         </div>
    //         </span>  
    //           </main>
    //           <aside>
    //           <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
    //           <ToggleModal modalNavStep1={modalNavStep1}/>
    //           </aside>
    //           <nav>
                
    //           </nav>
    //       </section>
    //       <footer>
    //       <img className="downwardArrow" width="45.5" height="35.5" src={downwardArrow} onClick={()=>{props.pageDown(2);}}></img>
    //       </footer>
    //     </div>
        
    //   )}

      // else if (momentumLowerButton == "3" ) {
    //     return (
    //       <div className="containerHG">
    //         <header >
    //         <img width="45.5" height="35.5" className="upwardArrow" src={upwardArrow} onClick={()=>{props.pageUp(1);}}></img>
    //         </header>
    //         <section className="content">
    //             <nav>
                  
    //             </nav>
    //             <aside>
    //             </aside>
    //             <main>
    //               <div className="text1"> Momentum Algorithm</div>
    //           <Button size="left" variant={"default" + (momentumUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="MOMENTUM_PROFIT" />
    //          <Button size="right" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="MOMENTUM_INFO" />
    //          <span className={momentumUpperButton == "2" ? 'hide info' : 'info'}>
    //          <Button3 size="left" variant={"default" + (momentumLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="MOMENTUMALL"/> 
    //          <Button3 size="middle" variant={"default" + (momentumLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="MOMENTUM1Y"/> 
    //          <Button3 size="middle" variant={"default" + (momentumLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="MOMENTUM6M"/> 
    //          <Button3 size="right" variant={"default" + (momentumLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="MOMENTUM3M"/> 
    //          <div className="graphAnimation3">
    //         <MomentumGraph />
            
    //           <div className="indexContainer">
    //           <div className="index">Cum. Return</div>
    //           <div className="index">Daily Avg.</div>
    //           <div className="index">Daily Sharp</div>
    //           <div className="index">MDD</div>
    //           </div>
    //           <div className="indexValueContainer">
    //           <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
    //           <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
    //           <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
    //           <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
    //           </div>
    //           </div>
    //           </span>
              
    //           <div className={momentumUpperButton == "1" ? 'hide info' : 'info'}>
      
    //                 <br></br><br></br><br></br><br></br>
    //                 <div className="infoText">
    //                 <li >To be updated</li>
                    
    //                 <li >To be updated</li>
                    
    //                 <li >To be updated</li>          
    //                 </div>
    //                 <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    //                 <InfoRFSButton size="sm" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu" modalNavStep1={modalNavStep1} targetPage="3" />   
    //                 </div>
              
    //             </main>
    //             <aside>
    //             <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
    //             <ToggleModal modalNavStep1={modalNavStep1}/>
    //             </aside>
    //             <nav>
                  
    //             </nav>
    //         </section>
    //         <footer>
    //         <img className="downwardArrow" width="45.5" height="35.5" src={downwardArrow} onClick={()=>{props.pageDown(2);}}></img>
    //         </footer>
    //       </div>
          
    //     )
    //   } else if (momentumLowerButton == "4" ) {
    //     return (
    //       <div className="containerHG">
    //         <header >
    //         <img width="45.5" height="35.5" className="upwardArrow" src={upwardArrow} onClick={()=>{props.pageUp(1);}}></img>
    //         </header>
    //         <section className="content">
    //             <nav>
                  
    //             </nav>
    //             <aside>
    //             </aside>
    //             <main>
    //               <div className="text1"> Momentum Algorithm</div>
    //           <Button size="left" variant={"default" + (momentumUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="MOMENTUM_PROFIT" />
    //          <Button size="right" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="MOMENTUM_INFO" />
    //          <span className={momentumUpperButton == "2" ? 'hide info' : 'info'}>
    //          <Button3 size="left" variant={"default" + (momentumLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="MOMENTUMALL"/> 
    //          <Button3 size="middle" variant={"default" + (momentumLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="MOMENTUM1Y"/> 
    //          <Button3 size="middle" variant={"default" + (momentumLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="MOMENTUM6M"/> 
    //          <Button3 size="right" variant={"default" + (momentumLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="MOMENTUM3M"/> 
    //          <div className="graphAnimation4">
    //         <MomentumGraph />
    //           <div className="indexContainer">
    //           <div className="index">Cum. Return</div>
    //           <div className="index">Daily Avg.</div>
    //           <div className="index">Daily Sharp</div>
    //           <div className="index">MDD</div>
    //           </div>
    //           <div className="indexValueContainer">
    //           <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
    //           <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
    //           <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
    //           <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
    //           </div>
    //           </div>
    //           </span>
              
    //           <div className={momentumUpperButton == "1" ? 'hide info' : 'info'}>
      
    //                 <br></br><br></br><br></br><br></br>
    //                 <div className="infoText">
    //                 <li >To be updated</li>
                    
    //                 <li >To be updated</li>
                    
    //                 <li >To be updated</li>          
    //                 </div>
    //                 <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    //                 <InfoRFSButton size="sm" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu" modalNavStep1={modalNavStep1} targetPage="3" />   
    //                 </div>
              
    //             </main>
    //             <aside>
    //             <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
    //             <ToggleModal modalNavStep1={modalNavStep1}/>
    //             </aside>
    //             <nav>
                  
    //             </nav>
    //         </section>
    //         <footer>
    //         <img className="downwardArrow" width="45.5" height="35.5" src={downwardArrow} onClick={()=>{props.pageDown(2);}}></img>
    //         </footer>
    //       </div>
          
    //     )
    //   }
    // }


export default Momentum
