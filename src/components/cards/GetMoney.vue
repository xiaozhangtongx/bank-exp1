<!--
 * @Description: 取款操作
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-17 16:11:42
-->
<template>
  <div>
    <el-dialog title="请输入要取钱的金额" :visible.sync="getMoneyDialogVisible" width="350px"
      @colse="getMoneyDialogClosed">
      <el-form :model="getMoney" :rules="rules" ref="getMoneyRef" label-width="29%" width="70%">
        <!-- 金额 -->
        <el-form-item label="取款金额:" prop="getMoney">
          <el-input v-model="getMoney.getMoney" placeholder="请输入要取出的金额" style="width:80%">
          </el-input> 元
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <a-button @click="getMoneyDialogClosed">取 消</a-button>
        <a-button type="primary" @click="getMoneys" style="margin-left:20px">确 定</a-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    const isNum = (rule, value, callback) => {
      console.log(value)
      const money = /^[0-9]*$/
      if (!money.test(value)) {
        callback(new Error('取出的钱只能是正整数'))
      } else {
        callback()
      }
    }
    return {
      // 现在要取出的钱
      getMoney: {
        getMoney: '',
      },
      // 向服务器发起请求的数据
      getMoney: {
        cid: '', // 银行卡卡号
        money: 0, // 余额
      },
      getMoneyDialogVisible: false,
      // 取款表单验证规则
      rules: {
        getMoney: [
          { required: true, message: '请输入取款金额', trigger: 'blur' },
          { validator: isNum, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 关闭取款操作的框
    getMoneyDialogClosed() {
      this.getMoneyDialogVisible = false
      this.$message.warn('你已经取消了取款操作！！！')
      this.$refs.getMoneyRef.resetFields() // 重置表单项
    },
    // 打开取款操作的窗口
    showgetMoneyDia(cid, money) {
      // console.log(money, cid)
      this.getMoney.money = money
      this.getMoney.cid = cid
      this.getMoneyDialogVisible = true
    },
    // 取款
    getMoneys() {
      this.$refs.getMoneyRef.validate(async (valid) => {
        console.log(valid)
        if (!valid) return
        let nowmoney = this.getMoney.money - parseInt(this.getMoney.getMoney)
        if (nowmoney < 0) {
          return this.$message.error('你当前的银行卡余额不足！')
        } else {
          this.getMoney.money = nowmoney
          // 发起请求
          const { data: res } = await this.$http.put('getmoney', this.getMoney)
          console.log(res)
          if (res != 'success') return this.$message.error('取款失败！！！')
          this.$message.success('取款成功！！！')
          this.$refs.getMoneyRef.resetFields() // 重置表单项
          //隐藏
          this.getMoneyDialogVisible = false
          this.$parent.getCarList()
        }
      })
    },
  },
}
</script>

<style scoped lang='less'>
</style>