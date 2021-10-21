<!--
 * @Description: 系统首页
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-05 21:26:06
-->
<template>
  <div class="home">
    <section class="card">
      <a-card size="small" title="外汇牌价" style="width: 260px;font-size:18px" hoverable>
        <a slot="extra" href="https://www.boc.cn/sourcedb/whpj/" target="_blank">了解更多</a>
        <section class="info">
          <img src="../../../assets/images/icon_home/huishuai.png" alt="" srcset="">
          <article>
            <p><a href="http://forex1.ccb.com/cn/forex/indexv3.html" target="_blank"
                rel="noopener noreferrer">外汇首页</a></p>
            <p><a href="http://forex1.ccb.com/cn/forex/exchange-quotations.html" target="_blank"
                rel="noopener noreferrer">外汇行情</a></p>
            <p><a href="http://forex1.ccb.com/cn/forex/forex-school.html" target="_blank"
                rel="noopener noreferrer">外汇学堂</a></p>
          </article>
        </section>
      </a-card>
      <a-card size="small" title="信用卡办理" style="width: 260px" hoverable>
        <a slot="extra" href="http://creditcard1.ccb.com/cn/creditcard/index.html"
          target="_blank">了解更多</a>
        <section class="info">
          <img src="../../../assets/images/icon_home/xinyongka.png" alt="" srcset="">
          <article>
            <p><a href="http://creditcard1.ccb.com/cn/creditcard/index.html" target="_blank"
                rel="noopener noreferrer">信用卡首页</a></p>
            <p><a href="http://creditcard1.ccb.com/cn/creditcard/card_list.html" target="_blank"
                rel="noopener noreferrer">信用卡产品</a></p>
            <p><a href="http://creditcard1.ccb.com/cn/creditcard/serveiceDirect.html"
                target="_blank" rel="noopener noreferrer">服务指南</a></p>
          </article>
        </section>
      </a-card>
      <a-card size="small" title="投资理财" style="width: 260px" hoverable>
        <a slot="extra" href="http://finance1.ccb.com/cn/finance/product.html"
          target="_blank">了解更多</a>
        <section class="info">
          <img src="../../../assets/images/icon_home/licai2.png" alt="" srcset="">
          <article>
            <p><a href="http://finance1.ccb.com/cn/finance/index.html" target="_blank"
                rel="noopener noreferrer">理财首页</a></p>
            <p><a href="http://finance1.ccb.com/cn/finance/product.html" target="_blank"
                rel="noopener noreferrer">理财产品</a></p>
            <p><a href="http://finance1.ccb.com/cn/finance/service/handbook.html" target="_blank"
                rel="noopener noreferrer">服务指南</a></p>
          </article>
        </section>
      </a-card>
      <a-card size="small" title="个人贷款" style="width: 260px" hoverable>
        <a slot="extra" href="http://www1.ccb.com/cn/personal/credit/zfyw.html"
          target="_blank">了解更多</a>
        <section class="info">
          <img src="../../../assets/images/icon_home/yinhangdaikuan.png" alt="" srcset="">
          <article>
            <p><a href="http://www1.ccb.com/cn/personal/credit/zfyw.html" target="_blank"
                rel="noopener noreferrer">住房贷款</a></p>
            <p><a href="http://www1.ccb.com/cn/personal/credit/xfyw.html" target="_blank"
                rel="noopener noreferrer">消费贷款</a></p>
            <p><a href="http://www1.ccb.com/cn/personal/credit/jyyw.html" target="_blank"
                rel="noopener noreferrer">建行“快贷”</a></p>
          </article>
        </section>
      </a-card>
    </section>
    <section class="echarts">
      <Echarts />
      <ExchangeRate />
    </section>
  </div>
</template>

<script>
import Echarts from '@/components/echarts/Echarts'
import ExchangeRate from '@/components/echarts/ExchangeRate'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Echarts,
    ExchangeRate,
  },
}
</script>

<style scoped lang='less'>
.home {
  background-color: #f0f2f5;
  height: 76vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  .card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      p {
        margin: 10px;
        a {
          color: #363434;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
  .echarts {
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .Echarts {
    background-color: #fff;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.ant-card {
  margin-bottom: 20px;
}
</style>