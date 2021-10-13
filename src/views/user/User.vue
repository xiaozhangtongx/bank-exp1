<!--
 * @Description: 用户登录界面
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-11 16:26:51
-->
<template>
  <div class="user">
    <Carousel />
    <div class="loginform">
      <h1>用户登录</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/user/Carousel'
import LoginForm from '@/components/user/LoginForm'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Carousel,
    LoginForm,
  },
}
</script>

<style scoped lang='less'>
.user {
  width: 100vw;
  height: 100vh;
}
.loginform {
  position: fixed;
  top: 20vh;
  right: 6vw;
  display: block;
  transition: all 0.1s;
  width: 360px;
  height: 320px;
  background-color: #deeff8;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 5px #888888;
  h1 {
    text-align: center;
    font-family: '楷体';
    font-weight: 800;
  }
}
</style>