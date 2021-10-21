<!--
 * @Description: 储户存取款
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 23:14:06
-->
<template>
  <a-card class="cards">
    <h2>存取款管理</h2>
    <section class="card">
      <UcardTable v-for="item in ucardList.data" :key="item.cid" :cardInfo="item" />
    </section>
  </a-card>
</template>


<script>
import UcardTable from '@/components/cards/UcardTable'
export default {
  created() {
    this.getUser()
  },
  mounted() {
    this.getCardData()
    console.log(this.ucardList)
  },
  data() {
    return {
      ucardList: [], // 储户自己的银行卡
      uid: this.card, //用户账号
    }
  },
  methods: {
    // 获取当前账户的信息
    getUser() {
      this.uid = this.$store.state.user.uid
      console.log(this.uid)
    },
    // 查询该用户银行卡的信息
    async getCardData() {
      const { data: res } = await this.$http.get('ucardlist?uid=' + this.uid)
      this.ucardList = res
      // console.log(res)
    },
  },
  components: {
    UcardTable,
  },
}
</script>

<style scoped lang='less'>
.cards {
  height: 76vh;
}
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>