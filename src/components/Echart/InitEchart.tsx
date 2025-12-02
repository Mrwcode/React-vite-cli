/*
 * @Author: Gavin.wang
 * @Date: 2024-11-07 18:34:53
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-03-25 10:20:39
 * @Description:
 */
import React from 'react';
import * as echarts from 'echarts';

interface BaseEchartProps {
  echartOption: echarts.EChartsOption;
  onClickFunction?: (params: any) => void;
  style?: React.CSSProperties;
}

const BaseEchart: React.FC<BaseEchartProps> = (props) => {
  const { style, echartOption, onClickFunction } = props;
  const chartInstanceRef = useRef();
  // 图表组件元素引用
  const chartElementRef = useRef(document.body);

  useEffect(() => {
    const chartInstance = echarts.init(chartElementRef.current);

    chartInstanceRef.current = chartInstance;
    chartInstance.setOption(echartOption, true);
    chartInstance.off('click');

    const observer = new ResizeObserver(() => {
      chartInstance.resize();
    });
    observer.observe(chartElementRef.current);

    chartInstance.on('click', (params) => {
      if (onClickFunction) onClickFunction(params);
    });

    return () => {
      observer.disconnect();
      chartInstance.clear();
    };
  }, [echartOption]);

  useEffect(() => {
    chartInstanceRef.current.setOption(echartOption, false);
  }, []);

  return <div ref={chartElementRef} style={{ width: '100%', height: '100%', ...style }} />;
};
export default BaseEchart;
