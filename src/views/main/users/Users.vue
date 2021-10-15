<!--
 * @Description: 用户管理
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 16:53:18
-->
<template>
  <a-card>
    <h2>储户信息管理</h2>
    <UserTable style="margin-top:20px" />
  </a-card>
</template>


<script>
import UserTable from '@/components/users/UserTable'
export default {
  name: 'Users',
  data() {
    return {}
  },
  methods: {},
  components: {
    UserTable,
  },
}
</script>

<style scoped lang='less'>
</style>