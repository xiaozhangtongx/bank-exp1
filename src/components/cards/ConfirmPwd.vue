<!--
 * @Description: 确认密码对话框
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-17 10:47:58
-->

<template>
  <div>
    <el-dialog title="请输入银行卡密码" :visible.sync="checkPwdDialogVisible" width="350px"
      @colse="checkPwdDialogClosed">
      <el-form :model="checkPwdForm" :rules="rules" ref="checkPwdFormRef" label-width="20%"
        width="70%">
        <!-- 密码 -->
        <el-form-item label="密码" prop="checkPwd">
          <el-input type="password" v-model="checkPwdForm.checkPwd" placeholder="请输入银行卡密码">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <a-button @click="checkPwdDialogClosed">取 消</a-button>
        <a-button type="primary" @click="checkPwdInfo" style="margin-left:20px">确 定</a-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      checkPwdForm: {
        checkPwd: '',
      },
      opassword: '',
      checkPwdDialogVisible: false,
      // 确认密码表单验证规则
      rules: {
        checkPwd: [
          { required: true, message: '请输入银行卡密码', trigger: 'blur' },
          { len: 6, message: '长度为6位', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 关闭输入密码的框
    checkPwdDialogClosed() {
      this.checkPwdDialogVisible = false
      this.$message.warn('你已经取消了验证操作！！！')
      this.$refs.checkPwdFormRef.resetFields() // 重置表单项
    },
    // 打开输入密码的窗口
    showConfirmPwdDia(password) {
      this.opassword = password
      // console.log('cid' + cid, 'password' + password)
      this.checkPwdDialogVisible = true
    },
    // 确认输入密码
    checkPwdInfo() {
      this.$refs.checkPwdFormRef.validate((valid) => {
        console.log(valid)
        if (!valid) return
        if (this.checkPwdForm.checkPwd == this.opassword) {
          this.$message.success('密码输入正确！！！')
          this.$refs.checkPwdFormRef.resetFields() // 重置表单项
          this.checkPwdDialogVisible = false
          this.$parent.showsaveMoney()
        } else {
          this.$message.error('密码错误，请稍后再试！！！')
          this.$refs.checkPwdFormRef.resetFields() // 重置表单项
        }
      })
    },
  },
}
</script>

<style scoped lang='less'>
</style>