<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-16 08:58:11
-->
<template>
  <div>
    <!-- 创建新用户对话框 -->
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="370px" @close="addDialogClosed">
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="30%"
        style="width:96%">
        <!-- 用户名 -->
        <el-form-item label="用户名：" prop="username" autofocus="true">
          <el-input v-model="addForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 性别 -->
        <el-form-item label="性别：" prop="usex">
          <el-radio v-model="addForm.usex" label="男">男</el-radio>
          <el-radio v-model="addForm.usex" label="女">女</el-radio>
        </el-form-item>
        <!-- 身份证号码 -->
        <el-form-item label="身份证号：" prop="uidnum" autofocus="true">
          <el-input v-model="addForm.uidnum" placeholder="请输入身份证号码"></el-input>
        </el-form-item>
        <!-- 手机号码 -->
        <el-form-item label="手机号：" prop="uphonenum">
          <el-input v-model="addForm.uphonenum" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <!-- 登录密码 -->
        <el-form-item label="登录密码：" prop="upassword">
          <el-input type="password" v-model="addForm.upassword" placeholder="请输入6位登录密码"></el-input>
        </el-form-item>
        <!-- 确认登录密码 -->
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input type="password" v-model="addForm.checkPass" placeholder="请再输入你的登录密码"></el-input>
        </el-form-item>
      </el-form>
      <!-- 内容底部区域 -->
      <span slot="footer" class="dialog-footer">
        <a-button @click="addDialogVisible = false">取 消</a-button>
        <a-button style="margin-left:20px" type="primary" @click="addUser">确 定</a-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      // console.log(this.checkPass)
      console.log(value.length)
      if (value === '' || value.length != 6) {
        callback(new Error('请输入6位密码'))
      } else {
        if (this.checkPass != '') {
          this.$refs.addFormRef.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      // console.log(value)
      if (value == '') {
        callback(new Error('请再次输入密码'))
      } else if (value != this.addForm.upassword) {
        console.log(value)
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 对话框显示
      addDialogVisible: false,
      // 添加用户表单项
      addForm: {
        username: '',
        usex: '男',
        upassword: '',
        uidnum: '',
        uphonenum: '',
        checkPass: '',
      },
      // 验证规则
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2到 8 个字符', trigger: 'blur' },
        ],
        upassword: [{ validator: validatePass, trigger: 'blur', required: true }],
        checkPass: [{ validator: validatePass2, trigger: 'blur', required: true }],
        uidnum: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' },
          { len: 18, message: '长度为18位', trigger: 'blur' },
        ],
        uphonenum: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { len: 11, message: '长度为11位', trigger: 'blur' },
        ],
        usex: [{ required: true, trigger: 'blur' }],
      },
    }
  },
  methods: {
    // 监听添加用户
    addDialogClosed() {
      this.$refs.addFormRef.resetFields() // 重置表单项
    },
    // 添加用户
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        console.log(this.addForm)
        if (!valid) return
        // 发起请求
        const { data: res } = await this.$http.post('adduser', this.addForm)
        console.log(res)
        if (res == 'success') {
          this.$message.success('添加用户成功！！！')
          // 隐藏
          this.addDialogVisible = false
          this.$parent.getUserList()
        } else {
          return this.$message.error('添加用户失败！！！')
        }
      })
    },
    showModal() {
      this.addDialogVisible = true
    },
  },
}
</script>

<style scoped lang='less'>
</style>