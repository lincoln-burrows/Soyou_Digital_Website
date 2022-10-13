import React, { Component } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../../App.css";
import "../css/Momentum.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import App from "../../App";
import { connect } from "react-redux";
import moment from "moment";
import Moment from "react-moment";

class StableOnlyGraph extends Component {
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
      if (arg === "datetime") {
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
    const { stableData } = this.props.stableData;
    console.log("??2",stableData)
    const dates = this.extractDataToList("datetime", stableData);
    const stableOnly = this.extractDataToList("cum_return_ma", stableData);
    
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
        data: ["Stable Only"],
        textStyle: {
          fontSize: 16
        },
        itemStyle: {
          borderType:"solid",
          
        }
      },
      grid: {
        left: "1%",
        right: "4%",
        bottom: "3%",
        top: "10%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        // type: "time",
        data: dates,
        show: true,
        axisLabel: {
          // formatter: axisValue => {
          //   return moment(axisValue).format("YYYY-MM-DD 00:00");
          // },
          color: "gray",
          // fontWeight: "bold",
          fontSize:16,
          rotate: 0,
          interval: 60
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "gray",
          inside: false,
          fontSize:16,
          formatter: value => value*100 + ' %'

        },
      },
      series: [
        {
          name: "Stable Only",
          type: "line",
          lineStyle:{
            normal: {width: 4},
          },
          smooth: true,
          data: stableOnly,
          symbol: "none",
          color: "#000000",
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
            height: "300%",
            // height: "369px",
            // 369
            // width: "100%"
            width: "95%"
            
          }}
          option={data}
          />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  stableData : state.stableData
});

export default connect(mapStateToProps)(StableOnlyGraph);