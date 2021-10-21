<!--
 * @Description: 储户银行卡列表
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 23:18:24
-->
<template>
  <div class="cardinfo">
    <div class="card">
      <a-card hoverable style="width: 270px">
        <img slot="cover" alt="银行卡" src="../../assets/images/card.png" />
        <section class="card"></section>
        <section></section>
        <template slot="actions" class="ant-card-actions">
          <a-button type="danger" @click="showConfirmPwd(cid,cpassword,money,'savemoneys')">
            存款
          </a-button>
          <a-button type="primary" @click="showConfirmPwd(cid,cpassword,money,'getmoneys')">
            取款
          </a-button>

          <a-button type="danger" style="background:#3F3F3F;border:none"
            @click="showConfirmPwd(cid,cpassword,money,'changePassword')">
            修改
          </a-button>
        </template>
        <a-card-meta :title="'银行卡卡号:'+`${cid}`">

        </a-card-meta>
        <li class="showmoney">
          <label style="font-size:16px">当前余额:</label>
          <a-input disabled size="small" :type="style" v-model="cardInfo.money" />
          <a-button type="primary" style="backgroundColor:#07C160;border:none" size="small"
            @click="ShowMoney">
            {{state}}
          </a-button>
        </li>

      </a-card>
    </div>
    <!-- 确认密码对话框 -->
    <ConfirmPwd ref="confirPwd" />
    <!-- 存款表单 -->
    <SaveMoney ref="saveMoney" />
    <!-- 取款表单 -->
    <GetMoney ref="getMoney" />
    <!-- 修改密码表单 -->
    <ChangePwd ref="changePassword" />
  </div>

</template>


<script>
import ConfirmPwd from '@/components/cards/ConfirmPwd'
import SaveMoney from '@/components/cards/SaveMoney'
import GetMoney from '@/components/cards/GetMoney'
import ChangePwd from '@/components/cards/ChangePwd'
export default {
  created() {
    this.getCarList()
  },
  props: ['cardInfo'],
  data() {
    return {
      cid: this.cardInfo.cid,
      money: this.cardInfo.money,
      cpassword: this.cardInfo.cpassword,
      style: 'password',
      state: '查看',
    }
  },
  components: { ConfirmPwd, SaveMoney, GetMoney, ChangePwd },
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
    // 获取银行卡的信息
    getCarList() {
      console.log(1)
      // console.log(this.$parent.$parent)
      this.$parent.$parent.getCardData()
    },
    // 打开输入密码的窗口
    showConfirmPwd(cid, cpassword, money, oporation) {
      console.log(this.cpassword)
      this.$refs.confirPwd.showConfirmPwdDia(this.cardInfo.cpassword, oporation)
    },

    // 打开存款表单
    showsaveMoney() {
      this.$refs.saveMoney.showsaveMoneyDia(this.cid, this.cardInfo.money)
    },

    // 打开取款表单
    showgetMoney() {
      this.$refs.getMoney.showgetMoneyDia(this.cid, this.cardInfo.money)
    },

    // 打开修改密码表单
    showchangePwd() {
      this.$refs.changePassword.showchangePwd(this.cid, this.cardInfo.cpassword)
    },
  },
}
</script>

<style scoped lang='less'>
.ant-card,
img {
  border-radius: 10px;
}
.ant-card {
  margin-top: 20px;
}
.ant-input {
  width: 100px;
  border: none;
}
</style>