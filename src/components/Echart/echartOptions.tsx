/*
 * Author: Gavin.wang
 * Date: 2024-11-11 16:05:28
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-08-18 19:36:02
 * FilePath: /isop-hangzhouchuneng-web/src/components/Echart/echartOptions.tsx
 * Description:
 */

import * as echarts from 'echarts';
import pieBg from '@/assets/images/pieBg.png';

const legendUnit = '#97fff9'; // 图例和单位颜色
const textColor = 'rgb(218,248,255)';
const baseColor = 'rgba(136,222,253,1)';
const barGradientStart = '#38b6e9';
const barGradientEnd = '#1d6699';
const barGradientBac = 'rgba(25,83,115,1)';
const crossBgColor = 'rgba(136,222,253,1)';

const tooltipBackgroundColor = 'rgb(25,83,115,0.9)'; // tooltip背景色
const tooltipBorderColor = '#33afff'; // tooltip描边颜色
const tooltipTextColor = 'rgb(218,248,255)'; // tooltip文字颜色
const xyAxisTickColor = '#79dbff'; //x和y轴刻度的颜色
// 定义柱状图配置
export const getBarEchartOption = (echartOption: echarts.EChartsOption = {}): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    title: {
      text: '',
      left: 'center',
      textStyle: {
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      left: '',
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '0%',
      top: '25%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle: {
          normal: {
            barBorderRadius: [20, 20, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: barGradientStart,
              },
              {
                offset: 1,
                color: barGradientEnd,
              },
            ]),
          },
        },
        showBackground: true,
        backgroundStyle: {
          borderRadius: [20, 20, 0, 0],
          show: true,
          color: barGradientBac,
        },
      },
    ],
  };

  _.merge(option, echartOption);
  return option;
};
// 定义饼状图配置
export const getPieEchartOption = (echartOption: echarts.EChartsOption = {}): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    title: {
      text: '',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      show: false,
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 335, name: 'e1' },
          { value: 310, name: 'e2' },
          { value: 234, name: 'e3' },
        ],
        emphasis: {
          itemStyle: {
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 5,
          },
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}: {c} ({d}%)',
        },
        labelLine: {
          show: true,
        },
      },
    ],
  };

  _.merge(option, echartOption);
  return option;
};

