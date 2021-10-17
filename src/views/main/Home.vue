<!--
 * @Description: 系统首页
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-05 21:26:06
-->
<template>
  <div>
    <h2>{{user}},welcome !</h2>
  </div>
</template>

<script>
export default {
  created() {
    this.getUser()
    // console.log(this.$store.state.user)
  },
  name: '',
  data() {
    return {
      user: '',
    }
  },
  methods: {
    getUser() {
      this.user = this.$store.state.user.username
    },
  },
}
</script>

<style scoped lang='less'>
</style>