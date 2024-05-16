import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function GraficaPie() {
  useEffect(() => {
    const chartDom = document.getElementById('main-pie');
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: 'Pepito Perez',
        subtext: 'Porcentaje de tiempo dedicado a cada actividad',
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

    myChart.setOption(option);

    // Cleanup
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main-pie" style={{ display: 'flex', width: '300px', height: '300px' }} />;
}

export default GraficaPie;
