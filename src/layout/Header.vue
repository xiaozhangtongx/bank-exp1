<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 14:57:04
-->
<template>
  <div>
    <a-row>
      <a-col :xs="0" :sm="0" :md="6" :lg="5" :xl="3">
        <h3 style="color:#fff">{{newDate}}</h3>
      </a-col>
      <a-col :xs="21" :sm="22" :md="17" :lg="18" :xl="20">
        <h1 @click="$router.push('/main/home')">
          <a-icon type="credit-card" /> 银行卡管理系统
        </h1>
      </a-col>
      <a-col :xs="3" :sm="2" :md="1" :lg="1" :xl="1">
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-avatar style="backgroundColor:#eee" size="large"
              src="https://qq.yh31.com/tp/zjbq/202006162239246617.gif" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <li @click="logOut">退出</li>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>

  </div>
</template>


<script>
export default {
  name: '',
  data() {
    return {
      newDate: new Date(),
    }
  },
  methods: {
    // 退出登陆
    logOut() {
      window.sessionStorage.clear()
      this.$router.replace('/login')
      this.$store.dispatch('saveUserInfo', null)
      console.log(window.sessionStorage.getItem('store'))
    },
  },
  // 挂载时间
  mounted() {
    let that = this
    this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString()
    })
  },
  // 销毁时清除计时器
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
}
</script>

<style scoped lang='less'>
div {
  h1 {
    text-align: center;
    color: #ffff;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>