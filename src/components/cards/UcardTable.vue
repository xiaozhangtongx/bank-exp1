<!--
 * @Description: 储户银行卡列表
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 23:18:24
-->
<template>
  <div class="cardinfo">
    <a-card hoverable style="width: 270px">
      <img slot="cover" alt="银行卡" src="../../assets/images/card.png" />
      <section class="card"></section>
      <section></section>
      <template slot="actions" class="ant-card-actions">
        <a-button type="danger" style="background:#F4D100;border:none">
          存款
        </a-button>
        <a-button type="primary">
          取款
        </a-button>
        <a-button type="danger">
          修改
        </a-button>
      </template>
      <a-card-meta :title="'银行卡卡号:'+`${cid}`">

      </a-card-meta>
      <li class="showmoney">
        <label style="font-size:16px">当前余额:</label>
        <a-input disabled size="small" :type="style" v-model="money" />
        <a-button type="primary" style="backgroundColor:#07C160;border:none" size="small"
          @click="ShowMoney">
          {{state}}
        </a-button>
      </li>

    </a-card>
  </div>

</template>


<script>
export default {
  data() {
    return {
      cid: 1111114,
      money: 100,
      style: 'password',
      state: '查看',
    }
  },
  methods: {
    // 查看银行卡余额
    ShowMoney() {
      if (this.state == '查看') {
        this.style = 'text'
        this.state = '隐藏'
      } else {
        this.style = 'password'
        this.state = '查看'
      }
    },
  },
}
</script>

<style scoped lang='less'>
.cardinfo {
  height: 60vh;
}
.ant-card,
img {
  border-radius: 10px;
}
.showmoney {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
.ant-input {
  width: 100px;
  border: none;
}
</style>