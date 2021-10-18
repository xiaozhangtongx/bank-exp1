<!--
 * @Description: 存款表单
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-17 14:13:21
-->
<template>
  <div>
    <el-dialog title="请输入要存入的金额" :visible.sync="saveMoneyDialogVisible" width="350px"
      @colse="saveMoneyDialogClosed">
      <el-form :model="saveMoney" :rules="rules" ref="saveMoneyRef" label-width="29%" width="70%">
        <!-- 金额 -->
        <el-form-item label="存款金额:" prop="saveMoney">
          <el-input v-model="saveMoney.saveMoney" placeholder="请输入要存入的金额" style="width:80%">
          </el-input> 元
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <a-button @click="saveMoneyDialogClosed">取 消</a-button>
        <a-button type="primary" @click="saveMoneys" style="margin-left:20px">确 定</a-button>
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
        callback(new Error('存入的钱只能是正整数'))
      } else {
        callback()
      }
    }
    return {
      // 现在要存入的钱
      saveMoney: {
        saveMoney: '',
      },
      // 向服务器发起请求的数据
      savemoney: {
        cid: '', // 银行卡卡号
        money: 0, // 余额
      },
      saveMoneyDialogVisible: false,
      // 存款表单验证规则
      rules: {
        saveMoney: [
          { required: true, message: '请输入存款金额', trigger: 'blur' },
          { validator: isNum, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 关闭存钱的框
    saveMoneyDialogClosed() {
      this.saveMoneyDialogVisible = false
      this.$message.warn('你已经取消了存款操作！！！')
      this.$refs.saveMoneyRef.resetFields() // 重置表单项
    },
    // 打开存钱的窗口
    showsaveMoneyDia(cid, money) {
      // console.log(money, cid)
      this.savemoney.money = money
      this.savemoney.cid = cid
      this.saveMoneyDialogVisible = true
    },
    // 存款
    saveMoneys() {
      this.$refs.saveMoneyRef.validate(async (valid) => {
        console.log(valid)
        if (!valid) return
        this.savemoney.money = this.savemoney.money + parseInt(this.saveMoney.saveMoney)
        console.log(this.savemoney)
        const { data: res } = await this.$http.put('savemoney', this.savemoney)
        console.log(res)
        if (res != 'success') return this.$message.error('存款失败！！！')
        this.$message.success('存款成功！！！')
        this.$refs.saveMoneyRef.resetFields() // 重置表单项
        //隐藏
        this.saveMoneyDialogVisible = false
        this.$parent.getCarList()
      })
    },
  },
}
</script>

<style scoped lang='less'>
</style>