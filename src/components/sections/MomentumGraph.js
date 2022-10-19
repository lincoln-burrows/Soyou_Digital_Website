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
import { connect } from "react-redux";

class MomentumGraph extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // data2: {},
    };
  }

  // extractDataToList = (arg, data) => {
  //   const res = [];
  //   for (let i in data) {
  //     let item = data[i][arg];
  //     if (arg === "time") {
  //       let i =
  //         "'" + item.toString().slice(2, 10);
  //       res.push(i);
  //     } else {
  //       res.push(parseFloat(data[i][arg]));
  //     }
  //   }
  //   return res;
  // };
  
  extractDataToList = (arg, data) => {
    const res = [];
    for (let i in data) {
      let time = data[i].time.toString().replace(/-/g,'');
      if (arg==="cum_return_ma") {
      let value = data[i].cum_return_ma;
        res.push([new Date(time.slice(0,4), time.slice(4,6)-1, time.slice(6,8)), value]);
      } else if (arg==="cum_return_btc"){
        let value = data[i].cum_return_btc;
        res.push([new Date(time.slice(0,4), time.slice(4,6)-1, time.slice(6,8)), value]);
      }
      }
    return res;
  };

  

  componentDidMount = () => {
    document.title = "SOYOU CRYPTO";
    
  };

  render() {
    const { momentumData } = this.props.momentumData;
    console.log("??2",momentumData)
    const momentum_algo = this.extractDataToList("cum_return_ma", momentumData);
    const btc_usdt = this.extractDataToList("cum_return_btc", momentumData);
    const data = {
      tooltip: {
        trigger: "axis",
        axisPointer: {type: "cross"},
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage:{},
      //   }
      // }
      
      legend: {
        data: ["Momentum Algorithm", "BTC_USDT Hodl"],
        padding:[1, 0, 10, 0,],
        textStyle: {
          fontSize: 14
        },
        itemStyle: {
          borderType:"solid",
        }
      },
      grid: {
        left: "1%",
        right: "4%",
        bottom: "3%",
        top: "15%",
        containLabel: true
      },
      notMerge:false
      ,
      xAxis: {
        type: "time",
        show: true,
        split:8,
        axisLine:false,
        // axisPointer: {
        //     show:true,
        //     label:{
        //       show:false
        //     }
        // },
        axisLabel: {
          color: "gray",
          // fontWeight: "bold",
          fontSize:16,
          rotate: 0,
          interval: 200,
          // formatter: value => "'"+value
        }
      },
      yAxis: {
        type: "value",
        // max:2, 
        // min: -1,
        // splitNumber:5,
        axisLabel: {
          color: "gray",
          inside: false,
          fontSize:16,
          formatter: value => value*100 + ' %'
        },
      },
      series: [
        {
          name: "Momentum Algorithm",
          type: "line",
          smooth: true,
          data: momentum_algo,
          symbol: "none",
          color: "#000000",
          lineStyle:{
            normal: {width: 4},
          },
          tooltip: {
            valueFormatter: value => Math.round(value*10000)/100 +' %'
          },
        },
        {
          name: "BTC_USDT Hodl",
          type: "line",
          smooth: true,
          data: btc_usdt,
          symbol: "none",
          color: "#b2b2b2",
          lineStyle:{
            normal: {width: 3},
          },
          tooltip: {
            valueFormatter: value => Math.round(value*10000)/100 +' %'
          },
        },
        
      ]
    };
    return (
      
      <div>
        <ReactEcharts 
          style={{
            height: "300px",
            // height: "369px",
            // 369
            width: "98%"
            // width: "900px"
            
          }}
          option={data}
          />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  momentumData : state.momentumData
});

export default connect(mapStateToProps)(MomentumGraph);