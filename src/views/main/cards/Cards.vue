<!--
 * @Description: 存取款管理页面,管理员使用
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 15:45:05
-->
<template>
  <a-card>
    <h2>存取款管理</h2>
    <CardTable />
  </a-card>
</template>


<script>
import CardTable from '@/components/cards/CardTable'
export default {
  name: 'Users',
  data() {
    return {}
  },
  methods: {},
  components: {
    CardTable,
  },
}
</script>

<style scoped lang='less'>
</style>