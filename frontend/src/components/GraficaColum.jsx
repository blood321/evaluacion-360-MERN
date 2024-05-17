import React, { useEffect } from "react";
import * as echarts from "echarts";

function GraficaColumn() {
  useEffect(() => {
    const chartDom = document.getElementById("main-column");
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "3%",
        bottom: "2%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["malo", "regular", "bueno", "promedio", "exelente"],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            color: "black",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: "black",
          },
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "50%",
          data: [10, 52, 200, 334, 390],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#84e1bc", // color inicio
                },
                {
                  offset: 1,
                  color: "#057a55", // color fin
                },
              ],
              global: false,
            },
          },
        },
      ],
    };
    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div
      id="main-column"
      style={{ display: "flex", width: "420px", height: "250px" }}
    />
  );
}

export default GraficaColumn;
