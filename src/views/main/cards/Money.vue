<!--
 * @Description: 储户存取款
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 23:14:06
-->
<template>
  <a-card>
    <h2>存取款管理</h2>
    <section class="card">
      <UcardTable v-for="item in list" :key="item.id" style="margin-top:20px" />
    </section>
  </a-card>
</template>


<script>
import UcardTable from '@/components/cards/UcardTable'
export default {
  name: 'Users',
  data() {
    return {
      list: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    }
  },
  methods: {},
  components: {
    UcardTable,
  },
}
</script>

<style scoped lang='less'>
.card {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
}
</style>