// 定义折线图配置
export const getLineEchartOption = (echartOption: echarts.EChartsOption = {}): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    title: {
      text: '',
      left: 'center',
      textStyle: {
        color: textColor,
      },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: tooltipBackgroundColor,
      borderColor: tooltipBorderColor,
      textStyle: {
        color: tooltipTextColor,
      },
      axisPointer: {
        type: 'line',
      },
    },
    legend: {
      top: 0,
      itemWidth: 18,
      itemHeight: 4,
      textStyle: {
        color: textColor,
      },
    },
    grid: {
      left: '4%',
      right: '6%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: baseColor, // X 轴线条颜色
        },
      },
      axisTick: {
        length: 2,
        lineStyle: {
          width: 2,
          color: xyAxisTickColor, // X 轴刻度线颜色
        },
      },
      axisLabel: {
        color: textColor, // X 轴标签颜色
        formatter: (value: string) => {
          return dayjs(value).format('YYYY-MM-DD') + '\n' + dayjs(value).format('HH:mm:ss');
        },
      },
    },
    yAxis: {
      type: 'value',
      name: '单位：%',
      nameTextStyle: {
        color: textColor,
      },
      axisLine: {
        show: true, // 显示轴线
        lineStyle: {
          color: baseColor,
        },
      },
      axisTick: {
        show: true, // 显示轴线
        length: 2,
        lineStyle: {
          width: 2,
          color: xyAxisTickColor,
        },
      },
      axisLabel: {
        color: textColor,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(218, 248, 255,0.5)',
          width: 0.5,
        },
      },
    },
    series: [
      {
        name: '',
        type: 'line',
        smooth: true, // 平滑曲线
        lineStyle: {
          width: 2,
          color: '#abfffe',
        },
        itemStyle: {
          color: '#abfffe',
        },
      },
    ],
  };
  _.merge(option, echartOption);
  return option;
};
// 近七日定义柱状折线图配置
export const getSevenBarLineEchartOption = (echartOption: echarts.EChartsOption = {}): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    title: {
      left: 'center',
      textStyle: {
        fontSize: 14,
        color: textColor,
      },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: tooltipBackgroundColor,
      borderColor: tooltipBorderColor,
      textStyle: {
        color: tooltipTextColor,
      },
      axisPointer: {
        type: 'line',
        crossStyle: {
          color: crossBgColor,
        },
      },
    },
    grid: {
      top: '24%',
      left: '4%',
      right: '0%',
      bottom: '0%',
      containLabel: true,
    },
    legend: {
      top: 0,
      itemWidth: 18,
      itemHeight: 4,
      textStyle: {
        color: textColor,
      },
    },
    xAxis: [
      {
        type: 'category',
        // axisPointer: {
        //   type: 'shadow',
        // },
        axisLine: {
          lineStyle: {
            color: baseColor, // X 轴线条颜色
          },
        },
        axisTick: {
          show: true, // 显示轴线
          length: 2,
          lineStyle: {
            width: 2,
            color: xyAxisTickColor,
          },
        },
        axisLabel: {
          color: textColor, // X 轴标签颜色
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位：kWh',
        nameTextStyle: {
          color: textColor,
        },
        axisLine: {
          show: true, // 显示轴线
          lineStyle: {
            color: baseColor,
          },
        },
        axisTick: {
          show: true, // 显示轴线
          length: 2,
          lineStyle: {
            width: 2,
            color: xyAxisTickColor,
          },
        },
        axisLabel: {
          color: textColor,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: 'bar',
        barMaxWidth: 20,
        itemStyle: {
          normal: {
            // barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: barGradientStart,
              },
              {
                offset: 1,
                color: barGradientEnd,
              },
            ]),
            borderColor: barGradientStart, // 边框颜色
            borderWidth: 1, // 边框宽度
          },
        },
        showBackground: false,
        backgroundStyle: {
          color: 'rgba(200, 200, 200, 0.2)', // 共享背景颜色
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            // barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#fff',
              },
              {
                offset: 1,
                color: '#a4aebf',
              },
            ]),
            borderColor: '#fff', // 边框颜色
            borderWidth: 1, // 边框宽度
          },
        },
        showBackground: false,
        backgroundStyle: {
          borderRadius: [10, 10, 0, 0],
          show: true,
          color: '#2b535d',
        },
      },
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#7dfead', // 折线图的颜色
        },
      },
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#abfffe', // 折线图的颜色
        },
      },
    ],
  };
  _.merge(option, echartOption);
  return option;
};
// 收益-柱状折线图配置
export const getBarLineEchartOption = (echartOption: echarts.EChartsOption = {}): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    title: {
      left: 'center',
      textStyle: {
        fontSize: 14,
        color: textColor,
      },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: tooltipBackgroundColor,
      borderColor: tooltipBorderColor,
      textStyle: {
        color: tooltipTextColor,
      },
      axisPointer: {
        type: 'line',
        crossStyle: {
          color: crossBgColor,
        },
        // shadowStyle: {
        //   color: 'transparent',
        // },
      },
    },
    grid: {
      top: '24%',
      left: '4%',
      right: '0%',
      bottom: '0%',
      containLabel: true,
    },
    legend: {
      top: 0,
      itemWidth: 18,
      itemHeight: 4,
      textStyle: {
        color: textColor,
      },
    },
    xAxis: [
      {
        type: 'category',
        // axisPointer: {
        //   type: 'shadow',
        // },
        axisLine: {
          lineStyle: {
            color: baseColor, // X 轴线条颜色
          },
        },
        axisTick: {
          show: true, // 显示轴线
          length: 2,
          lineStyle: {
            width: 2,
            color: xyAxisTickColor,
          },
        },
        axisLabel: {
          color: textColor, // X 轴标签颜色
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位：kWh',
        nameTextStyle: {
          color: textColor,
        },
        axisLine: {
          show: true, // 显示轴线
          lineStyle: {
            color: baseColor,
          },
        },
        axisTick: {
          show: true, // 显示轴线
          length: 2,
          lineStyle: {
            width: 2,
            color: xyAxisTickColor,
          },
        },
        axisLabel: {
          color: textColor,
        },
        splitLine: {
          show: false,
        },
      },
      {
        type: 'value',
        axisLine: {
          show: true, // 显示轴线
          lineStyle: {
            color: baseColor,
          },
        },
        axisTick: {
          show: true, // 显示轴线
          length: 2,
          lineStyle: {
            width: 2,
            color: xyAxisTickColor,
          },
        },
        axisLabel: {
          color: textColor,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: 'bar',
        barMaxWidth: 20,
        itemStyle: {
          normal: {
            // barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: barGradientStart,
              },
              {
                offset: 1,
                color: barGradientEnd,
              },
            ]),
            borderColor: barGradientStart, // 边框颜色
            borderWidth: 1, // 边框宽度
          },
        },
        showBackground: false,
        backgroundStyle: {
          color: 'rgba(200, 200, 200, 0.2)', // 共享背景颜色
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            // barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#fff',
              },
              {
                offset: 1,
                color: '#a4aebf',
              },
            ]),
            borderColor: '#fff', // 边框颜色
            borderWidth: 1, // 边框宽度
          },
        },
        showBackground: false,
        backgroundStyle: {
          borderRadius: [10, 10, 0, 0],
          show: true,
          color: '#2b535d',
        },
      },
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#7dfead', // 折线图的颜色
        },
      },
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#abfffe', // 折线图的颜色
        },
      },
    ],
  };
  _.merge(option, echartOption);
  return option;
};

