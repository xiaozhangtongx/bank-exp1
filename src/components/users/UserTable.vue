<!--
 * @Description:用户列表
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 16:41:03
-->
<template>
  <div>
    <!-- 查询区域 -->
    <a-form-model layout="inline" :rules="rules" :model="infor">
      <a-form-model-item>
        <a-button type="primary" style="background:#0DBC79;border:none" icon="plus"
          @click="showAddUserform">
          添加
        </a-button>
      </a-form-model-item>
      <a-form-model-item prop="uid">
        <a-input v-model="infor.uid" placeholder="储户账号" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="infor.username" placeholder="储户姓名" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="infor.uidnum" placeholder="储户身份证号码" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" icon="search" @click="getUserList">
          查询
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <!-- 表单区域 -->
    <el-table :data="userList" stripe style="width: 100%;margin:20px 0;" border fit>
      <af-table-column type="index" align="center" />
      <el-table-column prop="username" label="姓名" align="center" />
      <el-table-column prop="usex" label="性别" align="center" />
      <el-table-column prop="uid" label="银行账号" align="center" />
      <el-table-column label="登录密码" align="center">
        <template slot-scope="scope">{{ scope.row.upassword | formatupwd }}</template>
      </el-table-column>
      <af-table-column prop="uidnum" label="身份证号" align="center" />
      <af-table-column prop="uphonenum" label="手机号码" align="center" />
      <el-table-column prop="operation" label="操作" align="center">
        <template slot-scope="scope">
          <a-space>
            <a-tooltip placement="left">
              <template slot="title">
                信息修改
              </template>
              <a-popconfirm title="你确定修改该用户的信息吗?" ok-text="确定" cancel-text="取消"
                @confirm="showEditDialog(scope.row.uid)" @cancel="cancel">
                <a-button type="primary" size="small" icon="edit">
                </a-button>
              </a-popconfirm>
            </a-tooltip>
            <a-tooltip>
              <template slot="title">
                用户删除
              </template>
              <a-button type="danger" size='small' icon="delete"
                @click="confirmDelet(scope.row.uid)"></a-button>
            </a-tooltip>
          </a-space>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="infor.pageNum" :page-size="infor.pageSize" :page-sizes="[1, 2, 5, 100]"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
    <!-- 添加用户对话框 -->
    <AddUserForm ref="adduser" />

    <!-- 修改用户对话框 -->
    <el-dialog title="修改用户信息" :visible.sync="editDialogVisible" width="360px"
      @colse="editDialogClosed">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="26%"
        width="95%">
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <!-- 手机号 -->
        <el-form-item label="手机号" prop="uphonenum">
          <el-input v-model="editForm.uphonenum"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="upassword">
          <el-input type="password" v-model="editForm.upassword"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <a-button @click="editDialogVisible = false">取 消</a-button>
        <a-button type="primary" @click="editUserInfo" style="margin-left:20px">确 定</a-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import AddUserForm from '@/components/users/AddUserForm'
export default {
  data() {
    const isNum = (rule, value, callback) => {
      console.log(value)
      const money = /^[0-9]*$/
      if (!money.test(value)) {
        callback(new Error('账号只能是数字'))
      } else {
        callback()
      }
    }
    return {
      infor: {
        uid: '',
        username: '',
        uidnum: '',
        pageNum: 1,
        pageSize: 5,
      },
      rules: {
        uid: [{ validator: isNum, trigger: 'blur' }],
      },
      userList: [],
      total: 0,
      // 控制修改用户对话框显示/隐藏
      editDialogVisible: false,
      // 修改用户信息
      editForm: {},
      // 修改用户表单验证规则
      editFormRules: {
        upassword: [
          { message: '请输入新的密码', trigger: 'blur' },
          { len: 6, message: '请输入长度为6位的新密码', trigger: 'blur' },
        ],
        uphonenum: [
          { message: '请输入新的手机号码', trigger: 'blur' },
          { len: 11, message: '请输入长度为11位的手机号码', trigger: 'blur' },
        ],
      },
    }
  },

  components: {
    AddUserForm,
  },

  created() {
    this.getUserList()
  },

  methods: {
    // 获得用户列表
    async getUserList() {
      const { data: res } = await this.$http.post('userlist', this.infor)
      if (res.number == 0) {
        return this.$message.error('该用户不存在，请检查你的输入是否正确！')
      } else {
        this.userList = res.data
        // console.log(res)
        this.total = res.number
        this.$message.success('获取用户列表成功！')
      }
    },

    // 监听pageSize改变的事件
    handleSizeChange(newSize) {
      console.log(this.infor.pageSize)
      this.infor.pageSize = newSize
      this.getUserList() // 数据发生改变重新申请数据
    },

    // 监听pageNum改变的事件
    handleCurrentChange(newPage) {
      this.infor.pageNum = newPage
      this.getUserList() // 数据发生改变重新申请数据
    },

    // 展示添加用户对话框
    showAddUserform() {
      this.$refs.adduser.showModal()
    },

    // 展示修改框
    async showEditDialog(uid) {
      console.log(uid)
      const { data: res } = await this.$http.get('getupdate?uid=' + uid)
      console.log(res)
      this.editForm = res
      this.editDialogVisible = true
    },

    // 关闭窗口
    editDialogClosed() {
      this.$refs.editFormRef.resetFields()
    },

    // 确认修改
    editUserInfo() {
      this.$refs.editFormRef.validate(async (valid) => {
        console.log(valid)
        if (!valid) return
        // 发起请求
        const { data: res } = await this.$http.put('edituser', this.editForm)
        console.log(res)
        if (res != 'success') return this.$message.error('用户修改失败，请再尝试一次！')
        this.$message.success('用户修改成功！！！')
        //隐藏
        this.editDialogVisible = false
        this.getUserList()
      })
    },

    // 确定是否删除用户
    confirmDelet(uid) {
      this.$confirm({
        title: '此操作将永久删除该用户, 是否继续?',
        okText: '是',
        cancelText: '否',
        icon: 'exclamation-circle',
        onOk: () => {
          this.deleteUser(uid)
        },
        onCancel: () => {
          this.$message.warn('你取消了删除操作')
        },
      })
    },

    // 删除用户操作
    async deleteUser(uid) {
      const { data: res } = await this.$http.delete('deleteuser?uid=' + uid)
      if (res != 'success') {
        return this.$message.error('用户删除失败！！！')
      }
      this.$message.success('用户删除成功！！！')
      this.getUserList()
    },

    // 取消操作
    cancel() {
      return this.$message.success('你取消了该操作')
    },
  },

  // 过滤器
  filters: {
    formatupwd(arg) {
      return arg.replace(arg, '******')
    },
  },
}
</script>

<style scoped lang='less'>
</style>