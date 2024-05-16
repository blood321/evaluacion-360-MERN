// GraficaColumn.js
import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function GraficaColumn() {
  useEffect(() => {
    const chartDom = document.getElementById('main-column');
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['malo', 'regular', 'bueno', 'promedio', 'exelente'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '50%',
          data: [10, 52, 200, 334, 390]
        }
      ]
    };

    myChart.setOption(option);

    // Cleanup
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main-column" style={{ display: 'flex', width: '420px', height: '250px' }} />;
}

export default GraficaColumn;
