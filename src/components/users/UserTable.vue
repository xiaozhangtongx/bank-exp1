<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 16:41:03
-->
<template>
  <div>
    <a-form-model layout="inline">
      <a-form-model-item>
        <a-button type="primary" style="background:#0DBC79;border:none" icon="plus">
          添加
        </a-button>
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="infor.uid" placeholder="储户账号" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="infor.username" placeholder="储户姓名" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input v-model="infor.usex" placeholder="储户性别" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" icon="search" @click="getUserList">
          查询
        </a-button>
      </a-form-model-item>
    </a-form-model>

    <el-table :data="userList" stripe style="width: 100%;margin:20px 0;" border fit>
      <af-table-column type="index" align="center" />
      <af-table-column prop="username" label="姓名" align="center" />
      <af-table-column prop="usex" label="性别" align="center" />
      <af-table-column prop="ubirthday" label="出生日期" align="center" />
      <af-table-column prop="uid" label="银行账号" align="center" />
      <el-table-column label="登录密码" align="center">
        <template slot-scope="scope">{{ scope.row.upassword | formatupwd }}</template>
      </el-table-column>
      <af-table-column prop="uidnum" label="身份证号" align="center" />
      <af-table-column prop="uphonenum" label="手机号码" align="center" />
      <af-table-column prop="operation" label="操作" align="center">
        <a-space>
          <a-tooltip>
            <template slot="title">
              信息修改
            </template>
            <a-button type="primary" style="background:#009688; border:none" size="small"
              icon="edit" />
          </a-tooltip>
          <a-tooltip>
            <template slot="title">
              用户删除
            </template>
            <a-button type="danger" size='small' icon="delete"></a-button>
          </a-tooltip>
        </a-space>
      </af-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="infor.pageNum" :page-size="infor.pageSize" :page-sizes="[1, 2, 5, 100]"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>

</template>

<script>
export default {
  data() {
    return {
      infor: {
        uid: '',
        username: '',
        usex: '',
        pageNum: 1,
        pageSize: 5,
      },
      userList: [],
      total: 0,
    }
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.post('userlist', this.infor)
      this.userList = res.data
      console.log(res)
      this.total = res.number
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
  },
  filters: {
    formatupwd(arg) {
      return arg.replace(arg, '******')
    },
  },
}
</script>

<style scoped lang='less'>
</style>