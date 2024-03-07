import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function GraficaPie() {
  useEffect(() => {
    var ROOT_PATH = 'https://echarts.apache.org/examples';

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    const weatherIcons = {
    };
    option = {
      title: {
        text: 'Pepito Perez',
        subtext: 'Porcentaje  de tiempo dedicado a cada actividad',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 10,
        left: 'center',
        data: ['Si', 'No', 'Tal Vez', 'Poco', 'Mucho']
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            {
              
               
                backgroundColor: '#eee',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  title: {
                    color: '#eee',
                    align: 'center'
                  },
                  abg: {
                    backgroundColor: '#333',
                    width: '100%',
                    align: 'right',
                    height: 25,
                    borderRadius: [4, 4, 0, 0]
                  },
                  Sunny: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Sunny
                    }
                  },
                  Cloudy: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Cloudy
                    }
                  },
                  Showers: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Showers
                    }
                  },
                  weatherHead: {
                    color: '#333',
                    height: 24,
                    align: 'left'
                  },
                  hr: {
                    borderColor: '#777',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  value: {
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: 'left'
                  },
                  valueHead: {
                    color: '#333',
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: 'center'
                  },
                  rate: {
                    width: 40,
                    align: 'right',
                    padding: [0, 10, 0, 0]
                  },
                  rateHead: {
                    color: '#333',
                    width: 40,
                    align: 'center',
                    padding: [0, 10, 0, 0]
                  }
                }
              },
            
            { value: 335, name: 'Si' },
            { value: 210, name: 'No' },
            { value: 434, name: 'Tal Vez' },
            { value: 335, name: 'Poco' },
            { value: 200, name: 'Mucho' }

          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }, []); 

  return <div id="main" style={{  width: '600px', height: '400px'}} />;
}

export default GraficaPie;
