import React, { Component } from "react";

import echarts from "echarts";
import ReactEcharts2 from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../../App.css";
import "../css/Momentum.css";
import { connect } from "react-redux";

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
    console.log("??3",stableData)
    const dates = this.extractDataToList("datetime", stableData);
    const momentum_algo = this.extractDataToList("cum_return_ma", stableData);
    
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
          name: "Stable Only",
          type: "line",
          smooth: true,
          data: momentum_algo,
          symbol: "none",
          color: "#000000"
        },
        // {
        //   name: "BTC_USDT Hodl",
        //   type: "line",
        //   smooth: true,
        //   data: btc_usdt,
        //   symbol: "none",
        //   color: "#b2b2b2"
        // }
      ]
    };
    return (
      
      <div>
        <ReactEcharts2 
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
  stableData : state.stableData
});

export default connect(mapStateToProps)(StableOnlyGraph);