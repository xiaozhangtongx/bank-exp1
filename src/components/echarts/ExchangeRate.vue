<!--
 * @Description: 汇率的变换
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-20 23:17:30
-->

<template>
  <div class="Echarts">
    <div id="main1" style="width:30vw;height:40vh;"></div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/lines')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'Echarts',
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main1'))
      window.onresize = function () {
        myChart.resize()
      }
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '最近七月银行利率变化',
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '6%',
          top: '12%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
        },
        // legend: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2019.08', '2019.09', '2019.10', '2019.11', '2019.12', '2020.01', '2020.02'],
        },
        yAxis: {
          min: 1.9,
          max: 3.4,
          type: 'value',
          axisLabel: {
            formatter: '{value} %',
          },
        },
        series: [
          {
            name: '1年',
            type: 'line',
            data: [2.009, 2.002, 1.986, 1.989, 1.998, 1.983, 1.981],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
          {
            name: '2年',
            type: 'line',
            data: [2.653, 2.642, 2.61, 2.611, 2.64, 2.601, 2.6],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
          {
            name: '3年',
            type: 'line',
            data: [3.356, 3.335, 3.266, 3.266, 3.329, 3.262, 3.248],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
          {
            name: '5年',
            type: 'line',
            data: [3.29, 3.275, 3.224, 3.218, 3.288, 3.165, 3.121],

            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
        ],
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
  },
  mounted() {
    this.myEcharts()
  },
}
</script>

<style lang="less" scoped>
</style>
