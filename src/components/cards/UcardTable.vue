<!--
 * @Description: 储户银行卡列表
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 23:18:24
-->
<template>
  <div>
    <!-- 银行卡表单 -->
    <el-table :data="tableData" stripe style="width: 100%" border fit>
      <el-table-column type="index" align="center" />
      <el-table-column prop="id" label="银行卡卡号" align="center" />
      <el-table-column prop="password" label="密码" align="center" />
      <el-table-column prop="money" label="余额" align="center" />
      <el-table-column prop="operation" label="操作" align="center">
        <a-space>
          <a-button type="danger" style="background:#009688; border:none" size="small">
            存款
          </a-button>
          <a-button type="primary" style="background:#888; border:none" size="small">
            取款
          </a-button>
          <a-tooltip>
            <template slot="title">
              修改密码
            </template>
            <a-button type="danger" size="small" icon="key" />
          </a-tooltip>
        </a-space>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination :current-page="5" :page-sizes="[1, 2,5]" :page-size="5"
      layout="total, sizes, prev, pager, next, jumper" :total="5" style="margin-top:20px">
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
      card: {
        id: 123456789,
        password: '123456',
        money: 500,
      },
      tableData: [],
    }
  },
  methods: {
    getData() {
      for (let i = 0; i < 5; i++) {
        this.card.password = this.card.password.replace(this.card.password, '******')
        this.tableData.push(this.card)
      }
    },
  },
}
</script>

<style scoped lang='less'>
</style>