// 树图
export const getTreeEchartOption = (
  echartOption: echarts.EChartsOption = {},
  treeData: Object = {},
): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    series: [
      {
        type: 'tree',
        id: 0,
        name: 'tree1',
        data: [treeData],
        top: '10%',
        left: '8%',
        bottom: '22%',
        right: '20%',
        symbolSize: 7,
        edgeShape: 'polyline',
        edgeForkPosition: '63%',
        initialTreeDepth: 3,
        lineStyle: {
          width: 2,
        },
        label: {
          backgroundColor: '#fff',
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
          },
        },
        emphasis: {
          focus: 'descendant',
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  };
  _.merge(option, echartOption);
  return option;
};

// 告警监测饼状图
export const getAlarmPieEchartOption = (
  echartOption: echarts.EChartsOption = {},
  chartData: Object = {},
): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    graphic: {
      elements: [
        {
          type: 'image',
          // z: 3,
          style: {
            image: pieBg,
            repeat: 'no-repeat',
            width: 275,
          },
          left: 'center',
          top: '5%',
        },
      ],
    },
    title: {
      show: false,
    },
    legend: {
      show: true,
      padding: 0,
      top: '0%',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 20,
      textStyle: {
        color: legendUnit,
        fontSize: 14,
      },
    },
    series: [
      {
        radius: ['17%', '57%'],
        center: ['50%', '50%'],
        type: 'pie',
        // top: 45,
        emphasis: {},
        itemStyle: {
          normal: {
            color: function (params: any) {
              const colorList = [
                {
                  c1: 'rgba(6,178,244,0.8)',
                  c2: 'rgba(6,178,244,0.5)',
                },
                {
                  c1: 'rgba(255,255,255,0.8)',
                  c2: 'rgba(255,255,255,0.5)',
                },
                {
                  c1: 'rgba(5,241,239,0.8)',
                  c2: 'rgba(5,241,239,0.5)',
                },
                {
                  c1: 'rgba(75,201,228,0.8)',
                  c2: 'rgba(75,201,228,0.5)',
                },
              ];
              return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: colorList[params.dataIndex].c1,
                },
                {
                  offset: 1,
                  color: colorList[params.dataIndex].c2,
                },
              ]);
            },
            shadowBlur: 5,
            shadowColor: 'rgba(6,178,244,0.5)',
          },
        },
        label: {
          normal: {
            formatter: function (params: any) {
              return '{value|' + params.value + '}\n{label|' + params.name + '}{percent|' + params.percent + '%' + '}';
            },
            padding: [0, -90],
            height: 60,
            rich: {
              label: {
                color: legendUnit,
                fontSize: 14,
                padding: [10, 0],
              },
              value: {
                color: textColor,
                fontSize: 16,
                fontWeight: 'bold',
                textShadowColor: '#fff', // 阴影颜色
                textShadowBlur: 10, // 阴影模糊半径
                textShadowOffsetX: 0, // 阴影水平偏移
                textShadowOffsetY: 0, // 阴影垂直偏移
                padding: [5, 40],
              },
              percent: {
                color: textColor,
                fontSize: 16,
                fontWeight: 'bold',
                textShadowColor: '#fff', // 阴影颜色
                textShadowBlur: 10, // 阴影模糊半径
                textShadowOffsetX: 0, // 阴影水平偏移
                textShadowOffsetY: 0, // 阴影垂直偏移
                padding: [0, 5],
              },
            },
          },
        },
        labelLine: {
          showAbove: true,
          length: 36,
          length2: 120,
          align: 'right',
          // smooth: true,
          maxSurfaceAngle: 0,
          lineStyle: {
            color: legendUnit,
          },
        },
        data: chartData?.data,
      },
    ],
  };

  _.merge(option, echartOption);
  return option;
};

