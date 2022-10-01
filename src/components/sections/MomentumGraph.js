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
import Momentum from "./Momentum";
import { connect } from "react-redux";

class MomentumGraph extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // data2: {},
    };
  }

  extractDataToList = (arg, data) => {
    const res = [];
    for (let i in data) {
      let item = data[i][arg];
      if (arg === "time") {
        let i =
          "'" + item.toString().slice(2, 10);
        res.push(i);
      } else {
        res.push(parseFloat(data[i][arg]));
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
    const dates = this.extractDataToList("time", momentumData);
    const momentum_algo = this.extractDataToList("cum_return_ma", momentumData);
    const btc_usdt = this.extractDataToList("cum_return_btc", momentumData);
    
    const data = {
      tooltip: {
        trigger: "axis",
        axisPointer: {type: "cross"},
      },
      toolbox: {
        feature: {
          saveAsImage:{}
        }
      }
      ,
      legend: {
        data: ["Momentum Algorithm", "BTC_USDT Hodl"],
        itemStyle: {
          borderType:"solid"
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: dates,
        show: true,
        // axisPointer: {
        //     show:true,
        //     label:{
        //       show:false
        //     }
        // },
        axisLabel: {
          color: "gray",
          fontWeight: "bold",
          rotate: 0,
          interval: 60
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "gray",
          inside: false
        },
      },
      series: [
        {
          name: "Momentum Algorithm",
          type: "line",
          smooth: true,
          data: momentum_algo,
          symbol: "none",
          color: "#000000"
        },
        {
          name: "BTC_USDT Hodl",
          type: "line",
          smooth: true,
          data: btc_usdt,
          symbol: "none",
          color: "#b2b2b2"
        }
      ]
    };
    return (
      
      <div>
        <ReactEcharts 
          style={{
            height: "400%",
            width: "100%"
            
          }}
          option={data}
          className="test"/>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  momentumData : state.momentumData
});

export default connect(mapStateToProps)(MomentumGraph);