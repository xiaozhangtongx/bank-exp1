<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-07 16:41:03
-->
<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%" border fit>
      <af-table-column type="index" align="center" />
      <af-table-column prop="name" label="姓名" align="center" />
      <af-table-column prop="sex" label="性别" align="center" />
      <af-table-column prop="birthday" label="出生日期" align="center" />
      <af-table-column prop="password" label="银行账号" align="center" />
      <af-table-column prop="password" label="登录密码" align="center" />
      <af-table-column prop="idcardnum" label="身份证号" align="center" />
      <af-table-column prop="phonenum" label="手机号码" align="center" />
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
    <el-pagination :current-page="5" :page-sizes="[1, 2, 5, 100]" :page-size="5"
      layout="total, sizes, prev, pager, next, jumper" :total="20" style="margin-top:20px">
    </el-pagination>
  </div>

</template>

<script>
export default {
  created() {
    this.getData()
  },
  data() {
    return {
      zhangsan: {
        name: '张三',
        sex: '男',
        password: '123456',
        idcardnum: '123456789123456789',
        email: 'zhangsan@qq.com',
        birthday: '2000-09-09',
        phonenum: '12345678912',
        money: 500,
      },
      tableData: [],
    }
  },
  methods: {
    getData() {
      for (let i = 0; i < 6; i++) {
        this.zhangsan.password = this.zhangsan.password.replace(/^(\d{1})\d{4}(\d+)/, '$1****$2')
        this.tableData.push(this.zhangsan)
      }
    },
  },
}
</script>

<style scoped lang='less'>
</style>