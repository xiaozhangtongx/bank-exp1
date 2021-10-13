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
        <a-input placeholder="储户账号" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input placeholder="储户姓名" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input placeholder="储户性别" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" icon="search">
          查询
        </a-button>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" style="background:#0DBC79;border:none">
          添加储户
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