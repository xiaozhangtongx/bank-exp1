<!--
 * @Description: 入门测试
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-20 20:53:27
-->
<template>
  <div class="Echarts">
    <div id="main" style="width:30vw;height:40vh;"></div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'Echarts',
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))
      window.onresize = function () {
        myChart.resize()
      }
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '上周银行存款额度',
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '6%',
          top: '12%',
          containLabel: true,
        },
        tooltip: {},
        legend: {
          data: ['存款额度'],
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        yAxis: {
          axisLabel: {
            formatter: '{value} 千元',
          },
        },
        series: [
          {
            name: '存款额度',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 25],
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
