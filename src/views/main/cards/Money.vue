<!--
 * @Description: 储户存取款
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-13 23:14:06
-->
<template>
  <a-card>
    <h2>存取款管理</h2>
    <a-form-model layout="inline">
      <a-form-model-item>
        <a-input placeholder="银行卡号" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" icon="search">
          查询
        </a-button>
      </a-form-model-item>
    </a-form-model>

    <UcardTable style="margin-top:20px" />
  </a-card>
</template>


<script>
import UcardTable from '@/components/cards/UcardTable'
export default {
  name: 'Users',
  data() {
    return {}
  },
  methods: {},
  components: {
    UcardTable,
  },
}
</script>

<style scoped lang='less'>
</style>