// 散点图
export const getScatterEchartsOption = (echartOption: echarts.EChartsOption = {}): echarts.EChartsOption => {
  const option: echarts.EChartsOption = {
    title: {
      left: 'center',
      textStyle: {
        fontSize: 14,
        color: textColor,
      },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: tooltipBackgroundColor,
      borderColor: tooltipBorderColor,
      textStyle: {
        color: tooltipTextColor,
      },
      axisPointer: {
        type: 'line',
      },
    },
    grid: {
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      nameLocation: 'middle',
      nameTextStyle: {
        color: textColor,
      },
      nameGap: 24,
      axisLine: {
        lineStyle: {
          color: baseColor, // X 轴线条颜色
        },
      },
      axisTick: {
        length: 2,
        lineStyle: {
          width: 2,
          color: xyAxisTickColor, // X 轴刻度线颜色
        },
      },
      axisLabel: {
        color: textColor,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: xyAxisTickColor,
          width: 0.5,
        },
      },
    },
    yAxis: {
      type: 'value',
      nameLocation: 'middle',
      nameTextStyle: {
        color: textColor,
      },
      nameGap: 24,
      axisLine: {
        show: true, // 显示轴线
        lineStyle: {
          color: baseColor,
        },
      },
      axisTick: {
        show: true, // 显示轴线
        length: 2,
        lineStyle: {
          width: 2,
          color: xyAxisTickColor,
        },
      },
      axisLabel: {
        color: textColor,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: xyAxisTickColor,
          width: 0.5,
        },
      },
    },
    series: [
      {
        type: 'scatter',
        symbolSize: 10,
      },
    ],
    legend: {
      top: 24,
      left: 80,
      itemWidth: 8,
      itemHeight: 8,
      // orient: 'vertical',
      textStyle: {
        color: textColor,
      },
    },
  };

  // 合并用户自定义配置
  return _.merge(option, echartOption);
};
