<!--
 * @Description: 用户管理
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 16:53:18
-->
<template>
  <a-card>
    <h2>储户信息管理</h2>
    <a-form-model layout="inline">
      <a-form-model-item>
        <a-button type="primary" style="background:#0DBC79;border:none" icon="plus">
          添加
        </a-button>
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="queryInfo.uid" placeholder="储户账号" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="queryInfo.username" placeholder="储户姓名" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="queryInfo.usex" placeholder="储户性别" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" icon="search" @click="getUserList">
          查询
        </a-button>
      </a-form-model-item>
    </a-form-model>

    <UserTable style="margin-top:20px" />
  </a-card>
</template>


<script>
import UserTable from '@/components/users/UserTable'
export default {
  name: 'Users',
  data() {
    return {
      userList: [],
      total: 0,
      // 查询信息
      queryInfo: {
        uid: '',
        username: '',
        usex: '',
        pageNum: 1,
        pageSize: 5,
      },
    }
  },
  methods: {
    // 获取所有的用户列表
    async getUserList() {
      const { data: res } = await this.$http.post('userlist', this.queryInfo)
      this.userList = res.data
      console.log(this.userList)
      this.total = res.number
      console.log(res)
    },
  },
  components: {
    UserTable,
  },
}
</script>

<style scoped lang='less'>
</style>