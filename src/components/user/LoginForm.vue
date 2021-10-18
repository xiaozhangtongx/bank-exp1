<!--
 * @Description: 登录表单
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 15:12:35
-->

<template>
  <a-form id="components-form-demo-normal-login" :form="form" class="login-form"
    @submit="handleSubmit">
    <a-form-item>
      <a-input v-decorator="[
          'uid',
          { rules: [{ required: true, message: '请输入你的账号/工号',min:6,max: 8}] },
        ]" placeholder="账号/工号">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input-password v-decorator="[
          'upassword',
          { rules: [{ required: true, message: '请输入你的六位密码!' ,min:6,max:6}] },
        ]" type="password" placeholder="密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input-password>
    </a-form-item>
    <a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">
          登录
        </a-button>
      </a-form-item>

    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        // console.log(values.userId.length)
        if (!err) {
          console.log(values.uid.length)
          let res = null
          if (values.uid.length == 6) {
            res = await this.$http.post('alogin', values)
          } else {
            res = await this.$http.post('login', values)
          }
          // let { data: res } = await this.$http.post('login', values)
          console.log(res.data)
          if (res.data.flag == 'ok') {
            this.$store.dispatch('saveUserInfo', res.data.data)
            window.sessionStorage.setItem('store', JSON.stringify(this.$store.state))
            this.$router.replace('/main/home') // 页面跳转
            return this.$message.success('登录成功')
          } else {
            return this.$message.error('登录失败，请检查你输入的账号或密码是否正确！')
          }
        }
      })
    },
  },
}
</script>


<style lang="less" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/deep/ .ant-input,
.ant-btn {
  width: 300px;
  height: 50px;
}
.ant-form-item {
  margin-bottom: 5px;
}

/deep/.ant-form-item-control {
  margin-top: 5px;
  margin-bottom: 4px;
}
</style>