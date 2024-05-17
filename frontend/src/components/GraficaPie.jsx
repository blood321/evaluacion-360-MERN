import React, { useEffect } from "react";
import * as echarts from "echarts";

function GraficaPie() {
  useEffect(() => {
    const chartDom = document.getElementById("main-pie");
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Pepito Perez",
        subtext: "Porcentaje de tiempo dedicado a cada actividad",
        left: "center",
        textStyle: {
          color: "black", // Cambia el color del texto del título aquí
        },
        subtextStyle: {
          color: "black", // Cambia el color del texto de la subetiqueta aquí
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        bottom: 10,
        left: "center",
        textStyle: {
          color: "black", // Cambia el color del texto de la leyenda aquí
        },
        data: ["Si", "No", "Tal Vez", "Poco", "Mucho"],
      },
      series: [
        {
          type: "pie",
          radius: "50%",
          center: ["50%", "50%"],
          selectedMode: "single",
          data: [
            { value: 335, name: "Si" },
            { value: 210, name: "No" },
            { value: 434, name: "Tal Vez" },
            { value: 335, name: "Poco" },
            { value: 200, name: "Mucho" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          // Cambiar los colores a gradientes
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            normal: {
              // Cambiar cada color a gradiente
              color: function (params) {
                // Lista de colores gradientes
                var colorList = [
                  {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#cabffd" }, // Rojo
                      { offset: 1, color: "#6c2bd9" }, // Naranja
                    ],
                  },
                  {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#000000" }, // Negro
                      { offset: 1, color: "#FFFFFF" }, // Blanco
                    ],
                  },
                  {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#faca15" }, // Verde
                      { offset: 1, color: "#8e4b10" }, // Amarillo
                    ],
                  },
                  {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#f8b4b4" }, // Amarillo
                      { offset: 1, color: "#c81e1e" }, // Naranja
                    ],
                  },
                  {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#84e1bc" }, // Naranja
                      { offset: 1, color: "#046c4e" }, // Naranja rojizo
                    ],
                  },
                ];
                return colorList[params.dataIndex];
              },
            },
          },
        },
      ],
    };

    myChart.setOption(option);

    // Cleanup
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div
      id="main-pie"
      style={{ display: "flex", width: "420px", height: "250px" }}
    />
  );
}

export default GraficaPie;
