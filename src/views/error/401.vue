<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-14 13:05:46
-->
<template>
  <div class="error-wrapper">
    <div class="error-content">
      <a-row :gutter="15">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="pic-error">
            <img src="../../assets/401_images/401.png" alt="401">
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="bullshit">
            <div class="bullshit-oops">抱歉!</div>
            <div class="bullshit-headline">您没有操作权限...</div>
            <div class="bullshit-info">当前帐号没有操作权限,请更换账号重新操作！</div>
            <router-link to="./main/home" class="bullshit-return-home">返回首页</router-link>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page401',
}
</script>

<style lang="less">
@import '../../assets/less/error-page.less';
</style>
