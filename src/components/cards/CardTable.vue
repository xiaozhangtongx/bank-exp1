<!--
 * @Description: 存取款管理
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 22:44:33
-->

<template>
  <div>
    <a-form-model layout="inline" :rules="rules" :model="infor">
      <a-form-model-item prop="uid">
        <a-input v-model="infor.uid" placeholder="储户账号" />
      </a-form-model-item>
      <a-form-model-item prop="cid">
        <a-input v-model="infor.cid" placeholder="银行卡号" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button v-model="infor.uid" type="primary" icon="search" @click="getCarList">
          查询
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <!-- 银行卡表单 -->
    <el-table :data="cardList" stripe style="width: 100%;margin:20px 0;" border fit>
      <el-table-column type="index" align="center" />
      <el-table-column prop="uid" label="银行账户" align="center" />
      <el-table-column prop="cid" label="银行卡卡号" align="center" />
      <el-table-column prop="username" label="用户姓名" align="center" />
      <el-table-column label="密码" align="center">
        <template slot-scope="scope">{{ scope.row.cpassword | formatupwd }}</template>
      </el-table-column>
      <el-table-column prop="money" label="余额" align="center" />
      <el-table-column prop="operation" label="操作" align="center">
        <template slot-scope="scope">
          <a-space>
            <a-button type="danger" size="small"
              @click="showConfirmPwd(scope.row.cid,scope.row.cpassword,scope.row.money,oporation.saveMoneys)">
              存款
            </a-button>
            <a-button type="primary" size="small"
              @click="showConfirmPwd(scope.row.cid,scope.row.cpassword,scope.row.money,oporation.getMoneys)">
              取款
            </a-button>
          </a-space>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="infor.cpageNum" :page-size="infor.cpageSize" :page-sizes="[1, 2, 5, 10]"
      layout="total, sizes, prev, pager, next, jumper" :total="total" style="margin-top:20px">
    </el-pagination>
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
  data() {
    const isNum = (rule, value, callback) => {
      console.log(value)
      const money = /^[0-9]*$/
      if (!money.test(value)) {
        callback(new Error('账号和卡号只能是数字'))
      } else {
        callback()
      }
    }
    return {
      infor: {
        cid: '',
        uid: '',
        cpageNum: 1,
        cpageSize: 5,
      },
      rules: {
        cid: [{ validator: isNum, trigger: 'blur' }],
        uid: [{ validator: isNum, trigger: 'blur' }],
      },
      oporation: {
        saveMoneys: 'savemoneys',
        getMoneys: 'getmoneys',
      },
      cardList: [],
      total: 0,
      money: 0, // 当前卡的余额
      cid: 0, // 当前卡的账号
    }
  },
  components: {
    ConfirmPwd,
    SaveMoney,
    GetMoney,
    ChangePwd,
  },
  created() {
    this.getCarList()
  },
  methods: {
    // 获得用户列表
    async getCarList() {
      const { data: res } = await this.$http.post('cardlist', this.infor)
      if (res.number == 0) {
        return this.$message.error('该银行卡不存在，请检查你的输入是否正确！')
      } else {
        this.cardList = res.data
        // console.log(res)
        this.total = res.number
        this.$message.success('获取银行卡列表成功！')
      }
    },

    // 监听pageSize改变的事件
    handleSizeChange(newSize) {
      console.log(this.infor.cpageSize)
      this.infor.cpageSize = newSize
      this.getCarList() // 数据发生改变重新申请数据
    },

    // 监听pageNum改变的事件
    handleCurrentChange(newPage) {
      this.infor.cpageNum = newPage
      this.getCarList() // 数据发生改变重新申请数据
    },

    // 打开输入密码的窗口
    showConfirmPwd(cid, cpassword, money, oporation) {
      this.money = money
      this.cid = cid
      this.$refs.confirPwd.showConfirmPwdDia(cpassword, oporation)
    },

    // 打开存款表单
    showsaveMoney() {
      this.$refs.saveMoney.showsaveMoneyDia(this.cid, this.money)
    },

    // 打开取款表单
    showgetMoney() {
      this.$refs.getMoney.showgetMoneyDia(this.cid, this.money)
    },
  },

  // 过滤器
  filters: {
    formatupwd(arg) {
      return (arg + '').replace(arg + '', '******')
    },
  },
}
</script>

<style scoped lang='less'>
</style>