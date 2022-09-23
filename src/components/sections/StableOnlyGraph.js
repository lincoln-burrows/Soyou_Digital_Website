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


class StableOnlyGraph extends Component {
  constructor(props) {
    super(props);
    // this.pageDown = this.pageDown.bind(this);
    console.log("??",this.props)
    this.state = {
      data: {},
      data2: {},
      graph: []
    };
    this.getUsData();
    this.getUsData2();
  }


  getUsData = async () => {
    const api = "http://localhost:8080/graphData2";
    const data = await axios
      .get(api)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    this.setState({ data: data });
    console.log("data?", data)
    return data;
  };

  getUsData2 = async () => {
    const api = "http://localhost:8080/graphData3";
    const data2 = await axios
      .get(api)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    this.setState({ data2: data2 });
    console.log("data2?", data2)
    return data2;
  };

  extractDataToList = (arg, data) => {
    // const data = this.state.data;
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
    const dates = this.extractDataToList("time", this.state.data);
    const bit_price = this.extractDataToList("momentum_algo", this.state.data);
    const bitPlus = this.extractDataToList("btc_usdt", this.state.data2);
    
    const data = {
      tooltip: {
        trigger: "axis",
        axisPointer: {type: "cross"}
        
      },
      toolbox: {
        feature: {
          saveAsImage:{}
        }
      }
      ,
      legend: {
        data: ["Momentum Algorithm", "BTC_USDT Hodl"]
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
          data: bit_price,
          symbol: "none",
          color: "#0000ff"
        },
        {
          name: "BTC_USDT Hodl",
          type: "line",
          smooth: true,
          data: bitPlus,
          symbol: "none",
          color: "#FF4500"
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

export default StableOnlyGraph;